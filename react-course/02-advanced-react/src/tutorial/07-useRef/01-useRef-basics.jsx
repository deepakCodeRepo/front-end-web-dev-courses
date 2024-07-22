import { useState, useRef, useEffect } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  //NOTE: useRef returns an object that contains the current property
  const refContainer = useRef(null);
  console.log(refContainer);
  const isMounted = useRef(false);

  //NOTE: this useEffect is executed after the initial render is triggered
  useEffect(() => {
    console.log(refContainer);
  });

  //NOTE: using useRef we are executing the functionality in this useEffect only when the value changes and not on initial render
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);

  //INFO: this can be used instead of the autoFocus attribute in the input element
  //   useEffect(() => {
  //     refContainer.current.focus();
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            name="name"
            ref={refContainer}
            autoFocus
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <h1>Value: {value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </>
  );
};
export default UseRefBasics;
