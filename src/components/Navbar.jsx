import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* <Link to="/">Home</Link>
      <Link to="contact">Contatos</Link> */}
      <span>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </span>
      <span>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contatos
        </NavLink>
      </span>
    </div>
  );
};

export default Navbar;
