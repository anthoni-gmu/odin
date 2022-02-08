
import { TrashIcon } from "@heroicons/react/outline"


import { useEffect, useState } from "react";
import { connect } from "react-redux"
import {
    get_items,
    add_item,
    get_total,
    get_item_total,
} from "../../redux/actions/cart";

import ModalCart from '../../components/cart/ModalCart';
import { Oval } from "react-loader-spinner";
import { setAlert } from '../../redux/actions/alert';


import {
    add_wishlist_item,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item
} from '../../redux/actions/wishlist';

import WishlistHeart from '../wishlist/WishlistHeart';
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { Link, Navigate } from "react-router-dom";



const WishlistProduct = ({
    product,
    totalItems,
    amount,
    items,
    wishlist,
    get_items,
    add_item,
    get_total,
    get_item_total,
    isAuthenticated,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item,
    setAlert,
    user
}) => {

    const [loading, setLoading] = useState(false);

   


    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }

    const addToCart = async () => {
        if (product && product !== null && product !== undefined && product.quantity > 0) {
            setLoading(true)


            const MoreThatOne = items.find(element => element.product.id === product.id);

            await add_item(product);
            await get_items();
            await get_total();
            await get_item_total();

            MoreThatOne === undefined ?
                openModal() :
                product.quantity !== 1 ?
                    MoreThatOne.count - product.quantity === 0 ?
                        setAlert('No hay stock', 'red') :
                        setAlert('Producto actualizado', 'green') :
                    MoreThatOne.count - product.quantity !== 0 ?
                        setAlert('Producto actualizado', 'green') :
                        setAlert('No hay stock', 'red')

            setLoading(false)


        }
    }

    const removeWishlist = async () => {
        if (isAuthenticated) {
            console.log("hola")
            await remove_wishlist_item(product.id);
            await get_wishlist_items();
            await get_wishlist_item_total();
            await setAlert('Se elimino el producto de la lista de deseos', 'green')


        } else {
            return <Navigate to="/cart" />
        }
    }

    return (



        <div className="space-y-4">
            <Link to={`/product/${product.id}`}>
                <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-coolGray-500" src={product.photo_url} />
            </Link>
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">{product.title}</h4>
                <p className="text-sm dark:text-coolGray-400">{product.get_category}</p>
                <div className="flex">
                    {loading ? <button
                        className="flex ml-auto text-white bg-slate-700 border-0 w-10 h-10 items-center justify-center focus:outline-none hover:bg-slate-500 rounded-full">
                        <Oval
                            type="Oval"
                            color="#fff"
                            width={20}
                            height={20} />
                    </button> :
                        <button onClick={addToCart} className="flex ml-auto text-white bg-slate-700 border-0 w-10 h-10 items-center justify-center focus:outline-none hover:bg-slate-500 rounded-full">
                            <ShoppingCartIcon className='w-6 h-6' />
                        </button>}


                    <WishlistHeart
                        product={product}
                        wishlist={wishlist}
                        addToWishlist={removeWishlist}
                    />
                </div>

            </div>
            {product && amount && totalItems && <ModalCart
                closeModal={closeModal}
                isOpen={isOpen}
                product={product}
                amount={amount}
                totalItems={totalItems}
            />}
        </div>

    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    items: state.Cart.items,
    amount: state.Cart.amount,
    totalItems: state.Cart.total_items,
    wishlist: state.Wishlist.items,
    user: state.Auth.user,


})

export default connect(mapStateToProps, {
    get_items,
    add_item,
    get_total,
    get_item_total,
    setAlert,
    add_wishlist_item,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item
})(WishlistProduct)