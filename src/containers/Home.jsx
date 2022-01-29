import Layaut from '../layout/Layout'
import { useEffect, useState } from "react";
import { get_products_frontpage } from "../redux/actions/product"
import { connect } from "react-redux"
import { Link, Navigate } from 'react-router-dom';
import Related from '../components/homepage/Related'
import Categories from '../components/homepage/Categories'

import {
    get_categories,
} from '../redux/actions/categories'

import herobanner from "../img/banner/hero2.jpeg"


import {
    get_search_products
} from '../redux/actions/product'

import SearchLarge from '../components/homepage/SearchLarge';

const Home = ({
    get_products_frontpage,
    related, categories,
    get_search_products
}) => {


    useEffect(() => {
        window.scrollTo(0, 0);
        get_products_frontpage();
    }, []);
    const [render, setRender] = useState(false);

    const [formData, setFormData] = useState({
        category_id: 0,
        search: ''
    });

    const { category_id, search } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        get_search_products(search, category_id);
        setRender(!render);
    }
    if(render){

        return <Navigate to='/search' />
      }

    return (

        <Layaut >
            {/* Hero page banner */}
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

            {/* Categorias */}
            <section className="text-gray-600 body-font bg-slate-50">

                <div className="max-w-2xl mx-auto  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-extrabold title-font mb-2  text-gray-900">🚨 CATEGORIAS 🚨</h1>
                            <div className="h-1 w-20 bg-deep-purple-400 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                        {categories && categories !== null && categories !== undefined && <Categories categories={categories} />}

                    </div>
                </div>
            </section>

            {/* Productos relevantes */}
            <div className='bg-cyan-50'>
                <div className="max-w-2xl mx-auto py-4  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    {related && related !== null && related !== undefined && <Related related={related} />}
                </div>
            </div>

            {/* Search */}
            <div className=" bg-slate-50">
                <div className=" max-w-2xl mx-auto  px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
                <SearchLarge categories={categories} onChange={onChange} onSubmit={onSubmit} search={search} />
                </div>

                
            </div>









        </Layaut>
    );
};

const mapStateToProps = state => ({
    related: state.Product.categories,
    categories: state.Categories.categories,

})

export default connect(mapStateToProps, {
    get_products_frontpage,
    get_categories,
    get_search_products

})(Home)

