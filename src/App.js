
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './containers/Home'
import Error404 from './containers/errors/Error404';

import Signup from "./containers/auth/Signup";
import Login from "./containers/auth/Login";
import Activate from './containers/auth/Activate';
// import ResetPassword from './containers/auth/ResetPassword';
// import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';

import Product from "./containers/product/Product";
import Shop from "./containers/Shop";
import Cart from "./containers/cart/Cart";
import Profile from "./containers/account/Profile";
import InfoProfile from "./containers/account/InfoProfile";
import Wishlist from "./containers/account/Wishlist"; 
import Checkout from "./containers/checkout/Checkout";
import ThankYou from "./containers/pages/ThankYou";
import MyOrders from "./containers/account/MyOrders";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />
          <Route path="/thankyou" element={<ThankYou />} />

          <Route exact path='/' element={<Home />} />

          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>

          <Route exact path='/product/:productId' element={<Product />}/>
          <Route exact path='/shop' element={<Shop />}/>


          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/profile/info' element={<InfoProfile/>}/>
          <Route exact path='/profile/wishlist' element={<Wishlist/>}/>
          <Route exact path='/profile/orders' element={<MyOrders/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
