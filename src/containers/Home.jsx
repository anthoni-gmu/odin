import Layaut from '../layout/Layout'
import homeVideo from "../img/video/271615819_645188563579221_9010116722901761548_n.mp4"
import ReactPlayer from 'react-player'
import { useEffect } from "react";
import { get_products_frontpage } from "../redux/actions/product"
import { connect } from "react-redux"
import Feature from '../components/homepage/Featured';
import { Link } from 'react-router-dom';
import Test from '../components/product/Test'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'



import cpolos from "../img/banner/polos.jpg"
import cgorras from "../img/banner/gorras.jpg"
import cbeanies from "../img/banner/beanies.jpg"
import cpoleras from "../img/banner/poleras2.jpg"
import cstiker from "../img/banner/stiker.jpg"
import cshort from "../img/banner/shorts.jpg"
import herobanner from "../img/banner/hero2.jpeg"




import { RadioGroup } from '@headlessui/react'


const Home = ({
    get_products_frontpage,
    categories
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        get_products_frontpage();
    }, []);

    return (

        <Layaut >


            <div className="relative  bg-orange-300 overflow-hidden" style={{ backgroundImage: `url(${herobanner})` }}  >
                <div className="pt-16 pb-20 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-yellow-accent-700 sm:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-50 font-semibold">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                                if you live or die.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">


                                <Link
                                    to="/shop"
                                    className="inline-block text-center bg-teal-accent-200 border border-transparent rounded-md py-3 px-8 font-extrabold text-gray-800 hover:bg-teal-accent-700  "
                                >
                                    💸 TIENDA 💸
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <section className="text-gray-600 body-font">

                <div className="max-w-2xl mx-auto  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Categorias</h1>
                            <div className="h-1 w-20 bg-deep-purple-400 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className=" flex flex-wrap -m-4">
                        <div className="w-1/2 p-4 lg:w-1/4">
                            <div className=" bg-center rounded-lg bg-cover h-96 bg-ima" style={{ backgroundImage: `url(${cpolos})` }}  >
                                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-5 hover:bg-opacity-50 hover:rounded-lg">
                                    <div className="text-center">
                                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-deep-purple-accent-400 rounded-md lg:w-auto hover:bg-deep-purple-accent-100 focus:outline-none focus:bg-amber-500">Stikers</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-4 lg:w-1/4">
                            <div className=" bg-center rounded-lg bg-cover h-96 bg-ima" style={{ backgroundImage: `url(${cpolos})` }}  >
                                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-5 hover:bg-opacity-50 hover:rounded-lg">
                                    <div className="text-center">
                                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-deep-purple-accent-400 rounded-md lg:w-auto hover:bg-deep-purple-accent-100 focus:outline-none focus:bg-amber-500">Stikers</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-4 lg:w-1/4">
                            <div className=" bg-center rounded-lg bg-cover h-96 bg-ima" style={{ backgroundImage: `url(${cpolos})` }}  >
                                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-5 hover:bg-opacity-50 hover:rounded-lg">
                                    <div className="text-center">
                                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-deep-purple-accent-400 rounded-md lg:w-auto hover:bg-deep-purple-accent-100 focus:outline-none focus:bg-amber-500">Stikers</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-4 lg:w-1/4">
                            <div className=" bg-center rounded-lg bg-cover h-96 bg-ima" style={{ backgroundImage: `url(${cpolos})` }}  >
                                <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-5 hover:bg-opacity-50 hover:rounded-lg">
                                    <div className="text-center">
                                        <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-deep-purple-accent-400 rounded-md lg:w-auto hover:bg-deep-purple-accent-100 focus:outline-none focus:bg-amber-500">Stikers</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            

            <div className='bg-cyan-50'>
                <div className="max-w-2xl mx-auto  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">


                    {/* <Feature data={producstFrontpage} /> */}¨
                    {categories && categories !== null && categories !== undefined && <Test categories={categories} />}

                </div>
            </div>










        </Layaut>
    );
};

const mapStateToProps = state => ({
    categories: state.Product.categories

})

export default connect(mapStateToProps, {
    get_products_frontpage
})(Home)

