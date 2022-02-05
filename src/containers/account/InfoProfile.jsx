import { PaperClipIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LayaoutDashboard from '../../layout/LayaoutDashboard'
import { update_account, get_account } from '../../redux/actions/account'
import { countries } from '../../helpers/fixdCountries';
import { Oval } from 'react-loader-spinner'

const InfoProfile = ({
    update_account,
    isAuthenticated,
    user,
    profile,
    get_account

}) => {

    useEffect(() => {
        get_account()
    }, []);


    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        address_line_1: profile && profile.address_line_1,
        address_line_2: profile && profile.address_line_2,
        city: profile && profile.city,
        state_province_region: profile && profile.state_province_region,
        zipcode: profile && profile.zipcode,
        phone: profile && profile.phone,
        country_region: profile && profile.country_region,
    });
    const {
        address_line_1,
        address_line_2,
        city,
        state_province_region,
        zipcode,
        phone,
        country_region
    } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });



    const onSubmit = e => {
        e.preventDefault();
        setLoading(true)
        update_account(
            address_line_1,
            address_line_2,
            city,
            state_province_region,
            zipcode,
            phone,
            country_region
        );
        setLoading()
        window.scrollTo(0, 0);
    };
    if (!isAuthenticated)
        return <Navigate to="/" />
    return (
        <LayaoutDashboard>

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Información</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">


                    <form onSubmit={e => onSubmit(e)} className="py-4">


                        <div className="bg-white max-w-screen-2xl shadow overflow-hidden sm:rounded-lg">
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Nombre completo
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {user&&user.get_full_name}
                                        </dd>
                                    </div>
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
                        </div>
                        <div className="w-full px-4 pb-4 mt-3 ml-auto text-gray-500 md:w-1/3">
                            {loading ? <button className="py-2 px-4  bg-red-600 hover:bg-red-700  text-white w-full  text-center text-base font-semibold shadow-md   rounded-lg ">
                                <Oval
                                    type="Oval"
                                    width={20}
                                    height={20}
                                    color="#fff"
                                />
                            </button> : <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700   text-white w-full  text-center text-base font-semibold shadow-md  rounded-lg ">
                                Guardar
                            </button>}

                        </div>

                    </form>



                </div>
            </div>



        </LayaoutDashboard>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated,
    user: state.Auth.user,
    profile: state.Account.profile,

})

export default connect(mapStateToProps, {
    update_account,
    get_account

})(InfoProfile)