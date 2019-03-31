import React from "react";
import TimerList from "../dashboard/TimerList";
type TimersSummaryProps = {
  changeSteps: (sign: string) => void;
};
const TimersSummary = (props: TimersSummaryProps) => {
  const { changeSteps } = props;
  return (
    <div>
      <h1>TimersSummary</h1>
      <TimerList />
      <button onClick={() => changeSteps("-")}>Prev Step</button>
      <button onClick={() => changeSteps("+")}>Let's Cook</button>
    </div>
  );
};

export default TimersSummary;
