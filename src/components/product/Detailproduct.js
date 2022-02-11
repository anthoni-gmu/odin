import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import Loader, { Oval } from "react-loader-spinner";

import Sizes from './detail/Sizes'
import WishlistHeart from '../wishlist/WishlistHeart';

export default function ProductDetail({
    wishlist,
    addToWishlist,
    product,
    catProduct,
    colors,
    addToCart,
    loading
}) {



    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-8 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt={product.title} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.photo_url} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{catProduct.name}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                        <div className="flex mb-4">
                            {/* <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span> */}





                        </div>



                        <p className="leading-relaxed">{product.description}</p>


                        <div className=" mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <h2 className="mr-3 font-bold mt-2">Colores</h2>

                            <div className="flex  ">
                                {
                                    colors && colors.map(p_color => {
                                        return (
                                            <Link to={`/product/${p_color.id}`} key={p_color.id} className='space-x-1 flex' >
                                                <img alt={p_color.title} className="lg:w-1/3 w-1/3 lg:h-auto  object-cover object-center rounded" src={p_color.photo_url} />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            {product.sizes_drop.length !== 0 && <Sizes sizes={product.sizes_drop} />}


                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                            {
                                loading ?
                                    <button
                                        className="flex ml-auto text-white bg-slate-700 border-0 w-10 h-10 items-center justify-center focus:outline-none hover:bg-slate-500 rounded-full">
                                        <Oval
                                            type="Oval"
                                            color="#fff"
                                            width={20}
                                            height={20}

                                        />
                                    </button> :
                                    <button onClick={addToCart} className="flex ml-auto text-white bg-slate-700 border-0 w-10 h-10 items-center justify-center focus:outline-none hover:bg-slate-500 rounded-full">
                                        <ShoppingCartIcon className='w-6 h-6' />
                                    </button>
                            }



                            <WishlistHeart
                                product={product}
                                wishlist={wishlist}
                                addToWishlist={addToWishlist}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
