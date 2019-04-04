import { IAction } from "../App";
import TimersSummary from "../components/timersSummary";
export const initialState = {
  timers: <any>[]
};

export const appReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "ADD_INGR":
      console.log(action.payload);
      return { ...state, timers: [...state.timers, action.payload] };
    case "ADD_TIME":
      return { ...state, timers: action.payload };
    default:
      return state;
  }
};
