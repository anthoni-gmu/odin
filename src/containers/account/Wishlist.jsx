import { connect } from 'react-redux'
import LayaoutDashboard from '../../layout/LayaoutDashboard'


const Wishlist = () => {

    return (
        <LayaoutDashboard>
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Lista de Deseos</h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">


                </div>
            </div>
        </LayaoutDashboard>
    )
}

const mapStateToProps = state => ({


})

export default connect(mapStateToProps, {

})(Wishlist)