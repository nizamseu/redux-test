import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CardActions';
import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
   const {product,addToCart}=props

    return (
        <div>
            <h1>This Is Shop</h1>
            {
                product.map(pd=><Product 
                    key={pd.id}
                    product={pd}
                    addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateProps =state =>{
    return{
        cart:state.cart,
        product:state.product
    }
}

const mapDispatchProps ={
    addToCart: addToCart
}

connect(mapStateProps,mapDispatchProps)

export default connect(mapStateProps,mapDispatchProps)(Shop);