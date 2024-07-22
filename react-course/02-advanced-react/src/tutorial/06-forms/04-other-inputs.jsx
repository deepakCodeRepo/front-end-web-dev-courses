import { useState } from "react";

const allFrameworks = ["react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.currentTarget.checked);
    setShipping(e.currentTarget.checked);
  };
  const handleFramework = (e) => {
    console.log(e.currentTarget.value);
    console.log(e.currentTarget.id);
    setFramework(e.currentTarget.value);
  };

  //NOTE: in the input instead of value, checked attribute is used along with onChange event listener
  return (
    <form className="form">
      <h4>Other Inputs</h4>
      <div className="form-row" style={{ textAlign: "left" }}>
        <label htmlFor="shipping">Free Shipping</label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          style={{ marginLeft: "0.5rem" }}
          checked={shipping}
          onChange={handleShipping}
        />
      </div>
      <div className="form-row" style={{ textAlign: "left" }}>
        <label htmlFor="framework" className="form-label">
          Framework
        </label>
        <select
          name="framework"
          id="framework"
          value={framework}
          onChange={handleFramework}
        >
          {allFrameworks.map((framework) => {
            return <option key={framework}>{framework}</option>;
          })}
        </select>
      </div>

      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default OtherInputs;
