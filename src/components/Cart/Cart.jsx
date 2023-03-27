import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shippingTotal = 0;
  for (const product of cart) {
    total += product.price;
    shippingTotal += product.shipping;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + shippingTotal + tax;

  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingTotal}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;
