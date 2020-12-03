import { CART_ADD_ITEM} from './CartConstants'
import { CART_REMOVE_ITEM} from "./CartConstants"
// import { SAVE_FOR_LATER} from "./CartConstants"
import Cookie, { getJSON } from "js-cookie"; // COOKIES FOR CART STORAGE
import BookDetails from './BookDetails';
const { default: Axios } = require("axios")

const addToCart = (productId, qty) => async (dispatch, getState) => {
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
// localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

const {cart:{cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));
} catch (error) {
 

}
}
const removeFromCart = (productId) => (dispatch, getState) =>{
dispatch({type:CART_REMOVE_ITEM, payload: productId});

const {cart: {cartItems}} = getState();
Cookie.set("cartItems", JSON.stringify(cartItems));
}

// const saveForLater = (productId, qty) => async (dispatch, getState) => {
// try {
// const {data} = await Axios.get("/books/" + productId);
// dispatch({
// type: SAVE_FOR_LATER, payload:{
// product: data._id,
// name: data.name,
// image: data.image,
// price: data.price,
// qty
// }
// });
// const {save:{savedItems}} = getState();
// Cookie.set("savedItems", JSON.stringify(savedItems));
// } catch (error) {
 

// }
// }


export {addToCart, removeFromCart}