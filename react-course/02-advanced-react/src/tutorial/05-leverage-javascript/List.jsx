import { Person } from "./Person";
import { people } from "../../data";

const List = () => {
  console.log(people);

  return (
    <>
      <h1>Leverage Javascript</h1>
      {people.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </>
  );
};
export default List;
