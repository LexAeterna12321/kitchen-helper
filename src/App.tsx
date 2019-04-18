import React, { useState, useReducer } from "react";
import AddIngredient from "./components/AddIngredient";
import AddTiming from "./components/AddTiming";
import TimersSummary from "./components/TimersSummary";
import Dashboard from "./components/Dashboard";
import { appReducer, initialState } from "./store/appReducer";
import "./App.css";

export interface ITimer {
  time: string;
  ingrName: string;
  ingrImg: string;
  id: string;
  color?: string;
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

  const appReset = () => {
    window.navigator.vibrate(0);
    setState({ timers: [], step: 1 });
  };

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

  const renderSteps = (): JSX.Element => {
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
      case 4: {
        return <Dashboard appReset={appReset} />;
      }
      default: {
        return <AddIngredient changeSteps={changeSteps} />;
      }
    }
  };

  return (
    <Context.Provider value={{ dispatch, store }}>
      <div className="App">
        {step === 4 ? null : (
          <header className="App-header">
            <p>Kitchen Helper</p>
            <p>Precise Your Kitchen Timing </p>
            <h4>Step {step}</h4>
          </header>
        )}
        {renderSteps()}
      </div>
    </Context.Provider>
  );
};

export default App;
