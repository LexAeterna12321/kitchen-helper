import React, { useContext } from "react";
import { style } from "typestyle";
import Counter from "../Counter";
import Bar from "../Bar";
import { Context, ITimer } from "../../App";
import { button } from "../addTiming";

const Dashboard = ({ appReset }: { appReset: () => void }) => {
  const { store }: any = useContext(Context);
  let strokeWidth = 1;
  let zIndex = 10;
  let storeSortedByTime = store.timers.sort((a: ITimer, b: ITimer) => {
    return parseInt(a.time) > parseInt(b.time) ? 1 : -1;
  });
  console.log(store);
  return (
    <div>
      <div className={container}>
        {storeSortedByTime.map(({ id, time, color }: ITimer) => {
          return (
            <Bar
              key={id}
              time={time}
              strokeWidth={(strokeWidth += 2)}
              zIndex={zIndex--}
              color={color}
            />
          );
        })}
      </div>
      <div className={container}>
        {storeSortedByTime.map((timer: any) => {
          return (
            <Counter
              key={timer.id}
              time={timer.time}
              ingrName={timer.ingrName}
              color={timer.color}
            />
          );
        })}
      </div>
      <button
        onClick={appReset}
        style={{
          position: "fixed",
          top: "5%",
          right: "5%",
          padding: "10px 15px"
        }}
        className={button}
      >
        Go Back To Main Panel
      </button>
      <p className={p}>(When done, tap on the ingredient to stop vibrations)</p>
    </div>
  );
};

const container = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "50%",
  height: "auto"
});
const p = style({
  position: "fixed",
  bottom: "5%",
  left: "50%",
  transform: "translateX(-50%)"
});
export default Dashboard;
