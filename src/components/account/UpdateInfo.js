import { Oval } from "react-loader-spinner";
import { countries } from '../../helpers/fixdCountries';
import { SaveIcon } from "@heroicons/react/solid";

const UpdateInfo = ({
    onSubmit,
    profile,
    user,
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    zipcode,
    phone,
    country_region,
    onChange,
    loading
}) => {
    return (
        <form onSubmit={e => onSubmit(e)} className="py-4">


            <div className="bg-white max-w-screen-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <div className="block relative">
                                <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-16 w-16 " />
                            </div>
                            <h1 className="text-gray-600">
                                {user.get_full_name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Dirección 1
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name='address_line_1'
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    placeholder={`${profile.address_line_1}`}
                                    onChange={e => onChange(e)}
                                    value={address_line_1}
                                />
                            </dd>

                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Dirección 2
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name='address_line_2'
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    placeholder={`${profile.address_line_2}`}
                                    onChange={e => onChange(e)}
                                    value={address_line_2}
                                />
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Ciudad
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <input
                                    type="text"
                                    name='city'
                                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                    placeholder={`${profile.city}`}
                                    onChange={e => onChange(e)}
                                    value={city}
                                />
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Provincia
                            </dt>
                            <input
                                type="text"
                                name='state_province_region'
                                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                placeholder={`${profile.state_province_region}`}
                                onChange={e => onChange(e)}
                                value={state_province_region}
                            />
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Número Postal
                            </dt>
                            <input
                                type="text"
                                name='zipcode'
                                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                placeholder={`${profile.zipcode}`}
                                onChange={e => onChange(e)}
                                value={zipcode}
                            />
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Teléfono
                            </dt>
                            <input
                                type="text"
                                name='phone'
                                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                                placeholder={`${profile.phone}`}
                                onChange={e => onChange(e)}
                                value={phone}
                            />
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Pais
                            </dt>

                            <select
                                className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                id='country_region'
                                name='country_region'
                                onChange={e => onChange(e)}
                            >
                                <option value={country_region}>{profile.country_region}
                                </option>
                                {
                                    countries && countries.map((country, index) => (
                                        <option key={index} value={country.name}>{country.name}</option>
                                    ))
                                }
                            </select>

                        </div>
                    </dl>
                </div>
                <div className="w-full px-4 pb-4 mt-3 ml-auto text-gray-500 md:w-1/5">
                    {loading ?
                        <button className="py-2 px-4  bg-red-600 hover:bg-red-700  text-white w-full  text-center text-base font-semibold shadow-md   rounded-lg ">
                            <Oval
                                type="Oval"
                                width={20}
                                height={20}
                                color="#fff"
                            />
                        </button> :
                        <button type="submit" className="py-2 px-4 flex  space-x-2 justify-center bg-indigo-600 hover:bg-indigo-700   text-white w-full  text-center text-base font-semibold shadow-md  rounded-lg ">
                            <SaveIcon className="w-6 h-6" /> <span>Guardar</span>
                        </button>}
                </div>
            </div>
        </form>
    )
}
export default UpdateInfo