import Layaut from '../../layout/Layout'
import { useEffect } from "react";
import { Link } from "react-router-dom"

import { get_product } from "../../redux/actions/product"
import { connect } from "react-redux"
import { useParams } from 'react-router'

import Detailproduct from '../../components/product/Detailproduct'

import ListProducts from '../../components/product/ListProduct';


import ProductCard from '../../components/product/ProductCart';
import { useState } from "react";

const ProductDetail = ({
    get_product,
    product,
    related_products,
    products_colors,
}) => {



    const params = useParams()
    const productId = params.productId


    useEffect(() => {

        window.scrollTo(0, 0);
        console.log(productId)

        get_product(productId);

    }, [productId]);



    const showProduct = () => {
        return (
            <Detailproduct product={product} />
        )
    }

    const showRelatedProducts = () => {
        return (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos Relacionados</h2>

                <ListProducts data={related_products} />
            </div>

        )
        
    }
    const showColorProduct = () => {
        return (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Colores</h2>

                <ListProducts data={products_colors} />
            </div>
        )
    }


    return (
        <Layaut>
            {product && showProduct()}
            {related_products && showRelatedProducts()}
            {products_colors && showColorProduct()}

        </Layaut>
    );
};



const mapStateToProps = state => ({
    product: state.Product.product,
    related_products: state.Product.related_products,
    products_colors: state.Product.products_colors,

})


export default connect(mapStateToProps, {
    get_product
})(ProductDetail)

