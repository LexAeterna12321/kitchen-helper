import React, { useState, useContext } from "react";
const uuidv4 = require("uuid/v4");
import { Context } from "../../App";
import unsplash from "../../axiosConfig/unsplashAPI";
import { button } from "../addTiming/index";
import { style } from "typestyle";
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

    let image = raw.data.results[0].urls.small;
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
      .then(() => setIngredient({ ingrName: "", ingrImg: "" }))
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className={container}>
      <h1>Add Your Ingredients</h1>
      <form onSubmit={e => addIng(e)} className={form}>
        <input
          type="text"
          name="field"
          onChange={e => setIng(e)}
          value={ingredient.ingrName}
        />
        <label htmlFor="field">Type you ingredient Here</label>
      </form>

      <button className={button} type="button" onClick={() => changeSteps("+")}>
        Next Step
      </button>
    </div>
  );
};

const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start"
});
const form = style({
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  $nest: {
    "& input": {
      width: "50%",
      background: "rgba(0,0,0,.3)",
      fontSize: "2rem",
      border: "none",
      margin: " 10px 0",
      textAlign: "center",
      letterSpacing: "3px",
      color: "white",
      outline: "none"
    }
  }
});

// const input = style({
//   background: "rgba(0,0,0,.3)",
//   fontSize: "2rem",
//   boxShadow: "rgba(0,0,0,.3)",
//   border: "none",
//   margin: " 10px 0",
//   textAlign: "center",
//   letterSpacing: "3px",
//   color: "white",
//   outline: "none",
//   $nest: {
//     "&:focus": {
//       background: "rgba(0,0,0,.3)"
//     }
//   }
// });

export default AddIngredient;
