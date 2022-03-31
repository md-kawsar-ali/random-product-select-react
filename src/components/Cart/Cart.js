import React from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css';

const Cart = (props) => {
    const { cart, randomProduct, removeBtn, resetCart, randomSelection } = props;

    return (
        <div className="cart">
            <h3>{randomProduct && cart.length === 1 ? 'Lucky One Selected :)' : (cart.length > 0 ? 'Selected Products' : 'No Product Selected!')}</h3>
            {
                cart?.map(item => <SelectedProduct key={item.name} cart={item} removeBtn={removeBtn} luckyStatus={randomProduct && cart.length === 1 ? true : false}></SelectedProduct>)
            }

            <button onClick={randomSelection} className="cart-btn">Choose One</button>
            <button onClick={resetCart} className="cart-btn clear">Clear All</button>
        </div>
    );
};

export default Cart;