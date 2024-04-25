const addToCart = (service, setCart) => {
  setCart((prevCart) => [...prevCart, service]);
};

export default addToCart;
