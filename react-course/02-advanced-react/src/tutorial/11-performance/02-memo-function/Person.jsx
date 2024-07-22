const Person = ({ id, name }) => {
  console.log("render");
  return (
    <div>
      <h3>
        #{id} {name}
      </h3>
    </div>
  );
};
export default Person;
