import { connect } from 'react-redux'
import LayaoutDashboard from '../../layout/LayaoutDashboard'
import WishlistProduct from '../../components/wishlist/WishlistProduct'

import { get_wishlist_items, get_wishlist_item_total } from '../../redux/actions/wishlist'
import { useEffect, useState } from 'react'

const Wishlist = ({
    get_wishlist_items,
    get_wishlist_item_total,
    user,
    isAuthenticated,
    wishlist
}) => {


    //separar por grups
    // const groupBy = require('array.prototype.groupby')
    // groupBy.shim()
    // const grup = items && items.groupBy(n => {
    //     return n.product.category === 1 ? 'polos' : n.product.category === 2 ? 'shorts' : n.product.category === 3 ? 'gorras' : n.product.category === 4 ? 'sudaderas' : 'rest'
    // })

    useEffect(() => {
        get_wishlist_items()
        get_wishlist_item_total()
    }, []);



    const showWishlist = () => {
        let display = []

        wishlist.map((item, index) => {
            return display.push(
                <div key={index}>
                    <WishlistProduct product={item.product} />
                </div>
            )
        })

        return display
    }



    return (
        <LayaoutDashboard>



            <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Lista de deseos</h3>
                        <p className="max-w-2xl dark:text-coolGray-400">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

                        {wishlist !== null && wishlist !== [] && wishlist !== undefined ? showWishlist() : <>Vacio</>}


                    </div>
                </div>
            </section>







        </LayaoutDashboard>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    wishlist: state.Wishlist.items,

})

export default connect(mapStateToProps, {
    get_wishlist_items,
    get_wishlist_item_total
})(Wishlist)