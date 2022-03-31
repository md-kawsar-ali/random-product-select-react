import React from 'react';
import './SelectedProduct.css';

const SelectedProduct = (props) => {
    const { cart } = props;

    return (
        <div className="selected-product">
            <figure>
                <img src={cart.image} alt="" />
            </figure>
            <h4>{cart.name}</h4>
            <button>&times;</button>
        </div>
    );
};

export default SelectedProduct;