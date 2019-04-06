import React, { useState, useContext } from "react";
import { Context } from "../../App";

import { style, media } from "typestyle";
import Timer from "../dashboard/Timer";
type AddTimingProps = {
  changeSteps: (sign: string) => void;
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
      }
      return t;
    });

    dispatch({ type: "ADD_TIME", payload: updatedTimers });
  };
  const deleteIngr = (e: any, id: string) => {
    const updatedTimers = store.timers.filter((t: any) => t.id !== id);
    console.log(updatedTimers);
    dispatch({ type: "DEL_TIME", payload: updatedTimers });
  };
  return (
    <div className={container}>
      <h1>Add Your Timings</h1>
      {store.timers.map((timer: any) => {
        const id = timer.id;
        return (
          <div key={id}>
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
  width: "90vw",
  margin: "0 auto",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "color 2s"
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
