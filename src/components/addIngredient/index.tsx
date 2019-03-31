import React, { useState, useContext } from "react";
const uuidv4 = require("uuid/v4");
import { Context } from "../../App";
type AddIngredientProps = {
  changeSteps: (sign: string) => void;
};

const AddIngredient = (props: AddIngredientProps): JSX.Element => {
  const [ingredient, setIngredient] = useState<any>({ ingredient: "" });
  const { changeSteps } = props;
  const { dispatch }: any = useContext(Context);
  const setIng = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setIngredient({ ingredient: e.currentTarget.value });
  };

  const addIng = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    ingredient.id = uuidv4();
    dispatch({ type: "ADD_INGR", payload: ingredient });
    setIngredient({ ingredient: "" });
    // changeSteps("+");
  };

  return (
    <div>
      <h1>Add Your Ingredients</h1>
      <form onSubmit={e => addIng(e)}>
        <input
          type="text"
          name="field"
          onChange={e => setIng(e)}
          value={ingredient.ingredient}
        />
        <label htmlFor="field">Type you ingredient Here</label>
      </form>
      <button type="button" onClick={() => changeSteps("+")}>
        Next Step
      </button>
    </div>
  );
};

export default AddIngredient;
