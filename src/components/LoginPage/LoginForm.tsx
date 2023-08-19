import useFormValidation from "@/hooks/useFormValidation";
import Cookies from "js-cookie";
import { logIn } from "@/redux/slices/authSlice";
import { login } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { validationRules } from "@/utils/validationRules";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { errors, handleChange, handleBlur, values } = useFormValidation({ username: '', password: '' }, validationRules);
    const [loginError, setLoginError] = useState({ message: '' });

    const submitFormHandler = async (event: any) => {
        event.preventDefault();
        if (!values.username || !values.username) {
            setLoginError({ message: 'invalid username & password' });
            return;
        }
        if (errors.username || errors.password)
            return;
        const data = await login({ username: values.username, password: values.password }).catch((data) => {
            setLoginError({ message: data.response ? data.response.data.message : data.message });
            toast.error(data.response ? data.response.data.message : data.message);
        });
        if (data?.token) {
            dispatch(logIn(data.token))
            Cookies.set('token', data.token, {expires: 2});
            router.push('shop');
        }
    }

    return (
        <div className="w-full max-w-xs font-inter">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitFormHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className={`shadow appearance-none border ${errors.username && 'border-red-500'} rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id="username" type="text"
                        placeholder="Username" name="username" onChange={handleChange} onBlur={handleBlur} value={values.username} />
                    {errors.username && <p className="text-red-500 text-xs italic">Please choose a email.</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Şifre
                    </label>
                    <input className={`shadow appearance-none border ${errors.password && 'border-red-500'} rounded w-full py-2 px-3
                     text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                        id="password"
                        type="password"
                        placeholder="******************"
                        name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    {errors.password && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Giriş Yap
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Şifreni mi unuttun?
                    </a>
                </div>
                <div className="flex items-center justify-center w-full mt-4">
                    <Link href="/auth/register" className="bg-primary-green text-center hover:bg-primary-green 
                    text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Kayıt Ol
                    </Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 Ümit Yasin Çoban. All rights reserved.
            </p>
            <ToastContainer />
        </div>
    )
}

export default LoginForm;