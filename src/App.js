import React, { useState, useEffect } from "react";
import MathTest from "./components/MathTest";
import Container from "./components/Container";
import Results from "./components/Results";

import "./App.css";

const TIME_ALLOWED = 45;
const MAXIMUM_NUMBER = 10;

const App = () => {
  const [expression, setExpression] = useState("");
  const [newExpression, setNewExpression] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(TIME_ALLOWED);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomExpression =
    Math.floor(Math.random() * (MAXIMUM_NUMBER + 1)) + " * " + Math.floor(Math.random() * (MAXIMUM_NUMBER + 1));
  let randomExpressionResult = eval(randomExpression);

  const checkAnswer = () => {
    const expectedResult = eval(expression).toString();
    const displayedResult = expression + ' = ' + expectedResult;
    if (inputValue.trim() === expectedResult) {
      setCorrectResults((prevCorrect) => [...prevCorrect, displayedResult]);
      setCountCorrect((prevCount) => prevCount + 1);
      return;
    }
    setWrongResults((prevWrong) => [...prevWrong, displayedResult]);
  };

  const handleInput = (e) => {
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setExpression(randomExpression);
      setNewExpression(randomExpression + ' = ...');
      setInputValue("");
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectResults([]);
    setWrongResults([]);
    setCountCorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if (time <= TIME_ALLOWED && time !== 0 && !disabled) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (disabled) {
      setTime(TIME_ALLOWED);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
    }

    if (time < 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [time, disabled]);

  useEffect(() => {
    setExpression(randomExpression);
    setNewExpression(randomExpression + ' = ...');
  }, []);

  return (
    <div className="App">
      <Container>
        <MathTest
          time={time}
          animation={animation}
          disabled={disabled}
          newExpression={newExpression}
          handleInput={handleInput}
          handleStart={handleStart}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </Container>
      <Results
        countCorrect={countCorrect}
        correctResults={correctResults}
        wrongResults={wrongResults}
      />
    </div>
  );
};

export default App;
