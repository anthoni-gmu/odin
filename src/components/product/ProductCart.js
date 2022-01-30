import { Link } from "react-router-dom"
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'
const ProductCard = ({ product

}) => {


    return (
        <div key={product.id} className="group relative m-2">

            <div className="shadow-lg rounded-2xl  bg-white w-auto m-auto p-1">
                <Link to={`/product/${product.id}`}>
                    <img alt="" src={product.photo} />
                </Link>
                <div className="bg-slate-400 m-3 p-4 rounded-lg">
                    <Link to={`/product/${product.id}`} className="text-white text-xl font-bold ">
                        {product.title}
                    </Link>
                    <p className="text-gray-50 text-xs">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between ">
                        <p className="text-white font-bold text-xl ">
                            ${product.price}
                        </p>
                        <div className="flex space-x-2">
                            <Link to="/" className="w-10 h-10 text-base font-medium rounded-full text-white bg-amber-accent-400 hover:bg-amber-700 flex justify-center ">
                                <ShoppingCartIcon className="w-5 h-5 m-auto" />
                            </Link>
                            <Link to="/" className="w-10 h-10 text-base font-medium rounded-full text-white bg-red-accent-200 hover:bg-red-accent-700 flex justify-center ">
                                <HeartIcon className="w-5 h-5 m-auto" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard