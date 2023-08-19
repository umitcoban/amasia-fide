import ResendForm from "@/components/RegisterPage/ResendForm";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

const Resend = () => {
    return (
        <section>
            <div className="flex w-full justify-center items-center my-4 md:my-24 lg:my-32">
                <ResendForm />
            </div>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context);
    const token = cookies["token"];
    if (token)
        return {
            redirect: {
                destination: '/shop',
                permanent: false
            }
        }
    return {
        props: {}
    }
}

export default Resend;