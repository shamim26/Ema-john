import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // step 1: get data from localstotage
    const storedData = getShoppingCart();
    const savedCart = [];
    console.log(storedData);
    // get the id
    for (const id in storedData) {
      // get product using id
      const savedProduct = products.find((product) => product.id === id);
      if (savedProduct) {
        // get quantity
        const getQuantity = storedData[id];
        savedProduct.quantity = getQuantity;
        // add the saved products to the new array
        savedCart.push(savedProduct);
      }
    }
    // now show the the new array using 
    setCart(savedCart);
    
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shopping-container">
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
