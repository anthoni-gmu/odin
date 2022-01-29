
import { Disclosure } from "@headlessui/react"
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
const FilterPrices = ({
    price_range,
    onChange,
    prices,
}) => {
    return (
        <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
            {({ open }) => (
                <>
                    <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="px-2 py-3 rounded-lg bg-orange-200 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-sofiapro-regular font-semibold text-gray-900">Prices</span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                ) : (
                                    <PlusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-6">
                            <div className="grid md:grid-cols-2">
                                {
                                    prices && prices.map((price, index) => {
                                        if (price.id === 0) {
                                            return (
                                                <div key={index} className='form-check my-3'>
                                                    <input
                                                        onChange={e => onChange(e)}
                                                        value={price.name}
                                                        name='price_range'
                                                        type='radio'
                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                        defaultChecked
                                                    />
                                                    <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                                                </div>
                                            )
                                        } else {

                                            if (price.name === price_range) {
                                                return (
                                                    <div key={index} className='form-check my-3'>
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={price.name}
                                                            name='price_range'
                                                            type='radio'
                                                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                        />
                                                        <label className='ml-3 min-w-0 flex-1 text-amber-300 font-sofiapro-light'>{price.name}</label>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div key={index} className='form-check my-3'>
                                                        <input
                                                            onChange={e => onChange(e)}
                                                            value={price.name}
                                                            name='price_range'
                                                            type='radio'
                                                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                        />
                                                        <label className='ml-3 min-w-0 flex-1 text-gray-500 font-sofiapro-light'>{price.name}</label>
                                                    </div>
                                                )
                                            }

                                        }
                                    })
                                }
                            </div>
                        </Disclosure.Panel>

                    </h3>
                </>
            )}
        </Disclosure>
    )
}

export default FilterPrices