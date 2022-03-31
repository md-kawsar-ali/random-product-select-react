import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

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
            <button>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default Product;