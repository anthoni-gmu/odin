import Layaut from '../../layout/Layout'

import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { useParams } from 'react-router'

import { get_categories } from '../../redux/actions/categories'
import { get_product } from "../../redux/actions/product"
import {
    get_items,
    add_item,
    get_total,
    get_item_total,
} from "../../redux/actions/cart";

import {
    add_wishlist_item,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item
} from '../../redux/actions/wishlist';

import Detailproduct from '../../components/product/Detailproduct'
import ListProducts from '../../components/product/ListProduct';
import ModalCart from '../../components/cart/ModalCart';
import { setAlert } from '../../redux/actions/alert';
import Alert from '../../components/Alert';
import { Navigate } from "react-router";



const ProductDetail = ({
    items,
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
    totalItems,
    setAlert,
    isAuthenticated,
    wishlist,

    add_wishlist_item,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item
}) => {

    //modal
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    //loader
    const [loading, setLoading] = useState(false);

    // get id product
    const params = useParams()
    const productId = params.productId
    let catProduct = {}

    useEffect(() => {
        window.scrollTo(0, 0);
        get_product(productId)

        get_categories()
        get_wishlist_items()
        get_wishlist_item_total()

    }, [productId]);


    const addToCart = async () => {
        if (product && product !== null && product !== undefined && product.quantity > 0) {


            setLoading(true)

            const MoreThatOne = items.find(element => element.product.id === product.id);
            await add_item(product);


            await get_items();
            await get_total();
            await get_item_total();
            setLoading(false)

            MoreThatOne === undefined ?
                openModal() :
                product.quantity !== 1 ?
                    MoreThatOne.count - product.quantity === 0 ?
                        setAlert('No hay stock', 'red') :
                        setAlert('Producto actualizado', 'green') :
                    MoreThatOne.count - product.quantity !== 0 ?
                        setAlert('Producto actualizado', 'green') :
                        setAlert('No hay stock', 'red')
        }


    }


    const addToWishlist = async () => {
        if (isAuthenticated) {
            let isPresent = false;
            if (
                wishlist &&
                wishlist !== null &&
                wishlist !== undefined &&
                product &&
                product !== null &&
                product !== undefined
            ) {
                wishlist.map(item => {
                    if (item.product.id.toString() === product.id.toString()) {
                        console.log(item.product.id.toString(), product.id.toString())
                        isPresent = true;
                    }
                });
            }

            if (isPresent) {
                await remove_wishlist_item(product.id);
                await get_wishlist_items();
                await get_wishlist_item_total();
                setAlert('Se elimino el producto de la lista de deseos', 'green')
            } else {
                await remove_wishlist_item(product.id);
                await add_wishlist_item(product.id);
                await get_wishlist_items();
                await get_wishlist_item_total();
                await get_items();
                await get_total();
                await get_item_total();
                setAlert('Se agrego el producto a la lista de deseos', 'green')

            }

        } else {
            return <Navigate to="/cart" />
        }
    };



    if (product !== null && product !== undefined) {
        let id = product.category

        Object.entries(categories).forEach(([key, value]) => {
            if (id === value.id) {
                catProduct = value
            }
        });

    }

    const showProduct = () => {

        return (
            <Detailproduct
                wishlist={wishlist}
                addToWishlist={addToWishlist}
                loading={loading}
                addToCart={addToCart}
                catProduct={catProduct}
                product={product}
                colors={products_colors} />
        )
    }

    const showRelatedProducts = () => {
        return (
            <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos Relacionados</h2>

                <ListProducts data={related_products} />

            </div>

        )

    }

    return (
        <Layaut>
            {product && products_colors !== undefined && showProduct()}

            {related_products && showRelatedProducts()}

            {product && amount && totalItems && <ModalCart
                closeModal={closeModal}
                isOpen={isOpen}
                product={product}
                amount={amount}
                totalItems={totalItems}
            />}
            <Alert />


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
    totalItems: state.Cart.total_items,
    items: state.Cart.items,
    wishlist: state.Wishlist.items
})

export default connect(mapStateToProps, {
    get_product,
    get_categories,
    get_items,
    add_item,
    get_total,
    get_item_total,
    setAlert,
    add_wishlist_item,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item
})(ProductDetail)