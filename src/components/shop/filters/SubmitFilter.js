import { FilterIcon, TrashIcon } from "@heroicons/react/solid"

const SubmitFilter = ({ onReset }) => {
    return (
        <>
            <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-600 hover:bg-green-accent-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <FilterIcon className="h-5 w-5 " aria-hidden="true" />
                Buscar
            </button>
            <button
                onClick={e => onReset(e)}

                className=" mx-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-accent-400 hover:bg-red-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <TrashIcon className="h-5 w-5 " aria-hidden="true" />
                Limpiar
            </button>
        </>
    )
}

export default SubmitFilter