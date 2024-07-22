import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const resource = await fetch(url);
        const data = await resource.json();
        console.log(data);

        const people = data.map((person) => {
          const { id, login, avatar_url, html_url } = person;
          return (
            <div key={id}>
              <p>#{id}</p>
              <img src={avatar_url} alt={login} width={"100px"} />
              <p>{login}</p>
              <a href={html_url} target="blank">
                Profile
              </a>
            </div>
          );
        });
        setUsers(people);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data Example</h1>
      <h3>Github Users</h3>
      <div>{users}</div>
    </div>
  );
};

export default FetchData;
