import Layout from '../layout/Layout'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { FilterIcon, MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { get_categories } from '../redux/actions/categories'
import { get_colors } from '../redux/actions/colors'
import { get_products, get_filtered_products } from '../redux/actions/product'
import ProductCard from '../components/product/ProductCart'
import { prices } from '../helpers/fixedPrices'

import bg from '../img/banner/hero.jpg'


import FilterMovil from '../components/shop/FiltersMovil'
import Filter from '../components/shop/Filters'


const Shop = ({
  get_categories,
  categories,
  get_products,
  products,
  get_filtered_products,
  filtered_products,
  get_colors,
  colors
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filtered, setFiltered] = useState(false)
  const [formData, setFormData] = useState({
    category_id: '0',
    color_id: '0',
    price_range: 'Any',
    sortBy: 'created',
    order: 'desc'
  })

  const {
    category_id,
    price_range,
    sortBy,
    order,
    color_id
  } = formData

  useEffect(() => {
    get_categories()
    get_colors()

    get_products()
    window.scrollTo(0, 0)
  }, [])

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    get_filtered_products(color_id, category_id, price_range, sortBy, order)
    setFiltered(true)
  }

  const showProducts = () => {
    let results = []
    let display = []

    if (
      filtered_products &&
      filtered_products !== null &&
      filtered_products !== undefined &&
      filtered
    ) {
      filtered_products.map((product, index) => {
        return display.push(
          <div key={index}>
            <ProductCard product={product} />
          </div>
        );
      });
    } else if (
      !filtered &&
      products &&
      products !== null &&
      products !== undefined
    ) {
      products.map((product, index) => {
        return display.push(
          <div key={index}>
            <ProductCard product={product} />
          </div>
        );
      });
    }

    for (let i = 0; i < display.length; i += 3) {
      results.push(
        <div key={i} className='grid md:grid-cols-3 '>
          {display[i] ? display[i] : <div className=''></div>}
          {display[i + 1] ? display[i + 1] : <div className=''></div>}
          {display[i + 2] ? display[i + 2] : <div className=''></div>}
        </div>
      )
    }

    return results

  }



  return (
    <Layout>
      <div className="bg-slate-50" >
        <div>
          {/* Mobile filter dialog */}

          <FilterMovil color_id={color_id} price_range={price_range} mobileFiltersOpen={mobileFiltersOpen} sortBy={sortBy} order={order} setMobileFiltersOpen={setMobileFiltersOpen} Fragment={Fragment} onSubmit={onSubmit} onChange={onChange} categories={categories} prices={prices} colors={colors} />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-white"> 🌹 Catálogo 💀 </h1>

              <div className="flex items-center">
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FilterIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* Filters */}
                
                <Filter color_id={color_id} price_range={price_range} sortBy={sortBy} order={order} onSubmit={onSubmit} onChange={onChange} categories={categories} prices={prices} colors={colors} />

                {/* Product grid */}
                <div className="lg:col-span-3">
                  {/* Replace with your content */}

                  {products && showProducts()}

                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  categories: state.Categories.categories,
  colors: state.Colors.colors,
  products: state.Product.products,
  filtered_products: state.Product.filtered_products
})

export default connect(mapStateToProps, {
  get_categories,
  get_colors,
  get_products,
  get_filtered_products
})(Shop)