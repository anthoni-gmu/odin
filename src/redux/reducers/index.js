import { combineReducers } from "redux";

import Auth from "./auth";
import Alert from "./alert";
import Product from "./product";
import Categories from './categories';
import Colors from './colors';



export default combineReducers({
    Auth,
    Alert,
    Product,
    Categories,
    Colors
})