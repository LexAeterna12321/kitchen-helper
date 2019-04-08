import React, { useContext } from "react";
import { Context } from "../../App";
import Timer from "./Timer";
const TimerList: React.SFC = () => {
  const { store }: any = useContext(Context);
  return (
    <ul>
      {store.timers.map((timer: any) => {
        return <Timer key={timer.id} ingredient={timer} />;
      })}
    </ul>
  );
};

export default TimerList;
