import React, { useState, useContext } from "react";
import { Context } from "../../App";
import unsplash from "../../axiosConfig/unsplashAPI";
import { style, keyframes } from "typestyle";
import { ADD_INGR } from "../../store/types";
const uuidv4 = require("uuid/v4");
import Loader from "../Loader";
type AddIngredientProps = {
  changeSteps: (sign: string) => void;
};
const inputRef: any = React.createRef();
const AddIngredient = ({ changeSteps }: AddIngredientProps): JSX.Element => {
  const [ingredient, setIngredient] = useState<any>({
    ingrName: "",
    ingrImg: ""
  });

  const { store, dispatch }: any = useContext(Context);
  const [error, setError] = useState("");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const setIng = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setImgLoaded(false);
    setIngredient({ ...ingredient, ingrName: e.currentTarget.value });
  };

  const fetchIngrImg = async (ingrImg: string) => {
    setIsFetching(true);
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
    if (!ingredient.ingrName) {
      setImgLoaded(false);
      setError("You have to type your ingredient first");
      return;
    } else if (store.timers.length > 5) {
      setError("You have reached maximum amount of ingredients");
      return;
    }
    ingredient.id = uuidv4();

    fetchIngrImg(ingredient.ingrName)
      .then(image => {
        ingredient.ingrImg = image;
      })
      .then(() => {
        setError("");
        setImgLoaded(true);
        dispatch({ type: ADD_INGR, payload: ingredient });
      })
      .then(() => {
        setIsFetching(false);
        inputRef.current.focus();
        setIngredient({ ingrName: "", ingrImg: "" });
      })
      .catch(() => {
        setError("Ingredient is not in a base, try with another search");
        setImgLoaded(false);
        setIsFetching(false);
        inputRef.current.focus();
      });
  };
  const buttonFetchingChanges = () => {
    if (isFetching)
      return (
        <Loader type="ThreeDots" color="#44bd32" height="15" width="130" />
      );
    else if (imgLoaded) return "Ingredient Added";
    else return "Add Ingredient";
  };

  return (
    <div className={container}>
      <h1 className={h2}>Add Your Ingredients</h1>
      <form onSubmit={e => addIng(e)} className={form}>
        <input
          ref={inputRef}
          disabled={isFetching ? true : false}
          autoFocus
          type="text"
          name="field"
          onChange={e => setIng(e)}
          value={ingredient.ingrName}
        />
        <label htmlFor="field" className={error ? labelError : ""}>
          {error ? error : "Type your ingredient Here (MAX: 6)"}
        </label>
        <p>
          Added ingredients: <span>{store.timers.length}</span>
        </p>
        <button
          type="submit"
          className={
            imgLoaded
              ? animatedButton
              : button({ background: "lightblue", cursor: "pointer" })
          }
        >
          {buttonFetchingChanges()}
        </button>
      </form>

      <button
        className={
          store.timers.length !== 0
            ? button({ background: "lightblue", cursor: "pointer" })
            : button({ background: "lightgrey", cursor: "default" })
        }
        disabled={store.timers.length !== 0 ? false : true}
        type="button"
        onClick={() => changeSteps("+")}
      >
        Next Step
      </button>
    </div>
  );
};

const labelError = style({
  color: "red"
});

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

const button: any = ({ background, cursor }: any) => {
  return style({
    boxShadow: "none",
    border: "none",
    background,
    color: "#353b48",
    margin: "20px",
    padding: "10px",
    textTransform: "uppercase",
    cursor,
    opacity: 0.8,
    $nest: {
      "&:hover": {
        opacity: 1
      }
    }
  });
};

const h2 = style({
  padding: "0 10px"
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
  cursor: "pointer",
  animationName: changingButtonAnim,
  animationDuration: "1.5s",
  animationIterationCount: "1",
  animationFillMode: "both"
});

export default AddIngredient;
