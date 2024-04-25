import { useState, useEffect } from "react";
import addToCart from "./helpers/addToCart";
import { CartContextProvider, useCart } from "../context/CartProvider";

export default function ServiceCard({ service }) {
  const { setCart } = useCart();
  const { service_name, description, price, quantity } = service;

  const handleDecrement = (service) => {
    setCart(quantity);
  };

  const handleIncrement = (service_id) => {};

  return (
    <div className="service-card-container">
      <div className="title-wrapper">{service_name}</div>
      <div className="description-wrapper">{description}</div>
      <div className="bottom-wrapper">
        <div className="price-wrapper">${price}</div>
        <button
          onClick={() => {
            addToCart(service, setCart);
          }}
          className="add-to-cart-wrapper"
        >
          Add to Cart
        </button>
        <div className="quantity">
          <button onClick={() => handleDecrement(service.service_id)}>+</button>
          {quantity}
          <button onClick={() => handleIncrement(service.service_id)}>-</button>
        </div>
      </div>
    </div>
  );
}
