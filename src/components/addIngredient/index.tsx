import React, { useState } from "react";
// import ITimer from "../../App";

type AddIngredientProps = {
  changeSteps: (sign: string) => void;
};

const AddIngredient = (props: AddIngredientProps) => {
  const [ingredient, setIngredient] = useState({});
  const { changeSteps } = props;

  const setIng = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setIngredient({ ingredient: event.currentTarget.value });
  };

  const addIng = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(ingredient);
    changeSteps("+");
  };

  return (
    <div>
      <h1>Add Your Ingredients</h1>
      <form onSubmit={e => addIng(e)}>
        <input type="text" name="field" onChange={e => setIng(e)} />
        <label htmlFor="field">Type you ingredient Here</label>
      </form>
      <button onClick={() => changeSteps("+")}>Next Step</button>
    </div>
  );
};

export default AddIngredient;
