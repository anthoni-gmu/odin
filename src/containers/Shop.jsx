import Layout from '../layout/Layout'
import { Fragment, useState, useEffect } from 'react'
import { FilterIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { connect } from 'react-redux'
import { get_categories } from '../redux/actions/categories'
import { get_colors } from '../redux/actions/colors'
import { get_products, get_filtered_products, get_pages_products, get_pages_filters } from '../redux/actions/product'
import ProductCard from '../components/product/ProductCart'
import { prices } from '../helpers/fixedPrices'
import FilterMovil from '../components/shop/FiltersMovil'
import Filter from '../components/shop/Filters'


const Shop = ({
  get_categories,
  categories,
  get_products,
  products,
  get_filtered_products,
  get_colors,
  colors,
  get_pages_products,
  previous,
  next,
  count,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);


  const navigationOn = 'bg-white rounded-md  hover:bg-blue-500  hover:text-white px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform'
  const navigationOff = 'bg-gray-200 cursor-not-allowed px-4 py-2 mx-1 text-gray-500 capitalize  rounded-md '

  const nextPage = async () => {

    await get_pages_products(next, search, color_id, category_id, price_range, sortBy, order)
  }
  const previousPage = async () => {
    await get_pages_products(previous, search, color_id, category_id, price_range, sortBy, order)

  }


  const [formData, setFormData] = useState({
    category_id: '0',
    color_id: '0',
    price_range: 'Any',
    sortBy: 'created',
    order: 'desc',
    search: ''
  });


  const {
    category_id,
    price_range,
    sortBy,
    order,
    color_id,
    search
  } = formData

  useEffect(() => {
    get_categories()
    products !== null ? console.log("true") : get_products()
    get_colors()
    window.scrollTo(0, 0)
  }, [])



  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })



  const onSubmit = e => {
    e.preventDefault()
    get_filtered_products(search, color_id, category_id, price_range, sortBy, order)
  }



  const showNotProduct = () => {
    return (



      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">Not Products</span>
          <p className="text-sm text-gray-600 dark:text-gray-200">Your account was registered!</p>
        </div>
      </div>
    )
  }

  const showProducts = () => {
    let results = []
    let display = []

    if (
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

      for (let i = 0; i < display.length; i += 3) {
        results.push(
          <div key={i} className='grid md:grid-cols-3 '>
            {display[i] ? display[i] : <div className=''></div>}
            {display[i + 1] ? display[i + 1] : <div className=''></div>}
            {display[i + 2] ? display[i + 2] : <div className=''></div>}
          </div>
        )
      }
    }





    return results

  }



  return (
    <Layout>
      <div className="bg-slate-50" style={{ backgroundImage: `url("https://storage.googleapis.com/subtlepatterns-production/designers/subtlepatterns/uploads/fabric_1.png")` }} >
        <div>
          {/* Mobile filter dialog */}

          <FilterMovil search={search} color_id={color_id} price_range={price_range} mobileFiltersOpen={mobileFiltersOpen} sortBy={sortBy} order={order} setMobileFiltersOpen={setMobileFiltersOpen} Fragment={Fragment} onSubmit={onSubmit} onChange={onChange} categories={categories} prices={prices} colors={colors} />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900"> 🌹 Catálogo 💀 </h1>

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

                <Filter search={search} color_id={color_id} price_range={price_range} sortBy={sortBy} order={order} onSubmit={onSubmit} onChange={onChange} categories={categories} prices={prices} colors={colors} />

                {/* Product grid */}
                <div className="lg:col-span-3">
                  {/* Replace with your content */}

                  {products !== null ? showProducts() : showNotProduct()}






                  <div className="flex">
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

  count: state.Product.count,
  next: state.Product.next,
  previous: state.Product.previous

})

export default connect(mapStateToProps, {
  get_categories,
  get_colors,
  get_products,
  get_filtered_products,
  get_pages_products,
})(Shop)