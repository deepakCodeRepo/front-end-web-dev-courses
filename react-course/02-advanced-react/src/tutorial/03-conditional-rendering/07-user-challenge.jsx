import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "deepu" });
  }
  function logout() {
    setUser(null);
  }

  return (
    <>
      {user ? (
        <div>
          <h2>Hello {user.name}</h2>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
