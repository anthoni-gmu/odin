import Layout from '../../layout/Layout'
import { connect } from 'react-redux'
import { setAlert } from "../../redux/actions/alert";

import {
    get_items,
    get_total,
    get_item_total
} from "../../redux/actions/cart";

import { useEffect } from "react";
import { useState } from "react";

import { get_shipping_options } from '../../redux/actions/shipping';
import { check_coupon } from '../../redux/actions/coupon';

import FormPayment from '../../components/checkout/FormPayment';
import DetailCost from '../../components/checkout/DetailCost';

const Checkout = ({
    get_items,
    get_total,
    get_item_total,
    isAuthenticated,
    items,
    amount,
    total_items,
    setAlert,

    get_shipping_options,
    shipping,

    check_coupon,
    coupon

}) => {
    const [render, setRender] = useState(false);


    const [formData, setFormData] = useState({
        full_name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state_province_region: '',
        postal_zip_code: '',
        country_region: 'Peru',
        telephone_number: '',
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
        window.scrollTo(0, 0);
        get_items()
        get_total()
        get_item_total()
    }, [render])

    useEffect(() => {
        get_shipping_options()
    }, []);


    const applyCoupon = async e => {
        e.preventDefault()
        check_coupon(coupon_code)
    }



    return (
        <Layout>
            <div className="bg-white">

                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Procesar Pago = {total_items} </h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">


                            <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
                                {<FormPayment />}
                            </div>
                        </section>

                        {/* Order summary */}
                        <DetailCost
                            amount={amount}

                            applyCoupon={applyCoupon}
                            coupon={coupon}
                            coupon_code={coupon_code}

                            shipping_id={shipping_id}
                            shipping={shipping}

                            onChange={onChange}

                        />


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
    total_items: state.Cart.total_items,
    shipping: state.Shipping.shipping,
    coupon: state.Coupons.coupon

})

export default connect(mapStateToProps, {
    get_items,
    get_total,
    get_item_total,
    setAlert,
    get_shipping_options,
    check_coupon


})(Checkout)