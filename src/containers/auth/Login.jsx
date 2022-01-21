import Layaut from '../../layout/Layout'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../../redux/actions/auth'
import Loader from 'react-loader-spinner'
import { Navigate } from 'react-router'


const Login = ({
    login, loading
}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })

    const {
        email,
        password,
    } = formData;

    const [activated, setActivated] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
        setActivated(true);
        window.scrollTo(0,0)
        

    }
    if (activated)
        return <Navigate to='/' />;

    return (
        <Layaut>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        >
                            <img

                                src="https://source.unsplash.com/K4mSJ7kc0As/600x600"
                                alt="Workflow"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Biembenido!</h3>
                            <form onSubmit={e => onSubmit(e)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Correo Electronico
                                    </label>
                                    <input
                                        name="email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="email"
                                        required
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Contraseña
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="password"
                                        value={password}
                                        onChange={e => onChange(e)}
                                        type="password"
                                        required
                                        placeholder="******************"
                                    />
                                </div>
                             
                                <div className="mb-6 text-center">
                                    {loading ?
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        >
                                            <Loader
                                                type="Oval"
                                                color="#fff"
                                                width={20}
                                                height={20}
                                            />
                                        </button> :
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Ingresar
                                        </button>
                                    }

                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./register.html"
                                    >
                                        Create an Account!
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./forgot-password.html"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layaut>
    );
};

const mapStateToProps = state => ({
    loading: state.Auth.loading
})

export default connect(mapStateToProps, {
    login
})(Login)
