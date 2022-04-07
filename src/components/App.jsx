import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [colors, changeColor] = useState("white");
  function handleClick() {
    setHeadingText("Submitted");
  }
  function over() {
    changeColor("black");
  }
  function out() {
    changeColor("white");
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={over}
        onMouseOut={out}
        style={{ backgroundColor: colors }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
