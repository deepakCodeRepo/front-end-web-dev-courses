import { useCallback, useState } from "react";
import { data } from "../../../data";
import List from "./List";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  //NOTE: if people state is not passed in the dependency array then the removePerson() is created only once and it will use the previous people state
  const removePerson = useCallback(
    (id) => {
      console.log(people);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <section>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerState;

//INFO: removePerson() is re-created whenever LowerState is re-rendered. So the reference to removePerson() i.e,removePerson prop in List component is changed which causes the List component to re-render even when memo(List) is defined. So to avoid this issue useCallback() is used.
