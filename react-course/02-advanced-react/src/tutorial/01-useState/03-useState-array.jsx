import { data } from "../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeOneItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const removeAllItems = () => {
    let newPeople = [];
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState Array Example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={() => removeOneItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <div>
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="btn"
          onClick={removeAllItems}
        >
          Clear Items
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
