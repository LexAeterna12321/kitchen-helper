import React, { useState, useContext } from "react";
import { Context } from "../../App";
import Timer from "../dashboard/Timer";

type AddTimingProps = {
  changeSteps: (sign: string) => void;
};

const AddTiming = (props: AddTimingProps) => {
  const { dispatch, store }: any = useContext(Context);
  const [time, setTime] = useState({ timeValue: "" });
  const { changeSteps } = props;

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setTime({ timeValue: e.currentTarget.value });
  };
  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    const updatedTimers = store.timers.map((t: any) => {
      if (t.id === id) {
        t.time = time.timeValue;
      }
      return t;
    });

    setTime({ timeValue: "" });

    dispatch({ type: "ADD_TIME", payload: updatedTimers });
  };
  return (
    <div>
      <h1>Add Your Timings</h1>
      {store.timers.map((timer: any) => {
        const { ingredient, id } = timer;

        return (
          <React.Fragment key={id}>
            <Timer ingredient={ingredient} />
            <form onSubmit={e => handleSubmit(e, id)}>
              <input
                min="0"
                type="number"
                name="time"
                onChange={e => handleChange(e)}
                defaultValue={timer.time}
              />
              <label htmlFor="time">Your Time:</label>
              <button type="submit">AddTime</button>
            </form>
          </React.Fragment>
        );
      })}
      <button onClick={() => changeSteps("-")}>Prev Step</button>
      <button onClick={() => changeSteps("+")}>Next Step</button>
    </div>
  );
};

export default AddTiming;
