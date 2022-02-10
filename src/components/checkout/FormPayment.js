import { countries } from '../../helpers/fixdCountries';
import DropIn from 'braintree-web-drop-in-react';
import { Oval } from 'react-loader-spinner';

const FormPayment = ({
    onChange,
    full_name,
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    postal_zip_code,
    country_region,
    telephone_number,

    clientToken,
    data,
    renderPaymentInfo,
    isAuthenticated,
    loading
}) => {
    return (
        <div className="leading-loose">
            <div className="max-w-xl m-4 ">
                <p className="text-gray-800 font-medium">Informacion de Pago</p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="full_name">Nombre completo</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Nombre y apellidos"
                        aria-label="full_name"
                        onChange={e => onChange(e)}
                        value={full_name}
                        name='full_name'
                    />
                </div>

                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="address_line_1">Dirección</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Dirección 1"
                        onChange={e => onChange(e)}
                        value={address_line_1}
                        name='address_line_1'
                        aria-label="address_line_1"

                    />
                </div>
                <div className="mt-2">
                    <label className="hidden text-sm block text-gray-600" htmlFor="address_line_2">Linea 2</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Dirección 2"
                        onChange={e => onChange(e)}
                        value={address_line_2}
                        name='address_line_2'
                    />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label className="hidden block text-sm text-gray-600" htmlFor="city">Ciudad</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Ciudad"
                        onChange={e => onChange(e)}
                        value={city}
                        name='city'
                    />
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" htmlFor="state_province_region">Provincia</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Provincia"
                        onChange={e => onChange(e)}
                        value={state_province_region}
                        name='state_province_region'
                    />
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label className="hidden block text-sm text-gray-600" htmlFor="country_region">Country</label>
                    <select
                        className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        name='country_region'
                        onChange={e => onChange(e)}
                    >
                        <option value={country_region}>xd
                        </option>
                        {
                            countries && countries.map((country, index) => (
                                <option key={index} value={country.name}>{country.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" htmlFor="postal_zip_code">Código Postal</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Código Postal"
                        onChange={e => onChange(e)}
                        value={postal_zip_code}
                        name='postal_zip_code'
                    />
                </div>
                <div className="mt-2">
                    <label className=" text-sm block text-gray-600" htmlFor="telephone_number">Número de Teléfono</label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-100 rounded focus:outline-indigo-400 focus:border-indigo-500 transition-colors"
                        type="text"
                        required
                        placeholder="Número de Teléfono"
                        onChange={e => onChange(e)}
                        value={telephone_number}
                        name='telephone_number'
                    />
                </div>
                {
                    isAuthenticated && clientToken !== null && clientToken !== undefined && clientToken && <> <DropIn
                        options={{
                            authorization: clientToken,
                            paypal: {
                                flow: 'vault'
                            }
                        }}
                        onInstance={instance => (data.instance = instance)}
                        asd
                    />
                    <div className="mt-6">
              {loading?<button
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                <Oval
                  type='Oval'
                  color='#fff'
                  height={20}
                  widht={20}
                />
              </button>:
              <button
              type="submit"
              className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Place Order
            </button>}
            </div></>
                    
                }


                {/* <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name" />
                </div>
                <div className="mt-4">
                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
                </div> */}
            </div>
        </div>
    )
}

export default FormPayment