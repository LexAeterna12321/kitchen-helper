import React, { useContext, useState } from "react";
import TimerList from "../Timers/TimerList";
import { button } from "../Button";
import { Context, ITimer } from "../../App";
type TimersSummaryProps = {
  changeSteps: (sign: string) => void;
};
const TimersSummary = (props: TimersSummaryProps) => {
  const { changeSteps } = props;
  const { store }: any = useContext(Context);
  const [error, setError] = useState("");

  const checkForTimers = () => {
    const timersTimeNotFound = store.timers.find((timer: ITimer) => {
      return timer.time === undefined;
    });

    if (timersTimeNotFound) {
      setError("You must pick all your timers before cooking");
      return;
    } else if (store.timers.length === 0) {
      setError("You must add ingredients and timers before cooking");
      return;
    } else {
      setError("");
      changeSteps("+");
    }
  };
  return (
    <div style={{ margin: "0 auto" }}>
      <h1>Timers Summary</h1>
      <TimerList />
      <button className={button} onClick={() => changeSteps("-")}>
        Prev Step
      </button>
      <button
        className={button}
        style={{ background: "#78e08f" }}
        onClick={checkForTimers}
      >
        Let's Cook
      </button>
      {error ? <h3 style={{ color: "#ff7777" }}>{error}</h3> : null}
    </div>
  );
};

export default TimersSummary;
