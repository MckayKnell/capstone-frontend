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
import PrivateRoute from "./navigation/PrivateRoutes";

import initIcons from "./components/helpers/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAuthInfo } from "./context/AuthProvider";

import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Extensions from "./pages/Extensions";
import Consultation from "./pages/Consultation";

initIcons();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { userInfo } = useAuthInfo();

  const role = userInfo?.auth_info?.user?.role;

  return (
    <div className="App">
      <Router>
        <AppNavigation />
        <div className="page-container">
          <Switch>
            <Route path="/login" component={Login} />

            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/contact" component={Contact} />
            <PrivateRoute exact path="/services" component={Services} />
            <PrivateRoute path="/services/:id" component={Service} />
            <PrivateRoute path="/extensions" component={Extensions} />
            <PrivateRoute path="/consultation" component={Consultation} />
            <PrivateRoute path="/cart" component={Cart} />
            {role === "admin" && (
              <PrivateRoute path="/admin" component={AdminPage} />
            )}
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
