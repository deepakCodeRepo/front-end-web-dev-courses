import { useState, useEffect } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <h1>Multiple Returns Basics</h1>;
};

export default MultipleReturnsBasics;
