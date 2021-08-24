import React, { useState } from "react";
import Tweet from "../tweet";
import "./App.css";

function App() {
  const [isRed, setRed] = useState(false);
  const [increment, increase] = useState(0);
  const classToggle = () => {
    setRed(!isRed);
    increase(increment + 1);
  };
  return (
    <div className="app">
      <h1 className={isRed ? "blue" : ""}>This is toggle a class</h1>
      <p>You clicked {increment} times</p>
      <button onClick={classToggle} className="btn">
        Toggle
      </button>
    </div>
  );
}

export default App;
