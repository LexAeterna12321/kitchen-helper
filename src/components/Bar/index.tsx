import React, { useEffect, useContext, useState } from "react";
import { style } from "typestyle";
const ProgressBar = require("progressbar.js");

const Bar = ({
  color,
  time,
  strokeWidth,
  zIndex
}: {
  color: string;
  time: number;
  strokeWidth: number;
  zIndex: number;
}): JSX.Element => {
  useEffect(() => {
    if (ref.current) {
      const circle = new ProgressBar.Circle(ref.current, {
        duration: time * 1000,
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

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "90vmin",
        height: "90vmin",
        zIndex: zIndex
      }}
    />
  );
};

export default Bar;
