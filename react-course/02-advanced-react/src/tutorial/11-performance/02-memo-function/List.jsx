import Person from "./Person";
import { memo } from "react";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default memo(List);

//INFO: memo(List) will prevent the re-render of List if its props are not changed
