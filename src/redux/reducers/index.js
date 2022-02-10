import { combineReducers } from "redux";

import Auth from "./auth";
import Alert from "./alert";
import Product from "./product";
import Categories from './categories';
import Colors from './colors';
import Sizes from './sizes';
import Cart from './cart';
import Account from "./account";
import Wishlist from "./wishlist";
import Shipping from "./shipping";
import Orders from "./order";
import Coupons from "./coupon";
import Payment from "./payment";



export default combineReducers({
    Auth,
    Alert,
    Product,
    Categories,
    Colors,
    Sizes,
    Cart,
    Account,
    Wishlist,
    Shipping,
    Orders,
    Coupons,
    Payment
})