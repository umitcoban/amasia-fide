
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineWhatsApp, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import QTYButton from "../UI/QTYButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DUMMY_PRODUCTS from "@/datas/dummy-data/dummy-products";
import Image from "next/image";

interface product {
    name: string,
    description: string,
    price: number,
    image: string,
    discount: number
};

const ProductDetail = () => {
    const [item, setItem] = useState<product | null>(null);
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        if (typeof id === 'string') {
            const foundItem = DUMMY_PRODUCTS.find((product, index) => index == Number.parseInt(id));
            if (foundItem !== undefined) {
                setItem(foundItem);
            } else {
                setItem(null);
            }
        } else {
            // Handle case when id is an array or something else
        }
    },[id])

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Image alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 hover:scale-110 transition duration-200"
                        src={item?.image || ""} width={200} height={48}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Amasia-Fide</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item?.name}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                {'* * * *'}
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                <a className="text-gray-500">
                                    <AiFillFacebook className="w-5 h-5" />
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <AiFillTwitterSquare className="w-5 h-5" />
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <AiOutlineWhatsApp className="w-5 h-5" />
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed">{item?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10" defaultValue={0}>
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${item?.price}</span>
                            <QTYButton />
                        </div>
                        <div className="flex justify-center items-center space-x-24 mt-8">
                            <button className="w-36 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                <AiOutlineShoppingCart className="w-6 h-6" />
                            </button>
                            <button className="w-36 h-12 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                <AiFillHeart className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;