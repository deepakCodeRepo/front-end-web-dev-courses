const Person = ({ id, name, removePerson }) => {
  console.log("render");
  return (
    <div>
      <h3>
        #{id} {name}
      </h3>
      <button className="btn" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};
export default Person;
