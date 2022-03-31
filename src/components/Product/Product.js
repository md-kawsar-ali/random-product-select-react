import React from 'react';
import './Product.css';

const Product = (props) => {
    const { image, name, price } = props;

    return (
        <div className="product-card">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="d-flex">
                <h4>{name}</h4>
                <span>${price}</span>
            </div>
        </div>
    );
};

export default Product;