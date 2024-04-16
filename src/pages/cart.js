import ServiceCard from "../components/service-card";

export default function Cart(props) {
  return (
    <div className="cart-container">
      <div className="cart-title">CART</div>
      <div className="cart-wrapper">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="products-title">PRODUCTS</div>
      <div className="product-wrapper"></div>
      <div className="products-title">CHECKOUT</div>
      <div className="product-wrapper"></div>
    </div>
  );
}
