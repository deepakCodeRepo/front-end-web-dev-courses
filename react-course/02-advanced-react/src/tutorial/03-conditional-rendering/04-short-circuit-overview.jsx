import { useState } from "react";

const ShortCircuitOverview = () => {
  const [name, setName] = useState("deepu");
  const [text, setText] = useState("");

  const example = text || "hello";

  return (
    <div>
      {/* {if{condition}{'wont work'}} */}
      {/* conditional statements inside jsx wont work so we use short-circuit evaluations */}
      <h2>Falsy OR: {text || "hello"}</h2>
      <h2>Falsy AND: {text && "hello"}</h2>
      <h2>Truthy OR: {name || "hello"}</h2>
      <h2>Truthy AND: {name && "hello"}</h2>
      {example}
    </div>
  );
};

export default ShortCircuitOverview;
