import moment from 'moment'
import { Link } from 'react-router-dom'
const OrderList = ({
    orders

}) => {
    const statusOrder = status => {
        return (
            <>
                {
                    status === 'not_processed' ?
                        <span
                            className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight ">
                            <span aria-hidden
                                className="absolute inset-0 bg-yellow-300 opacity-50 rounded-md "></span>
                            <span className="relative">Pendiente</span>
                        </span> :
                        status === 'processed' ?
                            <span
                                className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
                                <span aria-hidden
                                    className="absolute inset-0 bg-blue-300 opacity-50 rounded-md"></span>
                                <span className="relative">En proceso</span>
                            </span> :
                            status === 'shipped' ?
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-orange-accent-400 opacity-50 rounded-md"></span>
                                    <span className="relative">Enviado</span>
                                </span> :
                                status === 'delivered' ?
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-300 opacity-50rounded-md"></span>
                                        <span className="relative">Entregado</span>
                                    </span> : <span
                                        className="relative inline-block px-3 py-1 font-semibold text-gray-800 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-red-300 opacity-50 rounded-md"></span>
                                        <span className="relative">Cancelado</span>
                                    </span>
                }
            </>
        )
    }

    return (
        <>
            {
                orders !== null && orders.length !== 0 && orders !== undefined && orders.map((order, index) => {
                    return (

                        <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link to={`/profile/${order.transaction_id}`} className="text-gray-900 whitespace-no-wrap hover:text-green-400">{order.transaction_id}</Link>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <time className="text-gray-900 whitespace-no-wrap" dateTime="2021-03-22">{moment(order.date_issued).format('ll')}</time>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    ${order.shipping_price}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    ${order.amount}
                                </p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {statusOrder(order.status)}
                            </td>
                        </tr>
                    )

                })

            }
        </>
    )

}
export default OrderList