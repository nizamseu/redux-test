import React from 'react';
import './product.css'

const Product = (props) => {
    const {addToCart,product}= props
    
    return (
        <div className="product">
           
            <h1>{product.name}</h1>
            <button onClick={()=> addToCart(product.id,product.name)}> Add to Cart</button>
        </div>
    );
};

export default Product;