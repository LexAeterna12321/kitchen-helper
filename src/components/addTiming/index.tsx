import React, { useState, useContext } from "react";
import { Context } from "../../App";

import { style, media } from "typestyle";
import Timer from "../dashboard/Timer";
type AddTimingProps = {
  changeSteps: (sign: string) => void;
};
const colors = [
  "#00a8ff",
  "#9c88ff",
  "#fbc531",
  "#4cd137",
  "#e84118",
  "#f5f6fa",
  "#0097e6",
  "#8c7ae6",
  "#e1b12c",
  "#e1b12c",
  "#44bd32",
  "#40739e"
];

const getRandColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length - 1) + 1];
};

const AddTiming = (props: AddTimingProps) => {
  const { dispatch, store }: any = useContext(Context);
  const [time, setTime] = useState({ timeValue: "" });
  const { changeSteps } = props;

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setTime({ timeValue: e.currentTarget.value });
  };
  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const updatedTimers = store.timers.map((t: any) => {
      if (t.id === id) {
        t.time = time.timeValue;
        t.color = getRandColor();
      }
      return t;
    });

    dispatch({ type: "ADD_TIME", payload: updatedTimers });
  };
  const deleteIngr = (e: any, id: string) => {
    const updatedTimers = store.timers.filter((t: any) => t.id !== id);
    dispatch({ type: "DEL_TIME", payload: updatedTimers });
  };
  return (
    <div>
      <h1>Add Your Timings</h1>
      {store.timers.map((timer: any) => {
        const id = timer.id;
        return (
          <div className={container} key={id}>
            <Timer ingredient={{ ...timer }} />
            <form className={form} onSubmit={e => handleSubmit(e, id)}>
              <label htmlFor="time">Your Time:</label>
              <input
                min="0"
                type="number"
                name="time"
                onChange={e => handleChange(e)}
                defaultValue={timer.time}
              />
              <button className={button} type="submit">
                Add Time
              </button>
              <button
                className={button}
                style={{ color: "red" }}
                type="button"
                onClick={e => deleteIngr(e, id)}
              >
                Delete Ingredient
              </button>
            </form>
          </div>
        );
      })}
      <div className={buttons}>
        <button className={button} onClick={() => changeSteps("-")}>
          Prev Step
        </button>
        <button className={button} onClick={() => changeSteps("+")}>
          Next Step
        </button>
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

const form = style(
  {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "90vw",
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
        width: "50%",
        background: "none",
        fontSize: "2rem",
        boxShadow: "none",
        border: "none",
        margin: " 10px 0",
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
  color: "white",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  $nest: {
    "&--red": {
      color: "red"
    }
  }
});

export default AddTiming;
