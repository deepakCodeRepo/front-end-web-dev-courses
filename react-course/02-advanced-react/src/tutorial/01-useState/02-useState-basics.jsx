import { useState } from "react";

const UseStateBasics = () => {
  //   console.log(useState(1));
  //   console.log(useState("deep")[0]);
  //   console.log(useState("deep")[1]);

  //NOTE: useState returns an array that contains the currentState and a function to update the state. On updating the state a re-render is triggered.
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(++count);
  };

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button type="button" onClick={handleClick} className="btn">
        Click me
      </button>
    </div>
  );
};
export default UseStateBasics;
