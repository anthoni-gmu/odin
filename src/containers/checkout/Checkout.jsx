import Layout from '../../layout/Layout'
import { connect } from 'react-redux'
import { setAlert } from "../../redux/actions/alert";

import {
    get_items,
    get_total,
    get_item_total
} from "../../redux/actions/cart";
import {
    get_payment_total,
    get_client_token,
    process_payment
} from '../../redux/actions/payment';


import { useEffect } from "react";
import { useState } from "react";

import { get_shipping_options } from '../../redux/actions/shipping';
import { check_coupon } from '../../redux/actions/coupon';


import FormPayment from '../../components/checkout/FormPayment';
import DetailCost from '../../components/checkout/DetailCost';
import { get_account } from "../../redux/actions/account";
import { Navigate } from 'react-router-dom';

const Checkout = ({
    get_items,
    get_total,
    get_item_total,
    isAuthenticated,
    items,
    amount,
    total_items,
    setAlert,
    user,

    get_shipping_options,
    shipping,

    check_coupon,
    coupon,

    get_payment_total,
    get_client_token,
    process_payment,

    clientToken,
    made_payment,
    loading,
    original_price,
    total_after_coupon,
    total_amount,
    estimated_tax,
    shipping_cost,

    profile

}) => {
    const [render, setRender] = useState(false);


    const [formData, setFormData] = useState({
        full_name: user.get_full_name,
        address_line_1: profile.address_line_1,
        address_line_2: profile.address_line_2,
        city: profile.city,
        state_province_region: profile.state_province_region,
        postal_zip_code: profile.zipcode,
        country_region: 'Peru',
        telephone_number: profile.phone,
        coupon_code: '',
        shipping_id: 0,
    });

    const [data, setData] = useState({
        instance: {}
    });

    const {
        full_name,
        address_line_1,
        address_line_2,
        city,
        state_province_region,
        postal_zip_code,
        country_region,
        telephone_number,
        coupon_code,
        shipping_id,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    useEffect(() => {
        get_client_token();
    }, [user]);

    useEffect(() => {
        window.scrollTo(0, 0);
        get_items()
        get_total()
        get_item_total()
    }, [render])

    useEffect(() => {
        get_shipping_options()
    }, []);

    useEffect(() => {
        if (coupon && coupon !== null && coupon !== undefined)
            get_payment_total(shipping_id, coupon.code);
        else
            get_payment_total(shipping_id, 'default');
    }, [shipping_id, coupon]);
    const buy = async e => {
        e.preventDefault();
        let nonce = await data.instance.requestPaymentMethod();
        if (coupon && coupon !== null && coupon !== undefined) {
          process_payment(
              nonce,
              shipping_id,
              coupon.value,
              full_name,
              address_line_1,
              address_line_2,
              city,
              state_province_region,
              postal_zip_code,
              country_region,
              telephone_number
          );
        } else {
          process_payment(
              nonce,
              shipping_id,
              '',
              full_name,
              address_line_1,
              address_line_2,
              city,
              state_province_region,
              postal_zip_code,
              country_region,
              telephone_number
          );
      }
    }

    const applyCoupon = async e => {
        e.preventDefault()
        check_coupon(coupon_code)
    }
    if (made_payment)
        return <Navigate to='/thankyou' />;



    return (
        <Layout>
            <div className="bg-white">

                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Procesar Pago = {total_items} </h1>
                    <form onSubmit={e => buy(e)} className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">


                            <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {<FormPayment
                                    onChange={onChange}
                                    full_name={full_name}
                                    address_line_1={address_line_1}
                                    address_line_2={address_line_2}
                                    city={city}
                                    state_province_region={state_province_region}
                                    postal_zip_code={postal_zip_code}
                                    country_region={country_region}
                                    telephone_number={telephone_number}

                                    clientToken={clientToken}
                                    data={data}
                                    isAuthenticated={isAuthenticated}
                                    loading={loading}

                                />}
                            </div>
                        </section>

                        {/* Order summary */}
                        <DetailCost

                            applyCoupon={applyCoupon}
                            coupon={coupon}
                            coupon_code={coupon_code}

                            shipping_id={shipping_id}
                            shipping={shipping}

                            onChange={onChange}

                            estimated_tax={estimated_tax}
                            shipping_cost={shipping_cost}

                            total_amount={total_amount}
                            original_price={original_price}
                            total_after_coupon={total_after_coupon}


                        />


                    </form>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,


    clientToken: state.Payment.clientToken,
    made_payment: state.Payment.made_payment,
    loading: state.Payment.loading,
    original_price: state.Payment.original_price,
    total_after_coupon: state.Payment.total_after_coupon,
    total_amount: state.Payment.total_amount,
    estimated_tax: state.Payment.estimated_tax,
    shipping_cost: state.Payment.shipping_cost,

    items: state.Cart.items,
    amount: state.Cart.amount,
    total_items: state.Cart.total_items,

    shipping: state.Shipping.shipping,
    coupon: state.Coupons.coupon,

    profile: state.Account.profile,


})

export default connect(mapStateToProps, {
    get_items,
    get_total,
    get_item_total,
    setAlert,
    get_shipping_options,
    check_coupon,
    get_payment_total,
    get_client_token,
    process_payment,

})(Checkout)