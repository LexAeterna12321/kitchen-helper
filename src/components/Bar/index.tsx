import React, { useEffect, useState } from "react";
import { style } from "typestyle";
const ProgressBar = require("progressbar.js");

interface IBarProps {
  color?: string;
  time: string;
  strokeWidth: number;
  zIndex: number;
}
const Bar = ({ color, time, strokeWidth, zIndex }: IBarProps): JSX.Element => {
  useEffect(() => {
    if (ref.current) {
      const circle = new ProgressBar.Circle(ref.current, {
        duration: parseInt(time) * 1000,
        easing: "linear",
        strokeWidth: strokeWidth,
        step: function(state: any, bar: any, attachment: any) {
          bar.path.setAttribute("stroke", state.color);
        }
      });

      const opts = {
        from: { color: color },
        to: { color: color }
      };

      circle.animate(1, opts);
    }
  }, []);

  const ref: any = React.createRef();

  const bar = style({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "90vmin",
    height: "90vmin",
    zIndex: zIndex,
    boxShadow: "0 0 3px 3px rgba(255,255,255,0.2)",
    borderRadius: "50%"
  });

  return <div ref={ref} className={bar} />;
};

export default Bar;
