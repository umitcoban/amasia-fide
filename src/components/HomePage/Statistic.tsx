import {GiPlantRoots} from "react-icons/gi";
import {BsPersonVcard} from "react-icons/bs";
import {AiOutlineShopping} from "react-icons/ai";
import {BiHappyBeaming} from "react-icons/bi";

const Statistic = () => {
    return (
        <section className="text-gray-600 font-inter">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Size Hizmet Etmekten Mutluluk Duyuyoruz</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <GiPlantRoots className="flex w-full text-6xl mt-2 mb-2 text-primary-green" />
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed font-semibold text-lg text-primary-black mt-2">Tür</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <BsPersonVcard className="flex w-full text-6xl mt-2 mb-2 text-cyan-900" />
                            <h2 className="title-font font-medium text-3xl text-primary-black">2.7K</h2>
                            <p className="leading-relaxed font-semibold text-lg text-primary-black mt-2">Müşteri</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <AiOutlineShopping className="flex w-full text-6xl mt-2 mb-2 text-cyan-500" />
                            <h2 className="title-font font-medium text-3xl text-primary-black">2.7K</h2>
                            <p className="leading-relaxed font-semibold text-lg text-primary-black mt-2">Satış</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <BiHappyBeaming className="flex w-full text-6xl mt-2 mb-2 text-yellow-600" />
                            <h2 className="title-font font-medium text-3xl text-primary-black">2.7K</h2>
                            <p className="leading-relaxed font-semibold text-lg text-primary-black mt-2 whitespace-nowrap">%100 Memnuniyet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistic;