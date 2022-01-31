import { SearchIcon } from '@heroicons/react/solid'


const SearchLarge = ({
    categories,
    category_id,
    search,
    onChange,
    onSubmit,
}) => {
    return (

        <form onSubmit={e => onSubmit(e)}>
            <h1 className="text-center font-bold text-dark text-4xl" > 🐍 BUSCA TU STYLE EN TW$ 🔥</h1>
            <p className="lg:my-3 w-full leading-relaxed text-gray-500 text-center">¿Exclusividad 💸? … Tenemos los diseños más exclusivos en nuestro catálogo</p>
            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                <input className=" text-gray-800 flex-grow outline-none px-2 " type="search"
                    name="search"
                    onChange={e => onChange(e)}
                    value={search}
                    required placeholder="Que buscas hoy?" />
                <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                    <select onChange={e => onChange(e)} name='category_id' className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
                        <option value={0} defaultValue>Todas</option>
                        {
                            categories &&
                            categories !== null &&
                            categories !== undefined &&
                            categories.map((category, index) => (
                                <option key={index}  value={category.id.toString()}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                    <button type="submit" className="bg-amber-accent-400 hover:bg-amber-700 text-white text-base rounded-lg px-4 py-2 font-thin">Buscar</button>
                </div>
            </div>
        </form>
    )
}

export default SearchLarge