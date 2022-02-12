import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import OrderList from '../../components/account/OrderList'
import LayaoutDashboard from '../../layout/LayaoutDashboard'
import { list_orders } from '../../redux/actions/order'
import { get_pages_orders } from '../../redux/actions/order'

const MyOrders = ({
    list_orders,
    orders,
    isAuthenticated,
    user,

    count,
    next,
    previous,
    get_pages_orders
}) => {

    const navigationOn = 'bg-white rounded-md  hover:bg-indigo-500  hover:text-white px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform'
    const navigationOff = 'bg-gray-200 cursor-not-allowed px-4 py-2 mx-1 text-gray-500 capitalize  rounded-md '

    const nextPage = async () => {
        await get_pages_orders(next)
    }
    const previousPage = async () => {
        await get_pages_orders(previous)

    }

    useEffect(() => {
        list_orders()
    }, [])


    return (
        <LayaoutDashboard>
            <section className="">
                <div className="container p-4 mx-auto space-y-4 sm:px-10">
                    <div className=" flex items-center justify-between ">
                        <div>
                            <h3 className="text-2xl font-bold leading-none sm:text-5xl">Historial de compras</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex bg-gray-50 items-center p-2 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fillRule='evenodd'
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd" />
                                </svg>
                                <input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal  border-t-2 border-indigo-400 rounded-lg bg-opacity-5" >
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Tranaction ID
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Fecha Emitida
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Precio de entrega
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Precio total
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Estado
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders !== null && <OrderList orders={orders} />

                                        }

                                    </tbody>
                                </table>
                                <div className="flex my-2">
                                    <button className={`${previous !== null ? navigationOn : navigationOff}  `} onClick={e => previousPage(e)} disabled={previous !== null ? false : true} >
                                        <div className="flex items-center -mx-1">
                                            <ChevronLeftIcon className="w-6 h-6 mx-1" />
                                            <span className="mx-1">
                                                Anterior
                                            </span>
                                        </div>
                                    </button>


                                    <button onClick={e => nextPage(e)} className={` ${next !== null ? navigationOn : navigationOff}  `} disabled={next !== null ? false : true}>
                                        <div className="flex items-center -mx-1">
                                            <span className="mx-1">
                                                Siguiente
                                            </span>

                                            <ChevronRightIcon className="w-6 h-6 mx-1" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayaoutDashboard>
    )
}

const mapStateToProps = state => ({
    orders: state.Orders.orders,
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,

    count: state.Orders.count,
    next: state.Orders.next,
    previous: state.Orders.previous


})

export default connect(mapStateToProps, {
    list_orders,
    get_pages_orders
})(MyOrders)