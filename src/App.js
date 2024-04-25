import { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import "./styles/imports.scss";

import AppNavigation from "./navigation/AppNavigation";

import initIcons from "./components/helpers/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UseAuthInfo } from "./context/AuthProvider";

import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

initIcons();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = UseAuthInfo();
  const role = userInfo?.auth_info?.user?.role;

  return (
    <div className="App">
      <Router>
        <AppNavigation />
        <div className="page-container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/cart" component={Cart} />
            {role === "admin" && <Route path="/admin" component={AdminPage} />}
          </Switch>
        </div>
        <div className="footer-container">
          <div className="footer-wrapper">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
          </div>
        </div>
      </Router>
    </div>
  );
}
