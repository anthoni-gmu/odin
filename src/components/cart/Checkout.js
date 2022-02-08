import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import OrdenSummary from "../order/OrdenSummary";
const Checkout = ({
    amount,
    isAuthenticated
}) => {
    const [order, setorder] = useState(true)

    const go_checkout = () => {
        if (isAuthenticated) {
            console.log('hola')
            setorder(!order)
        } else {
            console.log('hola')

            return <Navigate to="/" />


        }

    }


    const showButton = () => {
        if (isAuthenticated) {
            return (
                <div className="mt-6">
                    <button
                        onClick={go_checkout}
                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                        Checkout
                    </button>
                </div>
            )
        } else {
            return (

                <Link to='/login' >
                    <button
                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </Link>
            )


        }
    }

    const showData = () => {
        return (
            <>
                <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                    Informacion
                </h2>

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
        )
    }

    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
        >

            {order ? <OrdenSummary amount={amount} /> : showData()}

            {showButton()}

        </section>
    )
}
export default Checkout