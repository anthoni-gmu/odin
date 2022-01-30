
import FilterPrices from "./filters/FilterPrices"
import FilterCategories from "./filters/FilterCategories"
import FilterColors from "./filters/FilterColors"
import MoreFilters from "./filters/MoreFilters"

import Search from "./filters/Search"
import SubmitFilter from "./filters/SubmitFilter"
const Filter = ({
    search,
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
            <Search
                onChange={onChange}
                search={search}
            />
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

            <SubmitFilter />
        </form>
    )
}

export default Filter