import { QuestionMarkCircleIcon } from "@heroicons/react/solid"

import ShippingCost from '../order/ShippingCost'

const DetailCost = ({
    amount,
    applyCoupon,
    coupon,
    coupon_code,

    shipping_id,
    shipping,
    onChange,
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
                    

                    <div className="mb-6 pb-6 border-b border-gray-200">
                        <div className="-mx-2 flex items-end justify-end">
                            <div className="flex-grow px-2 lg:max-w-xs">
                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Cuopon de Descuento</label>
                                <div>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="XXXXXX"
                                        type="text"
                                        onChange={e => onChange(e)}
                                        value={coupon_code}
                                        name='coupon_code'
                                    />
                                </div>
                            </div>
                            <div className="px-2">
                                <button onClick={applyCoupon} className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                            </div>
                        </div>
                    </div>


                    <dl className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex items-center text-sm text-gray-600">
                                <span>Shipping estimate</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how shipping is calculated</span>
                                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex text-sm text-gray-600">
                                <span>Tax estimate</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how tax is calculated</span>
                                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900">Order total</dt>
                            <dd className="text-base font-medium text-gray-900">${amount.toFixed(2)}</dd>
                        </div>
                    </dl>
                </>


            </section>
        </>
    )
}

export default DetailCost