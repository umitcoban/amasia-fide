import useFormValidation from "@/hooks/useFormValidation";
import { validationRules } from "@/utils/validationRules";

const ResendForm: React.FC = () => {
    const errorTypes = ['email'];
    const { errors, handleChange, handleBlur, values } = useFormValidation({
        email: '',
        activationCode: ''
    }, validationRules);

    let hasError = errorTypes.some(prop => errors[prop] != undefined) || values.email.length === 0;

    const handleFormSubmit = async (event:any) => {

    }

    return (
        <>
            <form>
                <div className="grid w-80 grid-rows-4 gap-1">
                    <p className="font-semibold text-gray-700">Lütfen Email Giriniz:</p>
                    <input type="text" className="h-10 w-full rounded border p-2 mb-4 text-sm" placeholder="Email" onChange={handleChange}
                        onBlur={handleBlur} value={values.email} name="email" />
                    {errors.email && <p className="text-red-500 italic text-center text-sm">Lütfen gerekli bilgileri giriniz.</p>}
                    <button className="rounded h-20 bg-primary-green disabled:bg-gray-500 text-gray-50 hover:bg-gradient-to-r
                 hover:from-[#FD5E57] hover:to-[#FC477E] hover:disabled:bg-gray-600" disabled={hasError}>Aktivasyon Kodunu Gönder</button>
                </div>
            </form>
        </>
    )
}

export default ResendForm;