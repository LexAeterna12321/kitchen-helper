import React, { useContext } from "react";
import { Context } from "../../App";
import Timer from "./Timer";
const TimerList: React.SFC = () => {
  const { store }: any = useContext(Context);
  return (
    <ul>
      {store.timers.map((timer: any) => {
        const { ingredient, id } = timer;
        return <Timer key={id} ingredient={ingredient} />;
      })}
    </ul>
  );
};

export default TimerList;
