import React from 'react';
import { useState, useEffect } from 'react';
import './Shop.css';
import Product from './../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="shop-layout">
            <div className="products-wrapper">
                {
                    products.map(product => <Product key={product.id} image={product.image} name={product.name} price={product.price}></Product>)
                }
            </div>

            <div className="cart-wrapper">

            </div>

        </div>
    );
};

export default Shop;