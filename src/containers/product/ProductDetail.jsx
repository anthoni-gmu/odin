import Layaut from '../../layout/Layout'
import { useEffect  } from "react";

import { get_product } from "../../redux/actions/product"
import { connect } from "react-redux"
import { useParams } from 'react-router'



const ProductDetail = ({
    get_product,
    product_detail,
    related_products,
    products_colors,
}) => {
    const params = useParams()
    const productId = params.productId
    useEffect(() => {
        window.scrollTo(0, 0);
        get_product(productId);

    }, []);



    return (
        <Layaut>


        </Layaut>
    );
};



const mapStateToProps = state => ({
    product: state.Product.product,
    related_products: state.Product.related_products,
    products_colors: state.Product.products_colors,

})


export default connect(mapStateToProps, {
    get_product
}) (ProductDetail)

