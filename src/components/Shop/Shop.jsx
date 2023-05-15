import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const { totalProducts } = useLoaderData();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // pagination
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];

  /* 
  1.  Determine the total number of items;
  2.  Calculate the total number of pages
  
  */

  useEffect(() => {
    fetch(
      `http://localhost:5100/products?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    fetch("http://localhost:5100/product-by-id", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        // step 1: get data from localstotage
        const storedData = getShoppingCart();
        const savedCart = [];
        // get the id
        for (const id in storedData) {
          // get product using id
          const savedProduct = data.find((product) => product._id === id);
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
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const options = [6, 9, 15];
  const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  return (
    <>
      <div className="shopping-container">
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link to="/orders">
              <button className="btn-proceed">
                Review Order <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>
      <div className="pagination">
        <p>Curr: {currentPage}</p>
        {pageNumbers.map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            className={
              currentPage === number ? "selected page-button" : "page-button"
            }
            key={number}
          >
            {number}
          </button>
        ))}

        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
