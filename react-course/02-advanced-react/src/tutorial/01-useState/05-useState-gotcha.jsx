import { useState } from "react";

const UseStateGotcha = () => {
  let [value, setValue] = useState(0);

  const handleClick = () => {
    const id = setTimeout(() => {
      console.log("clicked");
      setValue((currentState) => {
        console.log(currentState);
        return currentState + 1;
      });
    }, 3000);
    console.log(id);
  };

  return (
    <div>
      <h2>You clicked {value} times</h2>
      <button type="button" onClick={handleClick} className="btn">
        Click me
      </button>
    </div>
  );
};
export default UseStateGotcha;
