import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer} from './CartReducer';
import {cartReducer} from './CartReducer'


const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems } };
const reducer = combineReducers({
    productList : cartReducer,
    cart: cartReducer
})


const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSR_ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;