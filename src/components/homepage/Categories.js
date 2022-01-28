import { Link } from "react-router-dom"
import cgorras from "../../img/banner/gorras.jpg"


export default function Categories({
    data
}) {
    return (

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data &&
                data !== null &&
                data !== undefined &&
                data.map((category) => (
                    <div className="w-1/2 p-4 lg:w-1/4">
                        <div className=" bg-center rounded-lg bg-cover h-96 bg-ima" style={{ backgroundImage: `url(${cgorras})` }}  >
                            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-5 hover:bg-opacity-50 hover:rounded-lg">
                                <div className="text-center">
                                    <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-deep-purple-accent-400 rounded-md lg:w-auto hover:bg-deep-purple-accent-100 focus:outline-none focus:bg-amber-500">{category.name}</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                ))}
        </div>
    )
}
