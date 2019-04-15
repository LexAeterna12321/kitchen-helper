import React from "react";
import { style } from "typestyle";

const Timer = ({ ingredient }: any): JSX.Element => {
  const { ingrName, ingrImg, time } = ingredient;
  return (
    <li className={li}>
      <h2 className={h2}>
        {ingrName} {time ? `| ${time}` : ""}
      </h2>
      <div className={imgWrapper}>
        <img className={img} src={ingrImg} alt="ingredient" />
      </div>
    </li>
  );
};
const li = style({
  listStyleType: "none",
  position: "relative",
  top: "0",
  left: "0",
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  margin: "20px auto"
});

const h2 = style({
  fontSize: "2rem",
  letterSpacing: "2px",
  zIndex: 2,
  textTransform: "uppercase",
  color: "white",
  background: "rgba(0,0,0,0.2)",
  padding: "10px"
});
const imgWrapper = style({
  width: "100%",
  position: "absolute"
});

const img = style({ width: "300px", height: "300px" });

export default Timer;
