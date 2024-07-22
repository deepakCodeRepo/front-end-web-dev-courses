import { useState } from "react";
import { data } from "../../../data";
import List from "./List";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  return (
    <section>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
      <List people={people} />
    </section>
  );
};
export default LowerState;

//INFO: memo() is used to prevent re-renders of components if their prop values are not changed.
