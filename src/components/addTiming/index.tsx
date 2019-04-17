import React, { useState, useContext, useEffect } from "react";
import { Context, ITimer } from "../../App";
import { ADD_TIME, DEL_TIME } from "../../store/types";
import { style, media } from "typestyle";
import Timer from "../dashboard/Timer";

type AddTimingProps = {
  changeSteps: (sign: string) => void;
};
const colors = [
  "#f6b93b",
  "#b71540",
  "#6a89cc",
  "#82ccdd",
  "#38ada9",
  "#808e9b"
];

const getRandColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length - 1) + 1];
};

const AddTiming = ({ changeSteps }: AddTimingProps) => {
  const { dispatch, store }: any = useContext(Context);
  const [error, setError] = useState("");
  const handleChange = (
    e: React.SyntheticEvent<HTMLInputElement>,
    id: string
  ) => {
    if (e.currentTarget.value == "00:00") {
      setError("YOU CANNOT SET YOUR TIMERS WITH TIME: 00:00");
      return;
    } else {
      setError("");
    }

    const uniqueColor = (): any => {
      const colorA = getRandColor();
      const alreadyPicked = store.timers.some((timer: any) => {
        return timer.color === colorA;
      });
      if (!alreadyPicked) {
        return colorA;
      } else {
        return uniqueColor();
      }
    };

    const updatedTimers = store.timers.map((t: ITimer) => {
      if (t.id === id) {
        t.time = e.currentTarget.value;
      }
      if (!t.color) {
        t.color = uniqueColor();
      }
      return t;
    });

    dispatch({ type: ADD_TIME, payload: updatedTimers });
  };
  const deleteIngr = (e: React.SyntheticEvent, id: string) => {
    const updatedTimers = store.timers.filter((t: ITimer) => t.id !== id);
    dispatch({ type: DEL_TIME, payload: updatedTimers });
  };
  // after ingredients deletion checks if changingSteps is needed
  if (store.timers.length === 0) changeSteps("-");

  const validateTimers = () => {
    return (
      store.timers.every((timer: ITimer) => timer.time !== undefined) &&
      store.timers.length !== 0
    );
  };

  return (
    <div>
      <h1>Add Your Timings</h1>
      {store.timers.map((timer: ITimer) => {
        const id = timer.id;

        return (
          <div className={container} key={id}>
            <Timer ingredient={{ ...timer }} />
            <form className={form}>
              <label htmlFor="time">Your Time:</label>
              <input
                type="time"
                name="time"
                onChange={e => handleChange(e, id)}
                defaultValue={timer.time}
                style={{ background: "rgba(0,0,0,0.3)", outline: "none" }}
              />
              <button
                className={button}
                style={{ color: "#ff7777" }}
                type="button"
                onClick={e => deleteIngr(e, id)}
              >
                Delete Ingredient
              </button>
            </form>
          </div>
        );
      })}
      {error ? (
        <p className={p} style={{ color: "#ff7777" }}>
          {error}
        </p>
      ) : (
        <p className={p} />
      )}
      <p className={p}>In order to proceed you have to fill all your timers</p>
      <div className={buttons}>
        <button className={button} onClick={() => changeSteps("-")}>
          Prev Step
        </button>
        <button
          disabled={!validateTimers()}
          className={validateTimers() ? button : buttonDisabled}
          onClick={() => changeSteps("+")}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

const p = style({
  height: "40px",
  padding: "20px 0",
  margin: "20px 10px"
});
const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const form = style(
  {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "90vw",
    minWidth: "50vw",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "rgba(0,0,0,0.2)",

    $nest: {
      "& button": {
        padding: "15px",
        display: "block"
      },
      "& input": {
        width: "75%",
        fontSize: "2rem",
        boxShadow: "none",
        border: "none",
        margin: "10px auto",
        textAlign: "center",
        color: "white",
        $nest: {
          "&:focus": {
            background: "lightblue"
          }
        }
      },
      "& label": {
        color: "white"
      }
    }
  },
  media({ maxWidth: 600 }, { maxWidth: "100%" })
);
const buttons = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
});

export const button = style({
  boxShadow: "none",
  border: "none",
  background: "lightblue",
  color: "#353b48",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  cursor: "pointer"
});
const buttonDisabled = style({
  boxShadow: "none",
  border: "none",
  background: "lightgrey",
  color: "#353b48",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  cursor: "default"
});

export default AddTiming;
