import { data } from "../../data";
import {
  CLEAR_LIST,
  TOGGLE_BUTTON,
  RESET_LIST,
  REMOVE_OneItem,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === TOGGLE_BUTTON) {
    return { ...state, toggle: true };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data, toggle: false };
  }
  if (action.type === REMOVE_OneItem) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  //NOTE: throw error when no actions are matching
  throw new Error(`No actions matching "${action.type} --action type"`);
};

export default reducer;
