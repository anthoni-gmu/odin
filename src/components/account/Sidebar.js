import { Link, Navigate } from "react-router-dom"
import {
    ShoppingBagIcon,
    ArrowCircleLeftIcon,
    LogoutIcon,
    CogIcon,
    CurrencyDollarIcon,
    ClipboardIcon,
    HeartIcon,
    SparklesIcon,
    FireIcon
} from '@heroicons/react/solid'
import { useState } from 'react'

import { logout } from '../../redux/actions/auth'
import { connect } from "react-redux"

const Sidebar = ({
    logout
}) => {

    const noSelect = ' flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-200'
    const noSelectIcon = 'h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200 '

    const select = 'flex items-center text-sm font-semibold bg-indigo-400  rounded-md text-gray-100 p-2 '
    const selectIcon = 'h-6 w-6 mr-4 text-white'
    const [redirect, setRedirect] = useState(false);


    const logoutHandler = () => {
        logout();
        setRedirect(true);
    };
    if (redirect) {
        return <Navigate to='/' />;
    }


    return (
        <div className="py-12 px-10 ">
            <div className="flex space-2 items-center border-b-2 pb-4">
                <div>

                    <ShoppingBagIcon className="h-14 w-14 text-indigo-600" />
                </div>
                <div className="ml-3">
                    <h1 className="text-3xl font-bold text-indigo-600">TWS</h1>
                    <p className="text-center text-sm text-indigo-600 mt-1 font-serif">CLOTHING</p>
                </div>
            </div>
            <Link to="../shop" className="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">
                <div>
                    <ArrowCircleLeftIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                    <p className="text-lg text-white font-semibold">Regresar</p>
                </div>
            </Link>
            <div className="mt-8">
                <ul className="space-y-10">
                    <li>
                        <Link to={'/'} className="flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-200">
                            <FireIcon className="h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200" />
                            Mis Compras</Link>
                    </li>
                    <li>
                        <Link to={'../profile/wishlist'} className={window.location.pathname === '/profile/wishlist' ? select : noSelect} >
                            <HeartIcon className={window.location.pathname === '/profile/wishlist' ? selectIcon : noSelectIcon} />
                            Lista de Deseos</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-200 " >
                            <ClipboardIcon className="h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200" />
                            Estado de Pedido</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-200 " >
                            <SparklesIcon className="h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200" />

                            Suscripción</Link>
                    </li>
                    <li>
                        <Link to={'/'} className="flex items-centerx text-sm font-semibold text-gray-900 hover:text-indigo-600 transition duration-200">
                            <CurrencyDollarIcon className="h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200" />
                            Método de Pago</Link>
                    </li>
                    <li>
                        <Link to={'../profile/info'} className={window.location.pathname === '/profile/info' ? select : noSelect} >
                            <CogIcon className={window.location.pathname === '/profile/info' ? selectIcon : noSelectIcon} />
                            Información</Link>
                    </li>
                </ul>
            </div>
            <button onClick={logoutHandler} className="flex mt-20 space-x-4 items-center  ">
                <div className="flex space-x-3 font-semibold text-gray-900 transition duration-200 hover:text-red-600">
                    <LogoutIcon className="h-6 w-6 hover:text-red-600 text-gray-700 transition duration-200" />
                    <span className="hover:text-red-600">Salir</span>
                </div>
            </button>
        </div>
    )
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {
    logout
})(Sidebar)