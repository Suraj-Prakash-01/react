import { useState } from "react";

import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(1);

  const addValue = () => {
    // counter += 1;
    // Will only be updated once as react bundels together(batch) and send at once
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    // To avoid batching
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course by Hitesh</h1>
      <h2> Counter Values: {counter}</h2>
      <button onClick={addValue}> Add values</button>{" "}
      <button onClick={removeValue}>Remove values</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
