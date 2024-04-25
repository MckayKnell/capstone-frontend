import React from "react";
import ServiceCard from "../components/ServiceCard";
import { useCart } from "../context/CartProvider";

export default function Cart() {
  const { cart } = useCart();

  function cartTotal() {
    cart?.map((cartItem) => {});
  }

  return (
    <div className="cart-container">
      <div className="cart-title">CART</div>
      <div className="cart-wrapper">
        {cart?.map((cartItem) => {
          return <ServiceCard key={cartItem.service_id} service={cartItem} />;
        })}
      </div>
      <div className="total-container">
        <div className="total-title">Total:</div>
        <div className="total-wrapper">{cartTotal}</div>
      </div>
    </div>
  );
}
