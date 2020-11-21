import {ADD_TO_CART,REMOVE_FROM_CART} from '../Actions/CardActions';

const initialState={
    cart :[],
    product:[ {name:'Lenovo laptop', id:1},
    {name:'HP laptop', id:2},
    {name:'Toshiba laptop', id:3},
    {name:'Dell 5g Tab', id:4},
    {name:'Walton Mobile', id:5},
    {name:'Doel laptop', id:6},
    {name:'Asus laptop', id:7},
    {name:'Huawe Mobile', id:8},
    {name:'Google Pixel', id:9},
    {name:'Windows Phone', id:10},
    {name:'Xiomi G25T', id:11},
    {name:'HTC MY2B', id:12}]
}

const cartReducers =(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            console.log("action",action);
            const newItem ={
                productId:action.id,
                name:action.name,
                cartId:state.cart.length +1
            }
            const newCart =[...state.cart,newItem];
            return {...state,cart:newCart};
        case REMOVE_FROM_CART:
            const id=action.id;
            const remainingCart =state.cart.filter(item => item.cartId !==id);
            return {...state,cart:remainingCart}
        default:
            return state;
    }
}

export default cartReducers;