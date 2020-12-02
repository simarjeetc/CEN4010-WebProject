import { CART_ADD_ITEM} from './CartConstants'
import { CART_REMOVE_ITEM} from "./CartConstants"
import Cookie from "js-cookie";                 // COOKIES FOR CART STORAGE
const { default: Axios } = require("axios")

const addToCart = (productId, qty) => async (dispatch,getState) => {
    try {
        const {data} = await Axios.get("/books/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            qty
        }
    });


    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
}
const removeFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type:CART_REMOVE_ITEM, payload: productId});

    const {cart: {cartItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}
export {addToCart, removeFromCart}