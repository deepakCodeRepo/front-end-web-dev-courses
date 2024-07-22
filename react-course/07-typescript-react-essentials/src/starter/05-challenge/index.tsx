type BasicUser = {
  type: "basic";
  name: string;
};
type AdvancedUser = {
  type: "advanced";
  name: string;
  email: string;
};
type User = BasicUser | AdvancedUser;

function Component(props: User) {
  const { type, name } = props;
  if (type === "basic") {
    return (
      <div className="alert alert-success">
        <h2>User : {name}</h2>
      </div>
    );
  }

  const { email } = props;
  if (type === "advanced") {
    return (
      <div className="alert alert-danger">
        <h2>User : {name}</h2>
        <h2>Email : {props.email}</h2>
        <h5>Email : {email}</h5>
      </div>
    );
  }
}

export default Component;
