import Layaut from '../../layout/Layout'
import { useEffect } from "react";
import { Link } from "react-router-dom"

import { get_product } from "../../redux/actions/product"

import { connect } from "react-redux"
import { useParams } from 'react-router'

import Detailproduct from '../../components/product/Detailproduct'

import ListProducts from '../../components/product/ListProduct';

import { get_categories } from '../../redux/actions/categories'

import ProductCard from '../../components/product/ProductCart';
import { useState } from "react";

const ProductDetail = ({
    get_product,
    product,
    related_products,
    products_colors,
    get_categories,
    categories
}) => {



    const params = useParams()
    const productId = params.productId
    var catProduct = {}

    useEffect(() => {
        window.scrollTo(0, 0);
        get_categories()
        get_product(productId);
    }, [productId]);



    if (product !== null && product !== undefined) {
        var id = product.category

        Object.entries(categories).forEach(([key, value]) => {
            if (id === value.id) {
                catProduct = value
            }
        });

    }


    const showProduct = () => {

        return (
            <Detailproduct catProduct={catProduct} product={product} colors={products_colors} />
        )
    }

    const showRelatedProducts = () => {
        return (
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos Relacionados</h2>

                <ListProducts data={related_products}  />
                
            </div>

        )

    }
  


    return (
        <Layaut>
            {product && products_colors !==undefined && showProduct()}

            {related_products && showRelatedProducts()}

        </Layaut>
    );
};



const mapStateToProps = state => ({
    product: state.Product.product,
    related_products: state.Product.related_products,
    products_colors: state.Product.products_colors,
    categories: state.Categories.categories,

})


export default connect(mapStateToProps, {
    get_product,
    get_categories
})(ProductDetail)

