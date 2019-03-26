import React, { useState } from "react";
// import ITimer from "../../App";

const AddTiming: React.SFC = () => {
  const [ingredient, setIngredient] = useState({});

  const setIng = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setIngredient({ ingredient: event.currentTarget.value });
    console.log(ingredient);
  };
  console.log(ingredient);

  return (
    <div>
      <h1>Add Your Timings</h1>
      <input type="text" name="field" onChange={e => setIng(e)} />
      <label htmlFor="field">Type you ingredient Here</label>
    </div>
  );
};

export default AddTiming;
