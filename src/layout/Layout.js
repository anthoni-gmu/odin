import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { Footer } from "../components/page/Footer"
import  Navbar  from "../components/page/Navbar"

const Layaut=(props)=>{
    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer/>

        </div>
    )
}

export default Layaut