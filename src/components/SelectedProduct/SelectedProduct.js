import React from 'react';
import './SelectedProduct.css';

const SelectedProduct = (props) => {
    const { image, name, id } = props.cart;
    const { removeBtn, luckyStatus } = props;

    return (
        <div style={luckyStatus ? { backgroundColor: '#dfffd5', padding: '12px' } : { backgroundColor: '#ffffff', padding: '0px' }} className="selected-product">
            <figure style={luckyStatus ? { borderColor: '#82ec62' } : { borderColor: '#e0e0e0' }}>
                <img src={image} alt="name" />
            </figure>
            <h4>{name}</h4>
            <button onClick={() => removeBtn(id)}>&times;</button>
        </div>
    );
};

export default SelectedProduct;