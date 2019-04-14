import React from "react";
import TimerList from "../dashboard/TimerList";
import { button } from "../addTiming/index";

type TimersSummaryProps = {
  changeSteps: (sign: string) => void;
};
const TimersSummary = (props: TimersSummaryProps) => {
  const { changeSteps } = props;

  return (
    <div style={{ margin: "0 auto" }}>
      <h1>TimersSummary</h1>
      <TimerList />
      <button className={button} onClick={() => changeSteps("-")}>
        Prev Step
      </button>
      <button className={button} onClick={() => changeSteps("+")}>
        Let's Cook
      </button>
    </div>
  );
};

export default TimersSummary;
