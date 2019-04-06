import React, { useContext } from "react";
import { Context } from "../../App";
import Timer from "./Timer";
import { style } from "typestyle";
const TimerList: React.SFC = () => {
  const { store }: any = useContext(Context);
  return (
    <ul className={ul}>
      {store.timers.map((timer: any) => {
        return <Timer key={timer.id} ingredient={timer} />;
      })}
    </ul>
  );
};
const ul = style({
  margin: 0,
  padding: 0
});
export default TimerList;
