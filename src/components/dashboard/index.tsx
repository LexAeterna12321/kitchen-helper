import React, { useContext } from "react";
import Timer from "../dashboard/Timer";
import Counter from "../Counter";
import { Context } from "../../App";
import { style } from "typestyle";

const Dashboard = () => {
  const { store }: any = useContext(Context);

  console.log(store);

  return store.timers.map(
    (timer: any): JSX.Element => {
      const { id, time } = timer;
      return (
        <div className={container} key={id}>
          <Timer ingredient={{ ...timer }} />
          <Counter time={time} />
        </div>
      );
    }
  );
};
const container = style({
  display: "flex",
  width: "100vw",
  flexDirection: "column",
  justifyContent: "center",
  transition: "color 2s"
});
export default Dashboard;
