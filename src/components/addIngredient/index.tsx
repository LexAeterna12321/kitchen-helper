import React, { useState } from "react";
// import ITimer from "../../App";

const AddIngredient: React.SFC = props => {
  const [ingredient, setIngredient] = useState({});

  const setIng = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setIngredient({ ingredient: event.currentTarget.value });
  };

  const addIng = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(ingredient);
    props.changeSteps();
  };
  return (
    <div>
      <h1>Add Your Ingredients</h1>
      <form onSubmit={e => addIng(e)}>
        <input type="text" name="field" onChange={e => setIng(e)} />
        <label htmlFor="field">Type you ingredient Here</label>
      </form>
    </div>
  );
};

export default AddIngredient;
