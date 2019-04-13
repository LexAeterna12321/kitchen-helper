import React, { useEffect, useState } from "react";
const Timer = require("tiny-timer").default;

import { style } from "typestyle";

interface ICounterProps {
  time: number;
  color: string;
  ingrName: string;
}
const Counter = ({ time, color, ingrName }: ICounterProps): JSX.Element => {
  const [timerStatus, setTimerStatus] = useState("");
  const [currTime, setCurrTime] = useState(0);
  const timer = new Timer();
  const vibrationPattern = [
    100,
    300,
    100,
    300,
    100,
    300,
    100,
    300,
    100,
    300,
    100,
    300
  ];
  useEffect(() => {
    // Timer handler

    timer.start(time * 1000, [1000]);
    timer.on("tick", (ms: number) => {
      setCurrTime(timer.time);
    });
    timer.on("done", () => {
      setTimerStatus("DONE!");
      window.navigator.vibrate(vibrationPattern);
    });
  }, []);

  const colorIndicator = style({
    margin: "0 10px",
    background: color,
    width: "15px",
    height: "10px"
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "4fr 1fr",
        gridGap: "15px",
        margin: "0 auto",
        alignItems: "center",
        width: "40vmin"
      }}
    >
      <p
        style={{
          color: color,
          justifySelf: "flex-start",
          fontSize: "3.4vmin"
        }}
      >
        {ingrName} : {!timerStatus ? (currTime / 1000).toFixed(0) : timerStatus}
      </p>
      <div className={colorIndicator} />
    </div>
  );
};

export default Counter;
