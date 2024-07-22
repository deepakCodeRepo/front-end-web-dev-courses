import useFetch from "./useFetch";

const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  const { isLoading, isError, data: user } = useFetch(url);
  console.log(user);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>There is an Error...</h1>;
  }

  // const [avatar_url, login, name, html_url, company, bio] = user;

  return (
    <>
      <h1>Fetch data</h1>
      {/* <div>
        <img src={avatar_url} alt={login} />
        <h2>{name}</h2>
        <a href={html_url} target="blank">
          profile
        </a>
        <h3>Works at {company}</h3>
        <h4>{bio}</h4>
      </div> */}
    </>
  );
};
export default FetchData;
