import React from "react";

const Timer = ({ ingredient, time, ingrImg }: any) => {
  return (
    <li>
      {ingredient} | {time}
      <img src={ingrImg} alt="" />
    </li>
  );
};

export default Timer;
