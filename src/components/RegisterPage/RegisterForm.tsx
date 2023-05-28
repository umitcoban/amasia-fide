import useFormValidation from "@/hooks/useFormValidation";
import { RegisterModel } from "@/models/authModel";
import { logIn } from "@/redux/slices/authSlice";
import { register } from "@/services/authService";
import { validationRules } from "@/utils/validationRules";
import { useState } from "react";
import { useDispatch } from "react-redux";

/* eslint-disable react/no-unescaped-entities */
const RegisterForm = () => {
    const dispatch = useDispatch();
    const [registerError, setRegisterError] = useState({ message: '' });
    const { errors, handleChange, handleBlur, values } = useFormValidation({
        firstName : '',
        middleName: '',
        lastName : '',
        phone: '',
        citizenNumber: '',
        username : '', 
        password: ''
    }, validationRules);

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
            console.log(error.response.data.message);
            setRegisterError(error.response.data.message) 
        });

        if (response)
            dispatch(logIn(response?.token));
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
                   { errors.firstName && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
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
                        { errors.lastName && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border
                     border-gray-200 ${errors.email && 'border-red-500'}  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-password" type="email" placeholder="example@gmail.com" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}  />
                        { errors.email && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
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
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    { errors.password && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Telefon
                    </label>
                    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border 
                    border-gray-200 ${errors.phone && 'border-red-500'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        id="grid-password" type="text" placeholder="05000000000" name="phone"  onChange={handleChange} onBlur={handleBlur} value={values.phone} />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    { errors.phone && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
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
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
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
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-city" type="text" placeholder="11111111111" name="citizenNumber" />
                </div>
                <div className="flex items-center justify-center w-full text-center mt-8">
                    <button className="bg-primary-green text-center
                     hover:bg-primary-green text-white font-bold py-2 px-4 w-2/3 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                </div>
                {registerError.message && <p className="text-red-500 text-xs italic">{registerError.message}</p>}
            </div>
        </form>
    )
}

export default RegisterForm;