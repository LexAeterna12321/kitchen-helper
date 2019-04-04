import React, { useContext } from "react";
import { Context } from "../../App";
import Timer from "./Timer";
const TimerList: React.SFC = () => {
  const { store }: any = useContext(Context);
  return (
    <ul>
      {store.timers.map((timer: any) => {
        const { ingredient, id, time, ingrImg } = timer;
        return (
          <Timer
            key={id}
            ingredient={ingredient}
            time={time}
            ingrImg={ingrImg}
          />
        );
      })}
    </ul>
  );
};

export default TimerList;
