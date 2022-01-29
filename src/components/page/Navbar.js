import Alert from '../Alert'
import Dropauth from '../../components/auth/dropAuth'
import Navcar from '../../components/cart/Navcar'
import { connect } from 'react-redux'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import {
  get_categories,
} from '../../redux/actions/categories'
import {
  get_search_products
} from '../../redux/actions/product'
import { SearchIcon } from '@heroicons/react/solid'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
const usertest = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', to: '#', current: true },
  { name: 'Inicio', to: '/', current: true },
  { name: 'Catalogo', to: '/shop', current: false },
  { name: 'Quienes somos?', to: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = ({
  isAuthenticated,
  categories,
  get_search_products,
  get_categories,
  user

}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [render, setRender] = useState(false);
  const [formData, setFormData] = useState({
    category_id: 0,
    search: ''
  });


  const { category_id, search } = formData;

  useEffect(() => {
    get_categories();
  }, [])


  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    get_search_products(search, category_id);
    setRender(!render);
  }


  if (render) {

    return <Navigate to='/search' />
  }




  const welcomeLinks = (
    <ul className=" items-center hidden space-x-8 md:flex">
      <li>
        <Link
          to="/login"
          aria-label="Sign in"
          title="Sign in"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-yellow-accent-700"
        >
          Ingresar
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-gray-700  transition duration-200 rounded shadow-md bg-yellow-accent-400 hover:bg-yellow-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          Registrate
        </Link>
      </li>
    </ul>
  )

  const searchinput = (
    <>
      <form onSubmit={e => onSubmit(e)} className="text-base font-medium text-gray-500 hover:text-gray-900">
        <div>
          <div className="mt-1 flex rounded-md shadow-sm border border-gray-200">

            <div className="mt-1 mx-1 px-2 py-1">
              <select
                onChange={e => onChange(e)}
                name='category_id'
                className='rounded-full'
              >
                <option value={0}>All</option>
                {
                  categories &&
                  categories !== null &&
                  categories !== undefined &&
                  categories.map((category, index) => (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  ))
                }

              </select>
            </div>

            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                type="search"
                name="search"
                onChange={e => onChange(e)}
                value={search}
                required
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-2 sm:text-sm border-gray-300"
                placeholder="Que buscas hoy?"
              />
            </div>

            <button
              type="submit"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />

            </button>

          </div>
        </div>
      </form>
    </>
  )

  return (
    <>
      <Disclosure as="nav" className="bg-teal-50 ">
        {({ open }) => (
          <>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? 'bg-slate-700 text-white'
                              : 'text-slate-800 hover:bg-slate-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}

                    </div>
                  </div>
                </div>

                {
                  isAuthenticated ? <Dropauth /> : welcomeLinks
                }

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={usertest.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{usertest.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{usertest.email}</div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>


      <Alert />
    </>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
  categories: state.Categories.categories,
})

export default connect(mapStateToProps, {
  get_categories,
  get_search_products

})(Navbar)