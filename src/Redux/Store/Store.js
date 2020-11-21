const { createStore } = require("redux");
const { default: cartReducers } = require("../Reducers/CartReducers");

export const store = createStore(cartReducers);