import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shippingTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total += product.price * product.quantity;
    shippingTotal += product.shipping + product.quantity;
    quantity += product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + shippingTotal + tax;

  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingTotal}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
    </div>
  );
};

export default Cart;
