
import { Disclosure } from "@headlessui/react"
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
const MoreFilters = ({
    sortBy,
    onChange,
    order
}) => {
    return (
        <Disclosure as="div" className="border-t border-gray-200 px-4 py-6">
            {({ open }) => (
                <>
                    <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="px-2 py-3 rounded-lg bg-orange-200 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-sofiapro-regular font-semibold text-black">Mas Filtros</span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                ) : (
                                    <PlusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                                <div className='form-group '>
                                    <label htmlFor='sortBy' className='mr-3 min-w-0 flex-1 text-gray-500'
                                    >Ver por</label>
                                    <select
                                        className='my-2 font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
                                        id='sortBy'
                                        name='sortBy'
                                        onChange={e => onChange(e)}
                                        value={sortBy}
                                    >
                                        <option value='date_created'>Fecha</option>
                                        <option value='price'>Precio</option>
                                        <option value='sold'>Sold</option>
                                        <option value='title'>Nombre</option>

                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='order' className='mr-3 min-w-0 flex-1 text-gray-500'
                                    >Orden</label>
                                    <select
                                        className='my-2 font-sofiapro-light inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500'
                                        id='order'
                                        name='order'
                                        onChange={e => onChange(e)}
                                        value={order}
                                    >
                                        <option value='asc'>A - Z</option>
                                        <option value='desc'>Z - A</option>
                                    </select>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </h3>
                </>
            )}
        </Disclosure>
    )
}

export default MoreFilters