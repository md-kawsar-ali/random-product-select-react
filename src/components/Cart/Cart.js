import React from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart">
            <h3>Selected Products</h3>
            {
                cart?.map(item => <SelectedProduct cart={item}></SelectedProduct>)
            }
        </div>
    );
};

export default Cart;