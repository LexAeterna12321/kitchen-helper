import React, { useState, useContext, useEffect } from "react";
import { Context, ITimer } from "../../App";
import { ADD_TIME, DEL_TIME } from "../../store/types";
import { style, media } from "typestyle";
import Timer from "../Timers/Timer";
import Button from "../Button";
type AddTimingProps = {
  changeSteps: (sign: string) => void;
};
const _colors = [
  "#f6b93b",
  "#b71540",
  "#6a89cc",
  "#82ccdd",
  "#38ada9",
  "#808e9b"
];

const getRandColor = (): string => {
  return _colors[Math.floor(Math.random() * _colors.length - 1) + 1];
};

const AddTiming = ({ changeSteps }: AddTimingProps) => {
  const { dispatch, store }: any = useContext(Context);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.SyntheticEvent<HTMLInputElement>,
    id: string
  ) => {
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
    validateTimers();
    dispatch({ type: ADD_TIME, payload: updatedTimers });
  };
  const deleteIngr = (e: React.SyntheticEvent, id: string) => {
    const updatedTimers = store.timers.filter((t: ITimer) => t.id !== id);
    dispatch({ type: DEL_TIME, payload: updatedTimers });
    validateTimers();
  };
  // after ingredients deletion checks if changingSteps is needed
  if (store.timers.length === 0) changeSteps("-");

  const validateTimers = () => {
    const invalidTimer = store.timers.find((timer: ITimer) => {
      return timer.time === "00:00" || timer.time === undefined;
    });
    if (invalidTimer) {
      return setError(
        "In order to proceed fill all your timers (time 00:00 is invalid)"
      );
    } else {
      setError("");
    }
  };
  useEffect(
    (): any => {
      validateTimers();
    }
  );

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
                className={deleteButton}
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
      <p className={p}>{error ? error : ""}</p>
      <div className={buttons}>
        <Button changeSteps={changeSteps} step="-" value="Prev step" />
        <Button
          changeSteps={changeSteps}
          step="+"
          value="Next step"
          disabled={error ? true : false}
        />
      </div>
    </div>
  );
};

const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const p = style({
  height: "40px",
  padding: "20px 0",
  margin: "20px 10px"
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
const deleteButton = style({
  boxShadow: "none",
  border: "none",
  background: "lightblue",
  color: "#353b48",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  cursor: "pointer",
  opacity: 0.8,
  $nest: {
    "&:hover": {
      opacity: 1
    }
  }
});

export default AddTiming;
