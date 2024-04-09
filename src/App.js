import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/imports.scss";

import AppNavigation from "./navigation/AppNavigation";

import initIcons from "./components/helpers/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";

initIcons();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Router>
        <AppNavigation />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/cart" component={Cart} />
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
