import { CashIcon, ChevronDownIcon, LocationMarkerIcon, TruckIcon, UserIcon } from "@heroicons/react/solid"
import { Disclosure } from '@headlessui/react'

const OrdenInformation = ({
    amount,
    full_name,
    address_line_1,
    shipping_name,
    transaction_id
}) => {

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-800 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Detalles de la orden:  {transaction_id}  </span>
                        <ChevronDownIcon
                            className={`${open ? 'transform rotate-180' : ''
                                } w-6 h-6 text-indigo-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className="  my-2 border mx-auto    border-[2px]  w-10/12 justify-center flex items-center rounded-md shadow-sm">
                            <div
                                className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white ">
                                <CashIcon className='h-6 w-6 text-indigo-400' />
                            </div>

                            <div className="  w-full">
                                <p
                                    className='w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none flex items-center font-medium'>
                                    ${amount} </p>
                            </div>
                        </div>
                        <div className="  my-2 border mx-auto    border-[2px]  w-10/12 justify-center flex items-center rounded-md shadow-sm">
                            <div
                                className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white ">
                                <UserIcon className='h-6 w-6 text-indigo-400' />
                            </div>

                            <div className="  w-full">
                                <p
                                    className='w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none flex items-center font-medium'>
                                    {full_name} </p>
                            </div>
                        </div>
                        <div className="  my-2 border mx-auto    border-[2px]  w-10/12 justify-center flex items-center rounded-md shadow-sm">
                            <div
                                className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white ">
                                <LocationMarkerIcon className='h-6 w-6 text-indigo-400' />
                            </div>

                            <div className="  w-full">
                                <p
                                    className='w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none flex items-center font-medium'>
                                    {address_line_1} </p>
                            </div>
                        </div>
                        <div className="  my-2 border mx-auto    border-[2px]  w-10/12 justify-center flex items-center rounded-md shadow-sm">
                            <div
                                className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white ">
                                <TruckIcon className='h-6 w-6 text-indigo-400' />
                            </div>

                            <div className="  w-full">
                                <p className='w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none flex items-center font-medium'>
                                    {shipping_name} </p>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    )

}
export default OrdenInformation