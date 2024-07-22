import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //NOTE: using FormData API and its methods to get the form inputs instead to using useState for all the inputs
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    console.log([...formData.entries()]);
    const email = formData.get("email");
    console.log(email);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    //NOTE: updating the state and triggering a re-render won't clear the form inputs so reset() is used
    // setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Multiple Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          name="name"
          autoFocus
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" id="email" className="form-input" name="email" />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          name="password"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default UncontrolledInputs;
