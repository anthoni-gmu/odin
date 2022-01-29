import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { MinusSmIcon, PlusSmIcon, XIcon } from "@heroicons/react/solid"

import FilterPrices from "./filters/FilterPrices"
import FilterCategories from "./filters/FilterCategories"
import FilterColors from "./filters/FilterColors"
import MoreFilters from "./filters/MoreFilter"

import { Link } from "react-router-dom"
const Filter = ({
    price_range,
    sortBy,
    order,
    onSubmit,
    onChange,
    categories,
    prices,
    colors,
    color_id

}) => {


    return (
        <form onSubmit={e => onSubmit(e)} className="hidden lg:block">
            <FilterCategories
                onChange={onChange}
                categories={categories}
            />

            <FilterPrices
                price_range={price_range}
                onChange={onChange}
                prices={prices}
            />

            <FilterColors
                color_id={color_id}
                onChange={onChange}
                colors={colors}
            />

            <MoreFilters
                sortBy={sortBy}
                onChange={onChange}
                order={order}

            />

            <button
                type="submit"
                className="float-right inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Buscar
            </button>
        </form>
    )
}

export default Filter