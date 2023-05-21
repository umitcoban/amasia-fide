import { logIn } from "@/redux/slices/authSlice";
import { login } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    const submitFormHandler = async (event: any) => {
        event.preventDefault();
        const username = email;
        const data = await login({username, password}).catch(() => {throw Error("Login Error")});
        dispatch(logIn(data.token))
        router.push('shop');
    }

    const changeEmailHandler = (event: any) => {
        setEmail(event.target.value);
    }

    const changePasswordHandler = (event: any) => {
        setPassword(event.target.value);
    }

    return (
        <div className="w-full max-w-xs font-inter">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitFormHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="username" type="text" 
                    placeholder="Username" name="username" onChange={changeEmailHandler} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="******************" 
                    name="password" onChange={changePasswordHandler}/>
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="flex items-center justify-center w-full mt-4">
                    <Link href="/auth/register" className="bg-primary-green text-center hover:bg-primary-green text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </Link>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 Ümit Yasin Çoban. All rights reserved.
            </p>
        </div>
    )
}

export default LoginForm;