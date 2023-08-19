import useFormValidation from "@/hooks/useFormValidation";
import { activateUser } from "@/services/authService";
import { validationRules } from "@/utils/validationRules";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ActivationFrom: React.FC = () => {
    const errorTypes = ['email', 'activationCode'];
    const { errors, handleChange, handleBlur, values } = useFormValidation({
        email: '',
        activationCode: ''
    }, validationRules);

    let hasError = errorTypes.some(prop => errors[prop] != undefined) || (values.email.length === 0 || values.email.activationCode === 0);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const {email: emailInput, activationCode: activationCodeInput} = event.target;
        console.log()
        const response = await activateUser({email: emailInput.value, activationCode: activationCodeInput.value}).catch(error => {
            toast.error(error.response? error.response.data.message : 'Beklenmedik bir hata oluştu!');
        });
    }
    return (
        <form className="flex items-center justify-center bg-[#fbfbfb]" onSubmit={handleSubmit}>
            <div className="grid w-80 grid-rows-4 gap-1">
                <p className="font-semibold text-gray-700">Lütfen Email Giriniz:</p>
                <input type="text" className="h-10 w-full rounded border p-2 mb-4 text-sm" placeholder="Email" onChange={handleChange}
                    onBlur={handleBlur} value={values.email} name="email" />
                {errors.email && <p className="text-red-500 text-center text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                <p className="font-semibold text-gray-700">Lütfen Aktivasyon Kodunuzu Giriniz:</p>
                <input type="text" className="h-10 text-center w-full rounded border p-2 mb-4 text-sm" placeholder="Aktivasyon Kodu" onChange={handleChange}
                    onBlur={handleBlur} value={values.activationCode} name="activationCode" />
                {errors.activationCode && <p className="text-red-500 text-center text-xs italic">Lütfen gerekli bilgileri giriniz.</p>}
                <button className="rounded h-20 bg-primary-green disabled:bg-gray-500  text-gray-50 hover:bg-gradient-to-r
                 hover:from-[#FD5E57] hover:to-[#FC477E] disabled:hover:bg-gray-600" disabled={hasError}>Aktivasyon Kodunu Gönder</button>
                <Link href="/auth/resend">
                    <p className="mt-4 flex items-center text-xs text-gray-500 hover:text-gray-700">
                        Yeni Kod Oluştur
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 h-3 w-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </p>
                </Link>
            </div>
            <ToastContainer />
        </form>
    )
}

export default ActivationFrom;