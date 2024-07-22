import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);
  const [button, setButton] = useState("Show");

  const handleClick = () => {
    if (value) {
      setValue(false);
      setButton("Show");
    } else {
      setValue(true);
      setButton("Hide");
    }

    //INFO: different ways of writing the above conditions
    //#1
    // if (value) {
    //   setValue(false);
    //   setButton("Show");
    //   return;
    // }
    // setValue(true);
    // setButton("Hide");
    //#2
    // value ? setValue(false) : setValue(true);
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {button}
      </button>
      {/* <button className="btn" onClick={() => {setValue(!value);}}
      >
        toggle
      </button> */}
      {value && <ToggleComponent />}
    </div>
  );
};

export default ToggleChallenge;

const ToggleComponent = () => {
  return <h1 style={{ margin: "2rem" }}>Peek a boo</h1>;
};
