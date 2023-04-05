import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import "./Order.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState(data);
  const handleRemoveItem = (id) => {
    const remainingItems = cart.filter(products => products.id !== id)
    setCart(remainingItems);
    removeFromDb(id)
  };

  return (
    <div className="shopping-container">
      <div className="review">
        {cart.map((singleProducts) => (
          <ReviewItem
            products={singleProducts}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
