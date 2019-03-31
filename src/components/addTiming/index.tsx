import React, { useState } from "react";

import TimerList from "../dashboard/TimerList";
type AddTimingProps = {
  changeSteps: (sign: string) => void;
};

const AddTiming = (props: AddTimingProps) => {
  const [ingredient, setIngredient] = useState({});
  const { changeSteps } = props;

  const setIng = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setIngredient({ ingredient: event.currentTarget.value });
  };

  return (
    <div>
      <h1>Add Your Timings</h1>
      <TimerList />
      <button onClick={() => changeSteps("-")}>Prev Step</button>
      <button onClick={() => changeSteps("+")}>Next Step</button>
    </div>
  );
};

export default AddTiming;
