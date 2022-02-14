import React from "react";

const Results = ({ countCorrect, correctResults, wrongResults }) => {
  return (
    <div className="results">
      <div className="title">
        <p>Correct answers: {countCorrect}</p>
      </div>
      <div className="results-container">
        <div className="correct-results">
          {correctResults.map((correctResult, index) => (
            <div className="result" key={index}>
              <p>{correctResult}</p>
            </div>
          ))}
        </div>
        <div className="wrong-results">
          {wrongResults.map((wrongResult, index) => (
            <div className="result" key={index}>
              <p>{wrongResult}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
