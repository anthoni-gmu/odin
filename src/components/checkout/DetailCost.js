import { QuestionMarkCircleIcon } from "@heroicons/react/solid"
import { Link } from "react-router-dom"

import ShippingCost from '../order/ShippingCost'
import CouponCost from "./CouponCost"

const DetailCost = ({
    applyCoupon,
    coupon,
    coupon_code,

    shipping_id,
    shipping,
    onChange,

    estimated_tax,
    shipping_cost,
    total_amount,
    original_price,
    total_after_coupon
}) => {
    return (
        <>
            <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >

                <>
                    <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                        Order summary
                    </h2>

                    <ShippingCost shipping={shipping} shipping_id={shipping_id} onChange={onChange} />

                    <CouponCost onChange={onChange} coupon_code={coupon_code} applyCoupon={applyCoupon} coupon={coupon} />




                    <dl className="mt-6 mb-3 space-y-4">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">${original_price}</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal Después del Coupon </dt>
                            <dd className="text-sm font-medium text-gray-900">${total_after_coupon}</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex items-center text-sm text-gray-600">
                                <span>Costo de Entrega</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how shipping is calculated</span>
                                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">${shipping_cost}</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex text-sm text-gray-600">
                                <span>IGV</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how tax is calculated</span>
                                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">${estimated_tax}</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900">Precio Total</dt>
                            <dd className="text-base font-medium text-gray-900">${total_amount}</dd>
                        </div>
                    </dl>
                    <div className="mt-10">
                        <button
                            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                        >
                           PROCESAR PAGO
                        </button>
                    </div>
                </>


            </section>
        </>
    )
}

export default DetailCost