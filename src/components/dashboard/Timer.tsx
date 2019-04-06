import React from "react";
import { style } from "typestyle";

const Timer = ({ ingredient }: any): JSX.Element => {
  const { ingrName, ingrImg, time } = ingredient;
  return (
    <li className={li}>
      <h2 className={h2}>
        {ingrName} {time ? `| ${time}` : ""}
      </h2>
      <img className={img} src={ingrImg} alt="ingredient" />
    </li>
  );
};
const li = style({
  listStyleType: "none",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  margin: "10px 0"
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

const img = style({
  objectFit: "cover",
  position: "absolute",
  margin: "0 auto",
  maxWidth: "100%"
});

export default Timer;
