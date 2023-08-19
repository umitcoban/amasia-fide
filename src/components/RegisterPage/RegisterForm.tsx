import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import useFormValidation from "@/hooks/useFormValidation";
import { RegisterModel } from "@/models/authModel";
import { register } from "@/services/authService";
import { validationRules } from "@/utils/validationRules";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable react/no-unescaped-entities */
const RegisterForm = () => {
    const errorTypes = ['firstName', 'lastName', 'username', 'password', 'phone', 'citizenNumber'];
    const dispatch = useDispatch();
    const router = useRouter();
    const [registerError, setRegisterError] = useState({ message: '' });
    const { errors, handleChange, handleBlur, values } = useFormValidation({
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        citizenNumber: '',
        username: '',
        password: ''
    }, validationRules);

    let hasError = errorTypes.some(prop => errors[prop] != undefined);

    const submitFormHandler = async (event: any) => {
        event.preventDefault();
        const { firstName, middleName, lastName, email, password, citizenNumber, phone } = event.target;
        const registerModel: RegisterModel = {
            firstName: firstName.value,
            middleName: middleName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            citizenNumber: citizenNumber.value,
            phone: phone.value,
        }

        const response = await register(registerModel).catch((error) => {
            setRegisterError({ message: error.response?.data?.message ? error.response?.data?.message : 'Beklenmedik bir hata oluştu.' });
            toast.error(error.response?.data?.message ? error.response.data?.message : 'Beklenmedik bir hata oluştu.');
        });

        if (response) {
            if (response.data === true){
                Cookies.set('activation', 'true', {expires: new Date().getTime() + 3 * 60 * 1000});
                router.push("/auth/activation");
            }else
                toast.error('Beklenmedik bir hata oluştu.');
        }
    }

    return (
        <form className="w-full max-w-lg font-inter" onSubmit={submitFormHandler}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        İlk İsim
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border
                     ${errors.firstName && 'border-red-500'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name`}
                        type="text" placeholder="Jane" name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName} />
                    {errors.firstName && <p className="text-red-500 text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Ortanca İsim
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe" name="middleName" />
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Soyisim
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border
                     border-gray-200  ${errors.lastName && 'border-red-500'} rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-last-name" type="text" placeholder="Doe" name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName} />
                    {errors.lastName && <p className="text-red-500 text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border
                     border-gray-200 ${errors.email && 'border-red-500'}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-password" type="email" placeholder="example@gmail.com" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                    {errors.email && <p className="text-red-500 text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Şifre
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border
                     border-gray-200 ${errors.password && 'border-red-500'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-password" type="password" placeholder="******************" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                    {errors.password && <p className="text-red-500 text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Telefon
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border 
                    border-gray-200 ${errors.phone && 'border-red-500'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-password" type="text" placeholder="05000000000" name="phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                    {errors.phone && <p className="text-red-500 text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Şehir
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city" type="text" placeholder="Albuquerque" name="city" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        İlçe
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state" name="district">
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6 mt-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        TC Kimlik No
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border
                     border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.citizenNumber && 'border-red-500'}`}
                        id="grid-city" type="text" placeholder="11111111111" name="citizenNumber"
                        onChange={handleChange} onBlur={handleBlur} value={values.citizenNumber} pattern="^\d+$" />
                    {errors.citizenNumber && <p className="text-red-500 text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                </div>
                <div className="flex items-center justify-center w-full text-center mt-8">
                    <button className={`${hasError ? 'bg-gray-500' : 'bg-primary-green'} text-center
                     ${!hasError && 'hover:bg-primary-green'} text-white font-bold py-2 px-4 w-2/3 rounded focus:outline-none focus:shadow-outline`}
                        type="submit" disabled={hasError} >
                        Kayıt Ol
                    </button>
                </div>
                <ToastContainer />
            </div>
        </form>
    )
}

export default RegisterForm;