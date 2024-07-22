import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("Ram");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Enjoys: Reading books");

  const changePerson = () => {
    if (name === "Ram") {
      setName("Ganesh");
      setAge(28);
      setHobby("Enjoys: Badminton");
    } else {
      setName("Ram");
      setAge("24");
      setHobby("Enjoys: Reading books");
    }
  };

  return (
    <>
      <h2>useState Object Example</h2>
      <h3 style={{ marginTop: "1rem" }}>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button
        className="btn"
        style={{ marginTop: "1rem" }}
        onClick={changePerson}
      >
        Next Person
      </button>
    </>
  );
};

export default UseStateObject;
