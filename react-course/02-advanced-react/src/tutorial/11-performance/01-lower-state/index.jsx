import { useState } from "react";
import { data } from "../../../data";
import List from "./List";
import Counter from "./counter";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <Counter />
      <List people={people} />
    </section>
  );
};
export default LowerState;

//INFO: If Counter component and its state "count" were defined here in LowerState component then on every state change, all the child components would be re-rendered till Person component. In order to avoid that, the Counter component is setup in a separate file counter.jsx ~~Now whenever the count state is updated, only the Counter component is rendered and not all the child components of LowerState.
