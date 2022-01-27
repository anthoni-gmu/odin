import { useState, Fragment } from 'react'
import { Tab, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useTimeoutFn } from 'react-use'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Homepage({
  categories
}) {


  return (

    <div className="">





      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Categorias
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="18302e52-9e2a-4c8e-9550-0cbb21b38e55" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
            </svg>
            <span className="relative">👁 FLOW GANG TW$ 💸</span>
          </span>

        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          ¡YA EN LA CALLE!
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="flex ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-deep-purple-500 ',

                  selected
                    ? ' border-b-2 border-deep-purple-500'
                    : 'text-black '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none focus:ring-2 ring-offset-2  '
              )}
            >
              <ul className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {posts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.photo}
                        alt=""
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.title}
                          </Link>
                        </h3>

                      </div>
                      <p className="text-sm font-medium text-gray-900">${product.price}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
