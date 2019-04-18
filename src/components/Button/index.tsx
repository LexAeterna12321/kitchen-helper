import React from "react";
import { style, keyframes } from "typestyle";
interface IProps {
  value: string | JSX.Element;
  disabled?: boolean;
  step?: string;
  changeSteps?: any;
  animated?: boolean;
  ingrName?: string;
}

const Button = ({
  value,
  disabled,
  changeSteps,
  step,
  animated,
  ingrName
}: IProps): JSX.Element => {
  if (animated) {
    if (disabled && !ingrName) {
      return <button className={buttonDisabled}>{value}</button>;
    } else if (ingrName) {
      return <button className={button}>{value}</button>;
    } else {
      return (
        <button disabled className={animatedButton}>
          {value}
        </button>
      );
    }
  } else {
    return disabled ? (
      <button disabled className={buttonDisabled}>
        {value}
      </button>
    ) : (
      <button onClick={() => changeSteps(step)} className={button}>
        {value}
      </button>
    );
  }
};

export const button: string = style({
  background: "lightblue",
  boxShadow: "none",
  border: "none",
  color: "#353b48",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  opacity: 0.8,
  cursor: "pointer",
  $nest: {
    "&:hover": {
      opacity: 1
    }
  }
});

const changingButtonAnim = keyframes({
  "0%": { background: "lightblue" },
  "50%": { background: "#33ba57", opacity: 0.8 },
  "100%": { background: "#33cc57", opacity: 1 }
});

const animatedButton = style({
  boxShadow: "none",
  border: "none",
  background: "lightblue",
  color: "#353b48",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  cursor: "default",
  animationName: changingButtonAnim,
  animationDuration: "1.5s",
  animationIterationCount: "1",
  animationFillMode: "both"
});
const buttonDisabled = style({
  boxShadow: "none",
  border: "none",
  background: "lightgrey",
  color: "#353b48",
  margin: "20px",
  padding: "10px",
  textTransform: "uppercase",
  cursor: "not-allowed"
});
export default Button;
