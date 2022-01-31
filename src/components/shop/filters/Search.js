const Search = ({
    search,
    onChange,
}) => {
    return (
        <div className="pt-2 relative mx-auto text-gray-600 border-t-2 border-dashed border-slate-600 px-4 py-2">
            <input
                onChange={e => onChange(e)} className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                type="search" name="search" value={search && search !== null && search !== undefined ? search : search} placeholder="Buscar" />
        </div>
    )
}

export default Search