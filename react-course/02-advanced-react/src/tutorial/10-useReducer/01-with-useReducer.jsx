import { useEffect, useReducer } from "react";
import { data } from "../../data";
import {
  CLEAR_LIST,
  TOGGLE_BUTTON,
  RESET_LIST,
  REMOVE_OneItem,
} from "./actions";
import reducer from "./reducer";

let defaultState = {
  people: data,
  toggle: false,
};

const WithuseReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeOneItem = (id) => {
    //NOTE: just a convention to have payload as property and the id as an object
    dispatch({ type: REMOVE_OneItem, payload: { id } });
  };

  const removeAllItems = () => {
    dispatch({ type: CLEAR_LIST });
  };
  console.log(state);

  useEffect(() => {
    if (state.people.length === 0) {
      dispatch({ type: TOGGLE_BUTTON });
    }
  }, [state.people]);

  const resetAllItems = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <>
      <h2>Example Using useReducer</h2>
      {state.people.map((person) => {
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
        {!state.toggle ? (
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

export default WithuseReducer;
