import React from "react";
import Loader from "react-loader-spinner";

interface ILoader {
  type: string;
  color: string;
  height: string;
  width: string;
}
export const LoaderComp = ({ type, color, height, width }: ILoader) => (
  <Loader type={type} color={color} height={height} width={width} />
);

export default LoaderComp;
