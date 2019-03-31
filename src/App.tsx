import React, { useState, useReducer, useContext } from "react";
import AddIngredient from "./components/addIngredient";
import AddTiming from "./components/addTiming";
import TimersSummary from "./components/timersSummary";
import { appReducer, initialState } from "./store/appReducer";
import "./App.css";

export interface ITimer {
  time: string;
  ingredient: string;
  ingrImg: string;
  id: string;
}

interface IAppState {
  timers: ITimer[];
  step: number;
}
export interface IAction {
  type: string;
  payload: any;
}

export const Context = React.createContext({});

const App = (): JSX.Element => {
  const [store, dispatch] = useReducer(appReducer, initialState);
  const [state, setState] = useState({ step: 1, timers: [] });
  const { step } = state;
  const changeSteps = (sign: string): void => {
    sign === "+"
      ? setState(
          (state: IAppState): any => ({
            step: step + 1
          })
        )
      : setState(
          (state: IAppState): any => ({
            step: step - 1
          })
        );
  };

  const renderSteps = () => {
    switch (step) {
      case 1: {
        return <AddIngredient changeSteps={changeSteps} />;
      }
      case 2: {
        return <AddTiming changeSteps={changeSteps} />;
      }
      case 3: {
        return <TimersSummary changeSteps={changeSteps} />;
      }
    }
  };

  console.log(store);
  return (
    <Context.Provider value={{ dispatch, store }}>
      <div className="App">
        <header className="App-header">
          <p>Kitchen Helper</p>
          <p>Precise Your Kitchen Timing </p>
          <h2>Step {step}</h2>
          {renderSteps()}
        </header>
      </div>
    </Context.Provider>
  );
};

export default App;
