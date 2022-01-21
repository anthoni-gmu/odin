import Layaut from '../../layout/Layout'
import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../../redux/actions/auth'



const Signup = ({
    signup
}) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    const [accountCreated, setAccountCreated] = useState(false);
    
    const [formData, setFormData] = useState({
        first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
    })
    
    const {
        first_name,
        last_name,
        email,
        password,
        re_password
    } = formData;

    const onChange= e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        signup(first_name, last_name,email,password,re_password);
        setAccountCreated(true);
        window.scrollTo(0,0)
    }

    if (accountCreated)
        return <Navigate to='/login' />;



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
                            <form onSubmit={e=>onSubmit(e)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="first_name">
                                    Nombres
                                    </label>
                                    <input
                                        name="first_name"
                                        value={first_name}
                                        onChange={e => onChange(e)}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="first_name"
                                        required
                                        placeholder="Nombres"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="last_name">
                                    Apellidos
                                    </label>
                                    <input
                                        name="last_name"
                                        value={last_name}
                                        onChange={e => onChange(e)}
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="last_name"
                                        required
                                        placeholder="Apellidos"
                                    />
                                </div>
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
                                        placeholder="Correo"
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
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="re_password">
                                        Repite tu contraseña
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="re_password"
                                        value={re_password}
                                        onChange={e => onChange(e)}
                                        type="password"
                                        required
                                        placeholder="******************"
                                    />
                                </div>
                     
                                <div className="mb-6 text-center">
                                       
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Registrarce
                                        </button>

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

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{
    signup
}) (Signup)
