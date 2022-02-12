import LayaoutDashboard from '../../layout/LayaoutDashboard'

import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { useParams } from 'react-router'
import { get_order_detail } from '../../redux/actions/order';
import StateOrder from '../../components/account/StateOrder';
import OrdenInformation from '../../components/order/OrdenInformation';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

import { CalendarIcon } from "@heroicons/react/outline"


const OrdenDetail = ({

    isAuthenticated,
    user,
    order,
    get_order_detail

}) => {

    const navigate = useNavigate();

    const params = useParams()
    const transactionId = params.transactionId

    useEffect(() => {
        window.scrollTo(0, 0);
        get_order_detail(transactionId)

       
    }, [transactionId]);

    if (!order) {
        navigate('/profile/search')
    }


    return (
        <LayaoutDashboard>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    {
                        order !== null &&
                        <div className="px-2 py-1  text-base rounded text-white flex space-x-3 items-center bg-indigo-600 font-medium">
                            <CalendarIcon className='w-5 h-5' />
                            <span> Fecha Emitida: {moment(order.date_issued).format('ll')}</span>

                        </div>
                    }



                    <div className="flex flex-wrap w-full">

                        {order !== null && <StateOrder status={order.status} />}


                        <div className="py-8 lg:w-3/5 md:w-1/2  ">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                {
                                    order !== null && <OrdenInformation amount={order.amount}
                                        full_name={order.full_name}
                                        address_line_1={order.address_line_1}
                                        shipping_name={order.shipping_name}
                                        transaction_id={order.transaction_id}

                                    />
                                }


                                <table className="min-w-full mt-5 leading-normal  border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                Producto
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                Cantidad
                                            </th>
                                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                                precio
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order !== null && order.order_items.map((order, index) => {
                                                return (
                                                    <tr key={index} >
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0">
                                                                    <a href="#" className="block relative">
                                                                        <img alt="profil" src={order.photo} className="mx-auto object-cover rounded-full h-32 w-32 " />
                                                                    </a>
                                                                </div>
                                                                <div className="ml-3">
                                                                    <p className="text-gray-900 text-lg whitespace-no-wrap">
                                                                        {order.name}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {order.count}
                                                            </p>
                                                        </td>
                                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                ${order.price}
                                                            </p>
                                                        </td>

                                                    </tr>
                                                )

                                            })

                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </LayaoutDashboard>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,

    order: state.Orders.order

})

export default connect(mapStateToProps, {
    get_order_detail,
})(OrdenDetail)