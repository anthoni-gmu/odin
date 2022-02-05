import { connect } from 'react-redux'
import LayaoutDashboard from '../../layout/LayaoutDashboard'


const Profile = ({

}) => {

   

    return (
        <LayaoutDashboard>
            hola
        </LayaoutDashboard>
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

})(Profile)