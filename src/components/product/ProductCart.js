import { Link, Navigate } from "react-router-dom"
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'
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



const ProductCard = ({
    product,
    amount,
    totalItems,
    add_item,
    get_items,
    get_total,
    get_item_total,
    items,
    setAlert,


    add_wishlist_item,
    get_wishlist_items,
    get_wishlist_item_total,
    remove_wishlist_item,
    isAuthenticated,
    wishlist

}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        get_wishlist_items()
        get_wishlist_item_total()

    }, []);


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


    return (
        <div key={product.id} className="group relative m-2">

            <div className="shadow-lg rounded-2xl  bg-white w-auto m-auto p-1">
                <Link to={`/product/${product.id}`}>
                    <img alt="" src={product.photo_url} />
                </Link>
                <div className="bg-blue-gray-400 m-3 p-4 rounded-lg">
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

                    </div>
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
                                addToWishlist={addToWishlist}
                            />

                    </div>
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
    wishlist: state.Wishlist.items


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
})(ProductCard)