import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import OrdenSummary from "../order/OrdenSummary";
import ShippingCost from "../order/ShippingCost";


const Checkout = ({
    amount,
    isAuthenticated,
    shipping

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



    return (
        <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
        >

            {order ? <OrdenSummary amount={amount} /> : <ShippingCost shipping={shipping} />}

            {showButton()}

        </section>
    )
}
export default Checkout