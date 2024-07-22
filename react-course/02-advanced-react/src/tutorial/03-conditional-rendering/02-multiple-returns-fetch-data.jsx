import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        console.log(response.ok);
        const data = await response.json();
        setUser(data);
        //NOTE: alternate way of updating the state
        // if (data !== null) {
        //   setIsLoading(false);
        // }
        // if (data.message === "Not Found") {
        //   setIsError(true);
        // }
        console.log(data);
      } catch (error) {
        //NOTE: fetch api doesn't catch 4xx and 5xx errors so updating state here won't work
        // setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1 style={{ color: "red" }}>There is an Error...</h1>;
  }

  const { avatar_url, login, name, html_url, company, bio } = user;
  return (
    <>
      <h1>Fetch data</h1>
      <div>
        <img src={avatar_url} alt={login} />
        <h2>{name}</h2>
        <a href={html_url} target="blank">
          profile
        </a>
        <h3>Works at {company}</h3>
        <h4>{bio}</h4>
      </div>
      ;
    </>
  );
};

export default MultipleReturnsFetchData;
