import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { check_authenticated, load_user, refresh } from '../redux/actions/auth';

import { Footer } from "../components/page/Footer"
import Navbar from "../components/page/Navbar"

import { useEffect } from 'react';
import { connect } from 'react-redux';
const Layaut = (props) => {


    useEffect(() => {
        props.refresh()
        props.check_authenticated()
        props.load_user()
    }, []);

    return (
        <div>
            <Navbar />
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer />

        </div>
    )
}

export default connect(null, {
    check_authenticated,
    load_user,
    refresh
})(Layaut)