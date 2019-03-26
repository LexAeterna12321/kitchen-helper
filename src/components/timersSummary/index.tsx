import React from "react";
type TimersSummaryProps = {
  changeSteps: (sign: string) => void;
};
const TimersSummary = (props: TimersSummaryProps) => {
  const { changeSteps } = props;
  return (
    <div>
      TimersSummary
      <button onClick={() => changeSteps("-")}>Prev Step</button>
      <button onClick={() => changeSteps("+")}>Let's Cook</button>
    </div>
  );
};

export default TimersSummary;
