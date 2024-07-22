import { useState } from "react";
import { data } from "../../data";

const MultipleInputs = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    //INFO: Dynamic object keys concept is used here
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  //another way of writing the above function but there is a bug
  //   const handleChange = (e) => {
  //     const input = e.currentTarget.value;
  //     const elementID = e.currentTarget.getAttribute("id");
  //     if (elementID === "name") {
  //       user.name += input;
  //     } else if (elementID === "email") {
  //       user.email += input;
  //     } else if (elementID === "password") {
  //       user.password += input;
  //     }
  //     //BUG: the inputs are not displayed as re-renders are not triggered
  //     setUser(user);
  //     console.log(user);
  //   };

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
          value={user.name}
          name="name"
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default MultipleInputs;
