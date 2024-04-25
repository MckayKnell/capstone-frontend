import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { CartContextProvider } from "./context/CartProvider";
import Cart from "./pages/Cart";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
