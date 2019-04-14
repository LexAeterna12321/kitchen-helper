import React, { useEffect, useState } from "react";
import { style } from "typestyle";
const Timer = require("tiny-timer").default;

interface ICounterProps {
  time: string;
  color: string;
  ingrName: string;
}
const Counter = ({ time, color, ingrName }: ICounterProps): JSX.Element => {
  // splitting time input from mins:secs to secs in order to pass it to timer functions
  const timeBF = time.split(":");
  const timeFormatted = parseInt(timeBF[0]) * 60 + parseInt(timeBF[1]);
  //
  const [timerStatus, setTimerStatus] = useState("");
  const [currTime, setCurrTime] = useState(timeFormatted);
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
    300,
    100,
    300
  ];
  useEffect(() => {
    // Timer handler

    timer.start(timeFormatted * 1000, [1000]);
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

  const showFormattedTime = () => {
    const timeBF = currTime / 1000;
    const timeFormatted = `${Math.floor(timeBF / 60).toFixed(0)} min ${(
      timeBF % 60
    ).toFixed(0)} sec`;
    return timeFormatted;
  };

  const stopVibrations = (): void => {
    timerStatus === "DONE!" ? window.navigator.vibrate(0) : null;
  };

  const p = style({
    color: color,
    justifySelf: "flex-start",
    fontSize: "3.4vmin"
  });

  return (
    <div className={counter} onClick={stopVibrations}>
      <p className={p}>
        {ingrName} : {!timerStatus ? showFormattedTime() : timerStatus}
      </p>
      <div className={colorIndicator} />
    </div>
  );
};
const counter = style({
  display: "grid",
  gridTemplateColumns: "4fr 1fr",
  gridGap: "15px",
  margin: "10px auto",
  alignItems: "center",
  width: "40vmin"
});

export default Counter;
