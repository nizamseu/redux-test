import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CardActions';
import cartReducers from '../../Redux/Reducers/CartReducers';

const Cart = (props) => {
   const {remove,cart}=props;
    return (
        <div>
            <h1>This Is Cart Section</h1>
            {
                cart.map(item=> <li>{item.name}
                <button onClick={()=> remove(item.cartId)}>X</button>
                </li>)
            }
        </div>
    );
};
const mapStateProps =state =>{
    return{
        cart: state.cart
    }
};

const mapDispatchProps={
    remove:removeFromCart
}
export default connect(mapStateProps,mapDispatchProps) (Cart);