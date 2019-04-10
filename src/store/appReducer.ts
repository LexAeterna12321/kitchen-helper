import { IAction } from "../App";
import { ITimer } from "../App";
export const initialState = {
  timers: <ITimer | any>[]
};

export const appReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "ADD_INGR":
      return { ...state, timers: [...state.timers, action.payload] };
    case "ADD_TIME":
      return { ...state, timers: action.payload };
    case "DEL_TIME":
      return { ...state, timers: action.payload };
    default:
      return state;
  }
};
