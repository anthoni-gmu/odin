import { useState } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LayaoutDashboard from '../../layout/LayaoutDashboard'
import { update_account } from '../../redux/actions/account'

import UpdateInfo from '../../components/account/UpdateInfo'
import ViewInfoProfile from '../../components/account/ViewInfo'


const InfoProfile = ({
    update_account,
    isAuthenticated,
    user,
    profile,

}) => {
    const [loading, setLoading] = useState(false)

    const [edit, setEdit] = useState(false)
    const ViewInfo = () => {
        setEdit(!edit)
    }

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
        ViewInfo()
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

                    {edit ?
                        <UpdateInfo
                            onSubmit={onSubmit}
                            profile={profile}
                            user={user}
                            address_line_1={address_line_1}
                            address_line_2={address_line_2}
                            city={city}
                            state_province_region={state_province_region}
                            zipcode={zipcode}
                            phone={phone}
                            country_region={country_region}
                            onChange={onChange}
                            loading={loading}
                        /> :
                        <ViewInfoProfile
                            profile={profile}
                            user={user}
                            ViewInfo={ViewInfo}
                        />
                    }

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

})(InfoProfile)