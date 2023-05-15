import { json } from "react-router-dom";
import { getShoppingCart } from "./utilities/fakedb";

const customLoader = async () => {
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart)
  console.log(ids);


  const res = await fetch("http://localhost:5100/product-by-id", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const data = await res.json();
  // if the data in db then have to use async await
  const savedCart = [];

  for (const id in storedCart) {
    const dbProduct = data.find((product) => product._id === id);
    if (dbProduct) {
      const quantity = storedCart[id];
      dbProduct.quantity = quantity;
      savedCart.push(dbProduct);
    }
  }

  return savedCart;
};

export default customLoader;
