import RegisterForm from "@/components/RegisterPage/RegisterForm";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const Register = () => {
    return (
        <section>
            <div className="flex w-full justify-center items-center my-4 md:my-24 lg:my-32">
                <RegisterForm />
            </div>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context);
    const token = cookies['token'];
    
    if (token) {
        return {
            redirect: {
                destination: '/shop',
                permanent: false,
            },
        };
    }

    return {
        props: {}
    }
}


export default Register;