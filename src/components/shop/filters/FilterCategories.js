
const FilterCategories = ({
    categories,
    onChange,
}) => {
    return (
        <div role="list" className="font-medium text-gray-900 border-t-2 border-dashed border-slate-600 px-4 py-2">
        <h1 className="text-gray-700 text-center font-bold" >Categorias</h1>
            <div className=' flex items-center h-5 my-5'>
                <input
                    name='category_id'
                    onChange={e => onChange(e)}
                    value={0}
                    type='radio'
                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                />
                <label className="ml-3 min-w-0 flex-1 text-gray-700">
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
                                <label className="ml-3 min-w-0 flex-1 text-gray-700">
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
                                <label className="ml-3 min-w-0 flex-1 text-gray-700">
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
                                    <label className="ml-3 min-w-0 flex-1 text-gray-700">
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