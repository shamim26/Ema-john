import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ products, handleRemoveItem }) => {
  const { _id, img, name, price, quantity } = products;
  return (
    <div className="review-items">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="review-title">{name}</p>
        <p>
          Price: <span className="orange-text">${price}</span>
        </p>
        <p>
          Quantity: <span className="orange-text">{quantity}</span>
        </p>
      </div>
        <button onClick={() => handleRemoveItem(_id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
        </button>
    </div>
  );
};

export default ReviewItem;
