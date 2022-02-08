import Layout from '../../layout/Layout'
import { connect } from 'react-redux'
import { setAlert } from "../../redux/actions/alert";

import {
  remove_item,
  update_item,
  get_items,
  get_total,
  get_item_total
} from "../../redux/actions/cart";

import { useEffect } from "react";
import { useState } from "react";

import CartItem from '../../components/cart/CartItem';
import Checkout from '../../components/cart/Checkout';

const Cart = ({
  remove_item,
  update_item,
  get_items,
  get_total,
  get_item_total,
  isAuthenticated,
  items,
  amount,
  total_items,
  setAlert,

}) => {
  const [render, setRender] = useState(false);


  const showItems = () => {
    return (
      <div>
        {
          items &&
          items !== null &&
          items !== undefined &&
          items.length !== 0 &&
          items.map((item, index) => {
            let count = item.count;
            return (
              <div key={index}>
                <CartItem
                  item={item}
                  count={count}
                  update_item={update_item}
                  remove_item={remove_item}
                  render={render}
                  setRender={setRender}
                  setAlert={setAlert}
                />
              </div>
            );
          })
        }
      </div>
    )
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    get_items()
    get_total()
    get_item_total()
  }, [render])



  return (
    <Layout>
      <div className="bg-white">

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Carrito de Compras </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
                {total_items > 0 ? showItems() : <>No products</>}
              </div>
            </section>

            {/* Order summary */}
            <Checkout  isAuthenticated={isAuthenticated} amount={amount} />


          </div>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  items: state.Cart.items,
  amount: state.Cart.amount,
  total_items: state.Cart.total_items
})

export default connect(mapStateToProps, {
  get_items,
  get_total,
  get_item_total,
  remove_item,
  update_item,
  setAlert,
})(Cart)