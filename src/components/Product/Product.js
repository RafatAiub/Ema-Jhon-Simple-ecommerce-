import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props;
    const { name, img, ratings, seller, price } = product;
    // console.log(props);
    return (
        <div className='product name'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>Price:${price}</p>
                <p><small>Manufacturer :{seller}</small></p>
                <p><small>Ratings :{ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='Cart-btn' >
                <p style={{ marginRight: '5px' }}>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;