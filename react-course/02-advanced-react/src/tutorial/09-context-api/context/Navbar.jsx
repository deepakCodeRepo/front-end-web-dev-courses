import { createContext, useState } from "react";
import NavLinks from "./NavLinks";

//INFO: By using contextAPI we can avoid prop-drilling
//NOTE: createContext() returns provider and consumer objects. We can use the provider to wrap our jsx in it and send values. Consumer is not required now as we use useContext() hook to receive values.
export const NavbarContext = createContext();
console.log(NavbarContext);

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
    <NavbarContext.Provider value={{ user, logout }}>
      <div>
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};
export default Navbar;
