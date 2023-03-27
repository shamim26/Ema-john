import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {img,name,quantity,ratings,seller,shipping,stock,price} = props.product;
  
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='card-component'>
            <img src={img} alt="" />
            <div className='card-body'>
                <h4 className='product-name'>{name}</h4>
                <p className='price'>Price: ${price}</p>
                <p className='manufacture'>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings} star</p>
            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;