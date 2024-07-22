import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("initial render");
  }, []);

  console.log("re-render");

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {/* calling component conditionally  */}
      {toggle && <SomeComponent />}
    </div>
  );
};

export default CleanupFunction;

const SomeComponent = () => {
  //NOTE: when we call the component conditionally and each time it mounts, the initial render is triggered and the useEffect is called each time
  useEffect(() => {
    console.log("useEffect in SomeComponent");
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    //NOTE: this is used to clean up the interval. Here cleanup is triggered whenever the component dismounts
    return () => {
      clearInterval(intID);
      console.log("inside cleanup");
    };
  }, []);
  return <h1>some</h1>;
};
