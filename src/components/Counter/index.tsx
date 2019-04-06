import React, { useEffect, useState } from "react";
const Timer = require("tiny-timer").default;
import { style } from "typestyle";
const Counter = ({ time }: any): JSX.Element => {
  const [currTime, setCurrTime] = useState(time);
  const [duration, setDuration] = useState(0);
  let timer = new Timer();
  useEffect(() => {
    timer.start(time * 1000, [10]);

    timer.on("tick", (ms: number) => {
      setCurrTime(timer.time);
      let d = (10000 / timer.time) * 100;
      // console.log(Math.trunc(d));
      setDuration(Math.trunc(d));
    });
  }, []);

  return (
    <>
      <p>{Number(currTime / 1000).toFixed(2)}</p>
      <div
        className={bar}
        style={{ width: `${duration > 100 ? 100 : duration}%` }}
      />
    </>
  );
};

const bar = style({
  position: "relative",
  height: "40px",
  background:
    "linear-gradient(90deg, rgba(2,200,36,1) 0%, rgba(9,230,121,1) 50%, rgba(0,255,200,1))"
});
export default Counter;
