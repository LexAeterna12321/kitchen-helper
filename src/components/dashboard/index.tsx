import React, { useContext, useState, useEffect } from "react";
// import Timer from "../dashboard/Timer";
import Counter from "../Counter";
import Bar from "../Bar";
import { Context } from "../../App";

const Dashboard = () => {
  const { store }: any = useContext(Context);
  let strokeWidth = 1;
  let zIndex = 10;
  let storeSortedByTime = store.timers.sort((a: any, b: any) => {
    return parseInt(a.time) > parseInt(b.time) ? 1 : -1;
  });
  console.log(storeSortedByTime);
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
    </div>
  );
};

export default Dashboard;
