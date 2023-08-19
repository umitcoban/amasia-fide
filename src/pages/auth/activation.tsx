import ActivationForm from "@/components/RegisterPage/ActivationForm";
import {parseCookies} from "nookies";
import { GetServerSideProps } from "next";

const Activation = () => {
    return (
        <section>
            <div className="flex w-full justify-center items-center my-4 md:my-24 lg:my-32">
                <ActivationForm />
            </div>
        </section>
    )
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const cookies = parseCookies(context);
    const isActivation = cookies['activation'];
    if (!isActivation) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    return {
        props: {}
    }
}

export default Activation;