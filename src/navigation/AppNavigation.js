import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

export default function AppNavigation() {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="link-wrapper">
      {/* <div className="navlink">
        <NavLink to="/"></NavLink>
      </div> */}

      <div className="nav-left">
        <NavLink to="/home">HOME</NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/cart">
          <FontAwesomeIcon icon="fa-cart-shopping" />
        </NavLink>
      </div>
    </div>
  );
}
