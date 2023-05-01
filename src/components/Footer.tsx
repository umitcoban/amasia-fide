import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-40">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <a href="#">
                        <h1 className="text-primary-black font-bold font-inter text-4xl hover:text-primary-green transition duration-200">Amasia Fide</h1>
                    </a>

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-green dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>

                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-green dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>

                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-green dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a>

                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-green dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a>

                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-primary-green dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a>
                    </div>

                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between text-xl">
                    <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright Ümit Yasin Çoban 2023. All Rights Reserved.</p>

                    <div className="flex -mx-2">
                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-primary-gray hover:text-primary-green dark:hover:text-blue-400" aria-label="Reddit">
                            <AiOutlineInstagram />
                        </a>

                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-primary-gray hover:text-primary-green dark:hover:text-blue-400" aria-label="Facebook">
                           <AiOutlineFacebook/>
                        </a>

                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-primary-gray hover:text-primary-green dark:hover:text-blue-400" aria-label="Github">
                           <AiOutlineTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;