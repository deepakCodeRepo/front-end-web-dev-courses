import { useState } from "react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [user, setUser] = useState({ name: "ram" });

  function logout() {
    if (user !== null) {
      setUser(null);
    } else {
      setUser({ name: "ram" });
    }
  }

  return (
    <div>
      <NavLinks user={user} logout={logout} />
    </div>
  );
};
export default Navbar;
