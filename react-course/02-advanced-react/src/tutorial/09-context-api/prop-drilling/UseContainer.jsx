const UseContainer = (props) => {
  const { user, logout } = props;
  console.log(props);
  console.log(user);
  console.log(logout);

  return (
    <div>
      {user ? (
        <>
          <h1>Hello there, {user?.name?.toUpperCase()}</h1>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
};
export default UseContainer;
