import React from "react";

const Button = ({ disabled, handleStart }) => {
  return (
    <button onClick={handleStart}>{disabled ? "Start" : "Reset"}</button>
  );
};

export default Button;
