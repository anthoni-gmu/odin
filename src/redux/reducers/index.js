import { combineReducers } from "redux";

import Auth from "./auth";
import Alert from "./alert";
import Product from "./product";
import Categories from './categories';
import Colors from './colors';
import Sizes from './sizes';
import Cart from './cart';



export default combineReducers({
    Auth,
    Alert,
    Product,
    Categories,
    Colors,
    Sizes,
    Cart
})