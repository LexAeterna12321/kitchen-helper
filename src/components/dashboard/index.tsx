import React, { useContext } from "react";
// import Timer from "../dashboard/Timer";
import Counter from "../Counter";
import Bar from "../Bar";
import { Context } from "../../App";
import { button } from "../addTiming";
const Dashboard = ({ appReset }: { appReset: () => void }) => {
  const { store }: any = useContext(Context);
  let strokeWidth = 1;
  let zIndex = 10;
  let storeSortedByTime = store.timers.sort((a: any, b: any) => {
    return parseInt(a.time) > parseInt(b.time) ? 1 : -1;
  });
  console.log(store);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "50%",
          height: "auto"
        }}
      >
        {storeSortedByTime.map((timer: any) => {
          return (
            <Bar
              key={timer.id}
              time={timer.time}
              strokeWidth={(strokeWidth += 2)}
              zIndex={zIndex--}
              color={timer.color}
            />
          );
        })}
      </div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "50%",
          height: "auto"
        }}
      >
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
      <p
        style={{
          position: "fixed",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        (When done, tap on the ingredient to stop vibrations)
      </p>
    </div>
  );
};

export default Dashboard;
