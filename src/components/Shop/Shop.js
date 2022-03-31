import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import Product from './../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [cart, setCart] = useState([]);

    const selectProduct = (product) => {
        const newProduct = [...cart, product];
        setCart(newProduct);
    }

    return (
        <div className="shop-layout">
            <div className="products-wrapper">
                {
                    products.map(product => <Product key={product.id} image={product.image} name={product.name} price={product.price} addtocart={selectProduct}></Product>)
                }
            </div>

            <div className="cart-wrapper">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;