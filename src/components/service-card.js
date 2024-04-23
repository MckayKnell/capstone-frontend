import { useState, useEffect } from "react";

export default function ServiceCard({ service }) {
  console.log(service);
  const { service_name, description, price, quantity } = service;
  return (
    <div className="service-card-container">
      <div className="title-wrapper">{service_name}</div>
      <div className="description-wrapper">{description}</div>
      <div className="bottom-wrapper">
        <div className="price-wrapper">${price}</div>
        <div className="add-to-cart-wrapper">cart</div>
        <div className="quantity">+ {quantity} - </div>
      </div>
    </div>
  );
}
