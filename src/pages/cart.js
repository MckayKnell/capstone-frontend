import React from "react";
import ServiceCard from "../components/ServiceCard";
import { useCart } from "../context/CartProvider";
import { useState, useEffect, useMemo } from "react";

export default function Cart() {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState([]);
  console.log(totalPrice);

  function arrayAdd(totalPrice) {
    const initialValue = 0;
    const sumWithInitial = totalPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return sumWithInitial;
  }

  useEffect(() => {
    cart.map((item) => {
      console.log(item.price * item.quantity);
      setTotalPrice((prevState) => [...prevState, item.price * item.quantity]);
    });
  }, [cart]);

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
        <div className="total-wrapper">${arrayAdd(totalPrice)}</div>
      </div>
    </div>
  );
}
