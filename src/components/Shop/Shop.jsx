import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (products) =>{
    const newCart = [...cart , products];
    setCart(newCart);
  }

  return (
    <div className="shopping-container">
      <div className="products">
        {
            products.map(product => <Product product = {product} key= {product.id} handleAddToCart = {handleAddToCart}/>)
        }
      </div>
      <div className="cart-container">
        <Cart cart = {cart}/>
      </div>
    </div>
  );
};

export default Shop;
