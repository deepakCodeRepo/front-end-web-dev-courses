import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [newData, setNewData] = useState(data);
  console.log(newData);

  const handleNameChange = (e) => {
    const input = e.currentTarget.value;
    setName(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if no value is entered, do nothing
    if (!name) return;
    //INFO: adds new object to the array
    const newUser = { id: newData.length + 1, name: `${name}` };
    const updatedUsers = [...newData, newUser];
    console.log(updatedUsers);
    setNewData(updatedUsers);
  };

  const handleRemove = (objectID) => {
    console.log(objectID);
    //INFO: removes the object from the array
    newData.splice(objectID - 1, 1);
    //INFO: resets all the IDs in order after an object is removed
    for (let i = 0; i < newData.length; i++) {
      newData[i].id = i + 1;
    }
    console.log(newData);
    //BUG: after removing the items, this is not triggering a re-render
    setNewData(newData);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={handleNameChange}
            autoFocus
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <h1>Users</h1>
      {/* //INFO: display users below the form  */}
      {newData.map((person) => {
        console.log(person);
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => handleRemove(person.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};
export default UserChallenge;

//NOTE: another way of writing the above functions
// const [name, setName] = useState('');
//   const [users, setUsers] = useState(data);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something
//     console.log(name);
//     // if no value, do nothing
//     if (!name) return;
//     // if value, setup new user and add to current users
//     const fakeId = Date.now();
//     console.log(fakeId);
//     // const newUser = { id: fakeId, name: name };
//     const newUser = { id: fakeId, name };
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     // set back to empty
//     setName('');
//   };

//   const removeUser = (id) => {
//     const updatedUsers = users.filter((person) => person.id !== id);
//     setUsers(updatedUsers);
//   };
