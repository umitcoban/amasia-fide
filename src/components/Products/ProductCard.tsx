import { useRouter } from "next/router";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";

interface props {
    price: number,
    name: string,
    description: string,
    image: string,
    discount: number
}

const ProductCard: React.FC<props> = (props) => {

    const router = useRouter();

    return (
        <>
            <div className=" w-full lg:w-80 overflow-hidden bg-white shadow-lg dark:bg-gray-800 font-inter hover:scale-105 transition duration-300 cursor:pointer group">
                <div className="h-0.5 max-h-0.5 bg-gradient-to-r to-lime-700 from-lime-900 w-full"> </div>
                <div className="py-3 flex ml-0 pl-0 space-x-4 justify-around items-center cursor-pointer">
                    <h1 className="text-lg font-semibold ml-1 text-primary-black uppercase dark:text-white border-2 border-secondary-gray w-2/3 text-center
                    h-8">{props.name}</h1>
                    <h3 className="font-semibold text-primary-black dark:text-gray-400 border-2 border-secondary-gray w-1/3 h-8 text-center p-1">{props.price} TL</h3>
                </div>
                <div className="h-0.5 bg-gradient-to-r to-lime-700 from-lime-900 w-full"> </div>

                <div className="relative cursor-pointer" onClick={() => router.push('/shop/5')}>
                    {props.discount > 0 && <div className="absolute right-2 rounded-full bg-primary-green">
                        <p className="p-2 text-white font-semibold">%{props.discount}</p>
                    </div>}
                    <img className="object-contain w-full h-48 mt-2"
                        src={props.image} alt={props.description} />
                </div>

                <div className="flex items-center justify-between space-x-3 py-2 bg-white mt-4 cursor-pointer">
                    <h1 className="px-2 py-1 text-lg text-primary-black italics w-2/4 text-center border-2 border-secondary-gray h-14 pt-3">{props.description}</h1>
                    <button className="px-2 py-1 text-5xl font-semibold text-gray-900 uppercase transition-colors duration-300 transform
                     bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none w-1/4 text-center border border-primary-green h-14">
                        <AiOutlineShopping className="w-full text-primary-green" />
                    </button>
                    <button className="px-2 py-1 text-5xl font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded
                     hover:bg-gray-200  focus:bg-gray-400 focus:outline-none w-1/4 text-center border border-primary-green h-14">
                        <AiOutlineHeart className="w-full text-primary-green" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;