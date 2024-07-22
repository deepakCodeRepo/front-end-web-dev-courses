import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(true);
    }
    fetchData();
  }, []);

  //BUG: on initial render data=null is being returned
  return { isLoading, isError, data };
};
export default useFetch;
