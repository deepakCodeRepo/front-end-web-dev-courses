import { useContext } from "react";
import { NavbarContext } from "./Navbar";

const UseContainer = () => {
  //NOTE: here we are using the useContext() hook to receive values instead of consumer
  const { user, logout } = useContext(NavbarContext);

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
