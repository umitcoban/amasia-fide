import { FaWarehouse, FaMotorcycle } from "react-icons/fa";

const CTA = () => {
    return (
        <section className="bg-white dark:bg-gray-900 font-inter mt-48 lg:mt-4">
            <div className="grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-2">
                <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                    <h2 className="text-4xl mb-1 text-primary-green">
                        <FaWarehouse />
                    </h2>
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
                        Tedarikçi Olun
                    </h2>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex cupiditate corrupti aliquam eum vel consequuntur hic culpa unde natus officia enim est impedit consequatur aut, voluptatem minima repellat non!</p>

                    <a href="#" className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-white transition-colors duration-300 bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Start now
                    </a>
                </div>

                <div className="flex flex-col items-center max-w-lg mx-auto text-center">
                    <h2 className="text-4xl mb-1 text-teal-800">
                        <FaMotorcycle />
                    </h2>
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
                        Taşıyıcı Olun
                    </h2>

                    <p className="mt-3 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ex cupiditate corrupti aliquam eum vel consequuntur hic culpa unde natus officia enim est impedit consequatur aut, voluptatem minima repellat non!</p>

                    <a href="#" className="inline-flex items-center justify-center w-full px-5 py-2 mt-6 text-gray-700 transition-colors duration-300 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                        Start now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTA;