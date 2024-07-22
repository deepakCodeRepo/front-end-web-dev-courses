import { useState, useEffect } from "react";

const HookRules = () => {
  const [condition, setCondition] = useState(true);

  //BUG: dont call the hooks conditionally
  //   if (condition) {
  //     const [value, setValue] = useState(true);
  //   }

  return <h1>hello there..</h1>;

  //BUG: useEffect after a return won't work
  useEffect(() => {
    console.log("hello there");
  }, []);

  return <h2>im at the end</h2>;
};

export default HookRules;
