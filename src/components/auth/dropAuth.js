import { Menu, Transition, Popover } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BellIcon, ShoppingCartIcon, ChevronDownIcon  } from '@heroicons/react/solid'
import { connect } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout } from '../../redux/actions/auth'

import DropCartProduct from '../cart/DropCartProduct'


import {
  remove_item, get_items,
  get_total,
  get_item_total
} from "../../redux/actions/cart";


const usertest = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}




const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Dropauth = ({
  amount,
  logout,
  totalItems,
  items,
  remove_item,
  get_items,
  get_total,
  get_item_total

}) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    get_items()
    get_total()
    get_item_total()
  }, [render])

  const [redirect, setRedirect] = useState(false);
  const logoutHandler = () => {
    logout();
    setRedirect(true);
  };
  if (redirect) {
    window.location.reload(false)
    return <Navigate to='/' />;
  }


  return (
    <div className="hidden md:block">
      <div className="ml-4 flex items-center md:ml-6">

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-indigo-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                <div className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-slate-400 rounded-full text-white text-xs">{totalItems}</div>
                <ChevronDownIcon
                  className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-indigo-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className=" absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative  bg-white p-7">
                      {

                        items !== null && items.length !== 0 && items ? items.map((item) => (
                          <div key={item.id} className="flex flex-col  sm:flex-row sm:justify-between">
                            <DropCartProduct setRender={setRender} render={render} item={item} remove_item={remove_item} />
                          </div>


                        )) :

                          <div className="w-full h-full text-center">
                            <div className="flex h-full flex-col justify-between">
                            
                            <ShoppingCartIcon className="mt-4 w-16 h-w-16 m-auto text-gray-600" aria-hidden="true" />


                              <p className="text-gray-900 text-lg font-medium mt-4">
                                ¡No hay productos en el carrito!
                              </p>

                            </div>
                          </div>
                      }

                    </div>
                    {
                      items !== null && items.length !== 0 && items ?
                        <div className="p-4 bg-gray-50 w-full ">
                          <div className="flex flex-wrap border-b-2 my-2">
                            <h1 className="flex-auto text-base font-semibold ">
                              Total a pagar
                            </h1>
                            <div className="text-xl font-semibold text-gray-500 ">
                              ${amount}
                            </div>

                          </div>

                          <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Realizar Pago
                          </button>
                          <div className='w-full flex justify-center mt-2'>
                            <Link to={'/cart'} className='font-semibold hover:text-blue-700' >Ver carrito</Link>
                          </div>

                        </div> :
                        <div className="p-4 bg-gray-50 w-full ">
                          <Link to={'/shop'} type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Ver Catalogo
                          </Link>


                        </div>
                    }

                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>


        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative z-10">
          <div>
            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src={usertest.imageUrl} alt="" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>

              ))}
              <Menu.Item key="logout">
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 w-full'
                    )}
                  >
                    Salir
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  amount: state.Cart.amount,
  totalItems: state.Cart.total_items,
  items: state.Cart.items

})

export default connect(mapStateToProps, {
  logout, remove_item, get_items,
  get_total,
  get_item_total
})(Dropauth)
