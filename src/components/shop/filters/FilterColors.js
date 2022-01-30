
import { Disclosure } from "@headlessui/react"
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
const FilterColors = ({
  colors,
  onChange,
  color_id
}) => {
  const select = "text-black font-semibold"
  const noselect = "text-gray-900"
  return (
    <Disclosure as="div" className="border-t-2 border-dashed border-slate-600 px-4 py-6">
      {({ open }) => (
        <>
          <h3 className="-mx-2 -my-3 flow-root">
            <Disclosure.Button className="px-2 py-3 rounded-lg bg-slate-200 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
              <span className="font-sofiapro-regular text-gray-900 font-semibold">Colores</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5 text-black" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-2">


             



              <div className="lg:col-span-3">
                <div className=' flex items-center h-5 my-5'>
                  <input
                    name='color_id'
                    onChange={e => onChange(e)}
                    value={0}
                    type='radio'
                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                  />
                  <label className={`ml-3 min-w-0 flex-1  font-sofiapro-light ${color_id === "0" ? select : noselect} `}>
                    Todos
                  </label>
                </div>

                <div className='grid md:grid-cols-2  '>
                  {
                    colors &&
                    colors !== null &&
                    colors !== undefined &&
                    colors.map(color => {
                      return (
                        <div key={color.id} className=''>

                          <input
                            name='color_id'
                            onChange={e => onChange(e)}
                            value={color.id.toString()}
                            type='radio'
                            className='focus:ring-blue-500  h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                          />
                          <label className={`ml-3 min-w-0 flex-1  font-sofiapro-light ${color_id === color.id.toString() ? select : noselect} `}>
                            {color.name}
                          </label>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </Disclosure.Panel>
          </h3>
        </>
      )}
    </Disclosure>
  )
}

export default FilterColors