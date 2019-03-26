import React, { Component } from "react";
import AddIngredient from "./components/addIngredient";
import AddTiming from "./components/addTiming";
import TimersSummary from "./components/timersSummary";
import "./App.css";

export interface ITimer {
  time: number;
  ingredient: string;
  ingrImg: string;
}

interface IAppProps {}
interface IAppState {
  timers: ITimer[];
  step: number;
}

class App extends Component<IAppProps, IAppState> {
  state = { step: 1, timers: [] };

  changeSteps = (sign: string): void => {
    sign === "+"
      ? this.setState(state => ({
          step: state.step + 1
        }))
      : this.setState(state => ({
          step: state.step - 1
        }));
  };

  renderSteps = () => {
    switch (this.state.step) {
      case 1: {
        return <AddIngredient changeSteps={this.changeSteps} />;
      }
      case 2: {
        return <AddTiming changeSteps={this.changeSteps} />;
      }
      case 3: {
        return <TimersSummary changeSteps={this.changeSteps} />;
      }
    }
  };
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <p>Kitchen Helper</p>
          <p>Precise Your Kitchen Timing </p>
        </header>

        <h2>Step {this.state.step}</h2>
        {this.renderSteps()}
      </div>
    );
  }
}

export default App;
