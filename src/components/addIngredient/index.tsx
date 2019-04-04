import React, { useState, useContext } from "react";
const uuidv4 = require("uuid/v4");
import { Context } from "../../App";
import unsplash from "../../axiosConfig/unsplashAPI";

type AddIngredientProps = {
  changeSteps: (sign: string) => void;
};

const AddIngredient = ({ changeSteps }: AddIngredientProps): JSX.Element => {
  const [ingredient, setIngredient] = useState<any>({
    ingrName: "",
    ingrImg: ""
  });

  const { dispatch }: any = useContext(Context);

  const setIng = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setIngredient({ ...ingredient, ingrName: e.currentTarget.value });
  };

  const fetchIngrImg = async (ingrImg: string) => {
    const raw = await unsplash.get(`/search/photos`, {
      params: {
        query: ingrImg
      }
    });

    let image = await raw.data.results[0].urls.small;
    return image;
  };

  const addIng = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    ingredient.id = uuidv4();

    fetchIngrImg(ingredient.ingrName)
      .then(image => {
        ingredient.ingrImg = image;
      })
      .then(() => {
        dispatch({ type: "ADD_INGR", payload: ingredient });
      })
      .then(() => setIngredient({ ...ingredient, ingrName: "", id: "" }));
  };

  return (
    <div>
      <h1>Add Your Ingredients</h1>
      <form onSubmit={e => addIng(e)}>
        <input type="text" name="field" onChange={e => setIng(e)} />
        <label htmlFor="field">Type you ingredient Here</label>
      </form>
      <button type="button" onClick={() => changeSteps("+")}>
        Next Step
      </button>
      <img src={ingredient.ingrImg} alt="" />
    </div>
  );
};

export default AddIngredient;
