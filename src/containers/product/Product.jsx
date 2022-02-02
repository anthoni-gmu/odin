import Layaut from '../../layout/Layout'
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import { get_product } from "../../redux/actions/product"

import { connect } from "react-redux"
import { useParams } from 'react-router'

import Detailproduct from '../../components/product/Detailproduct'

import ListProducts from '../../components/product/ListProduct';

import { get_categories } from '../../redux/actions/categories'

import ProductCard from '../../components/product/ProductCart';
import { useState } from "react";
import { Navigate } from "react-router";

import ModalCart from '../../components/cart/ModalCart';

import {
    get_items,
    add_item,
    get_total,
    get_item_total
} from "../../redux/actions/cart";

const ProductDetail = ({
    get_product,
    product,
    related_products,
    products_colors,
    get_categories,
    categories,
    get_items,
    add_item,
    get_total,
    get_item_total,
    amount,
    totalItems
}) => {

    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const params = useParams()
    const productId = params.productId
    var catProduct = {}


    useEffect(() => {
        window.scrollTo(0, 0)
        get_product(productId)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
        get_categories()
        get_product(productId);
    }, [productId]);

    const addToCart = async () => {
        if (product && product !== null && product !== undefined && product.quantity > 0) {
            setLoading(true)
            await add_item(product);
            await get_items();
            await get_total();
            await get_item_total();
            setLoading(false)
            openModal()


        }
    }



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
            <Detailproduct addToCart={addToCart} catProduct={catProduct} product={product} colors={products_colors} />
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



    return (
        <Layaut>
            {product && products_colors !== undefined && showProduct()}

            {related_products && showRelatedProducts()}
            {product && amount && totalItems && <ModalCart closeModal={closeModal} isOpen={isOpen} product={product} amount={amount}
                totalItems={totalItems} />}


        </Layaut>
    );
};



const mapStateToProps = state => ({
    product: state.Product.product,
    related_products: state.Product.related_products,
    products_colors: state.Product.products_colors,
    categories: state.Categories.categories,
    isAuthenticated: state.Auth.isAuthenticated,
    amount: state.Cart.amount,
    totalItems: state.Cart.total_items


})


export default connect(mapStateToProps, {
    get_product,
    get_categories,
    get_items,
    add_item,
    get_total,
    get_item_total
})(ProductDetail)

