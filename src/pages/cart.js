// import ServiceCard from "../components/service-card";
import { CartContextProvider } from "../context/CartProvider";

export default function Cart(props) {
  return (
    <div className="cart-container">
      <div className="cart-title">CART</div>
      <div className="cart-wrapper">{/* <CartContextProvider /> */}</div>
      <div className="total-container">
        <div className="total-title">Total:</div>
        <div className="total-wrapper"></div>
      </div>
    </div>
  );
}
