import { QuestionMarkCircleIcon } from "@heroicons/react/solid"

const OrdenSummary = ({ amount }) => {
    return (
        <>
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                Order summary
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

export default OrdenSummary