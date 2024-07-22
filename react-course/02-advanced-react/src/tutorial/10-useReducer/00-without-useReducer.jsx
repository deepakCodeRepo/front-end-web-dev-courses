import { useEffect, useState } from "react";
import { data } from "../../data";

const WithoutuseReducer = () => {
  const [people, setPeople] = useState(data);
  const [toggle, setToggle] = useState(false);

  const removeOneItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const removeAllItems = () => {
    let newPeople = [];
    setPeople(newPeople);
  };
  console.log(people);

  useEffect(() => {
    if (people.length === 0) {
      setToggle(true);
    }
  }, [people]);

  const resetAllItems = () => {
    setPeople(data);
    setToggle(false);
  };

  return (
    <>
      <h2>Example Without useReducer</h2>
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
        {!toggle ? (
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={removeAllItems}
          >
            Clear Items
          </button>
        ) : (
          <button
            type="button"
            style={{ marginTop: "2rem" }}
            className="btn"
            onClick={resetAllItems}
          >
            Reset Items
          </button>
        )}
      </div>
    </>
  );
};

export default WithoutuseReducer;
