import LoginForm from "@/components/LoginPage/LoginForm";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { parseCookies } from "nookies";
import { ToastContainer, toast } from "react-toastify";

interface Props{
    error: string
}

const LoginPage = ({error}: Props) => {
    if(error)
        toast.error(error);
    return (
        <section className="container lg:mt-14">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-4">
                <div className="hidden lg:flex items-center justify-center lg:w-2/3 relative h-144 lg:mr-28">
                    <Image src={"https://i.haber3.com/storage/files/images/2022/06/20/monoculture-thf7.jpg"} alt="test" objectFit="cover" layout="fill" />
                </div>
                <div className="items-center justify-center lg:w-2/4">
                    <LoginForm />
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { error } = context.query;
    console.log(error);
    const cookies = parseCookies(context);
    const token = cookies["token"];
    if (error)
        return {
            props: {
                error: error
            }
        }
    if (token)
        return {
            redirect: {
                destination: "/shop",
                permanent: false
            }
        }
    return {
        props: {}
    }
}

export default LoginPage;
