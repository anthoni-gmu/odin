import { Link } from "react-router-dom"
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'
import { useState } from "react";
import { connect } from "react-redux"

import {
    get_items,
    add_item,
    get_total,
    get_item_total,
} from "../../redux/actions/cart";

import ModalCart from '../../components/cart/ModalCart';
import { Oval } from "react-loader-spinner";


const ProductCard = ({ product, amount, totalItems, add_item, get_items,
    get_total,
    get_item_total

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


            try {
                let av = await add_item(product);
                await get_items();
                await get_total();
                await get_item_total();
               console.log(av)

        
            } catch (err) {
            }

           
            setLoading(false)
            openModal()
            console.log(product)
        }
    }

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

                        <button className=" rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <HeartIcon className='w-6 h-6' />
                        </button>

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

    amount: state.Cart.amount,
    totalItems: state.Cart.total_items
})

export default connect(mapStateToProps, {

    get_items,
    add_item,
    get_total,
    get_item_total
})(ProductCard)