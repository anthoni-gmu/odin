
const FilterCategories = ({
    categories,
    onChange,
}) => {
    return (
        <div role="list" className="font-medium text-gray-900 px-2 py-3">
                                <div className=' flex items-center h-5 my-5'>
                                    <input
                                        name='category_id'
                                        onChange={e => onChange(e)}
                                        value={0}
                                        type='radio'
                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                    />
                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                        Todos
                                    </label>
                                </div>
                                {

                                    categories &&
                                    categories !== null &&
                                    categories !== undefined &&
                                    categories.map(category => {
                                        if (category.sub_categories.length === 0) {
                                            return (
                                                <div key={category.id} className=' flex items-center h-5 my-5'>
                                                    <input
                                                        name='category_id'
                                                        onChange={e => onChange(e)}
                                                        value={category.id.toString()}
                                                        type='radio'
                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                    />
                                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                        {category.name}
                                                    </label>
                                                </div>
                                            )
                                        } else {
                                            let result = []
                                            result.push(
                                                <div key={category.id} className='flex items-center h-5'>
                                                    <input
                                                        name='category_id'
                                                        onChange={e => onChange(e)}
                                                        value={category.id.toString()}
                                                        type='radio'
                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                    />
                                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                        {category.name}
                                                    </label>
                                                </div>
                                            )

                                            category.sub_categories.map(sub_category => {
                                                result.push(
                                                    <div key={sub_category.id} className='flex items-center h-5 ml-2 my-5'>
                                                        <input
                                                            name='category_id'
                                                            onChange={e => onChange(e)}
                                                            value={sub_category.id.toString()}
                                                            type='radio'
                                                            className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                        />
                                                        <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                            {sub_category.name}
                                                        </label>
                                                    </div>
                                                )
                                            })

                                            return result
                                        }
                                    })
                                }
                            </div>
    )
}

export default FilterCategories