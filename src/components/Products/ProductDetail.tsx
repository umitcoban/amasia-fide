
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineWhatsApp, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import QTYButton from "../UI/QTYButton";

const ProductDetail = () => {

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 hover:scale-110 transition duration-200"
                        src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
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
                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
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
                                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
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
                            <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                            <QTYButton />
                        </div>
                        <div className="flex justify-start items-center space-x-24 mt-8">
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