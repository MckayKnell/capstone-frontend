import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import addToCart from "./helpers/addToCart";
import { CartContextProvider, useCart } from "../context/CartProvider";

export default function ServiceCard({ service }) {
  const { setCart } = useCart();
  const { service_name, description, price, quantity, service_id } = service;

  return (
    <div className="service-card-container">
      <Link className="title-wrapper" to={`/services/${service_id}`}>
        {service_name}
      </Link>
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
          {/* <button onClick={() => handleDecrement(service.service_id)}>+</button> */}
          {quantity}
          {/* <button onClick={() => handleIncrement(service.service_id)}>-</button> */}
        </div>
      </div>
    </div>
    //{" "}
  );
}
