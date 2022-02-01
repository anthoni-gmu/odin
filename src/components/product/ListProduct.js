import { Link } from "react-router-dom"


export default function ListProducts({
    data
}) {
    return (

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data &&
                data !== null &&
                data !== undefined &&
                data.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-28 lg:aspect-none">
                            <img
                                src={product.photo_url}
                                alt=""
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <Link to={`/product/${product.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                    </Link>
                                </h3>

                            </div>
                            <p className="text-sm font-medium text-gray-900">${product.price}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}
