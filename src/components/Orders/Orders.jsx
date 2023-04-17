import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import "./Order.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard} from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState(data);
  const handleRemoveItem = (id) => {
    const remainingItems = cart.filter((products) => products.id !== id);
    setCart(remainingItems);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shopping-container">
      <div className="review">
        {cart.map((singleProducts) => (
          <ReviewItem
           key={singleProducts.id}
            products={singleProducts}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to='/checkout'>
                <button className="btn-proceed">Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /></button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
