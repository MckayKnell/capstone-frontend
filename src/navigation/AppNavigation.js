import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory } from "react-router-dom";
import { useAuthInfo } from "../context/AuthProvider";

export default function AppNavigation() {
  const location = useLocation();
  const { userInfo } = useAuthInfo();
  const role = userInfo?.auth_info?.user?.role;

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="link-wrapper">
      <div className="nav-left">
        <NavLink to="/home">HOME</NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
        <NavLink to="/services">Services</NavLink>
        {role === "admin" && <NavLink to="/admin">Admin</NavLink>}
        <NavLink to="/cart">
          <FontAwesomeIcon icon="fa-cart-shopping" />
        </NavLink>
      </div>
    </div>
  );
}
