import React from "react";
import Button from "./Button";

const MathTest = (props) => {
  const {
    time,
    animation,
    disabled,
    newExpression,
    handleInput,
    handleStart,
    inputValue,
    setInputValue,
  } = props;
  return (
    <div className="math-test">
      <div className="expression-output">
        <p>{newExpression}</p>
        <div className="time">
          <p style={{ animation: animation != null ? animation : "" }}>
            {time}
          </p>
        </div>
        <div className="values">
          <input
            type="text"
            disabled={disabled && disabled}
            onKeyPress={(e) => handleInput(e)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={disabled ? "" : "Start typing..."}
          />
          <Button handleStart={handleStart} disabled={disabled} />
        </div>
      </div>
    </div>
  );
};

export default MathTest;
