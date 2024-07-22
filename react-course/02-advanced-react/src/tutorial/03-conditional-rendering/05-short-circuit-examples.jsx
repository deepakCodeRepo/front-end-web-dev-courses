import { useState } from "react";

const ShortCircuitExamples = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("deepu");
  const [user, setUser] = useState({ name: "ram" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h1>{text || "Default value"}</h1>
      <hr />
      {!text && (
        <div>
          <h2>jsx return</h2>
          <h2>{name}</h2>
        </div>
      )}{" "}
      <hr />
      {user && <SomeComponent name={user.name} />} <hr />
      <h2 style={{ margin: "1rem 0" }}>Ternary operator</h2>
      <button className="btn">{isEditing ? "Edit" : "Add"}</button>
      <hr />
      {user ? (
        <div>
          <h2> hello there {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2> please login</h2>
        </div>
      )}
    </div>
  );
};

export default ShortCircuitExamples;

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>component return</h2>
      <h2>{name}</h2>
    </div>
  );
};
