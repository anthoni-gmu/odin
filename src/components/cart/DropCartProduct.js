import { useState } from "react";
import { Link } from "react-router-dom";
import { UploadIcon, XIcon, CheckIcon, ClockIcon, MinusCircleIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
const DropCartProduct = ({
    item,
    remove_item,
    render,
    setRender,
}) => {


    const removeItemHandler = async () => {
        await remove_item(item);
        setRender(!render);
    };

    return (
            <div className="flex w-full space-x-2 sm:space-x-1">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-coolGray-500" src={item.product.photo_url} alt={item.product.title} />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item.product.title}</h3>
                            {/* <p className="text-sm dark:text-coolGray-400">Classic</p> */}
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold text-gray-500">{item.count}</p>

                            <p className="text-lg font-semibold text-gray-500">${item.product.price}</p>
                            {/* <p className="text-sm line-through dark:text-coolGray-600">75.50€</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap border-b-2 my-2">
                        <h1 className="flex-auto text-base font-semibold ">
                            Total
                        </h1>
                        <div className="text-xl font-semibold  ">
                            ${item.product.price * item.count}
                        </div>

                    </div>
                    <div className="flex text-sm divide-x">
                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-deep-orange-accent-400" onClick={removeItemHandler}>
                            <MinusCircleIcon className='w-5 h-5' />
                            <span>Eliminar</span>
                        </button>

                    </div>
                </div>
            </div>

    )
}
export default DropCartProduct