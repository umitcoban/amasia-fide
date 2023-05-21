import LoginForm from "@/components/LoginPage/LoginForm";
import Image from "next/image";

const LoginPage = () => {
    return (
        <section className="container lg:mt-14">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-5 lg:space-y-4">
                <div className="hidden lg:flex items-center justify-center lg:w-2/3 relative h-144 lg:mr-28">
                    <Image src={"https://i.haber3.com/storage/files/images/2022/06/20/monoculture-thf7.jpg"} alt="test" objectFit="cover" layout="fill"/>
                </div>
                <div className="items-center justify-center lg:w-2/4">
                    <LoginForm />
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
