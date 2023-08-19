import { CartItem as cartItemData } from "@/pages/cart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

interface Props {
    data: cartItemData[]
}

const CartForm: React.FC<Props> = ({ data }: Props) => {
    return (
        <div className="bg-gray-100 pt-20 pb-20 mb-20 w-full">
            <h1 className="mb-10 text-center text-2xl font-bold">Alışveri Sepetiniz</h1>
            <div className="flex justify-between w-full">
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 w-full">
                    <div className="rounded-lg lg:w-2/3 sm:w-full"> {/* CartItem için yarı genişlik */}
                        {data.map((cartItem, index) => {
                            return <CartItem key={index} data={cartItem} />
                        })}
                    </div>
                    <div className="flex lg:w-1/3 sm:w-full justify-center text-center h-1/3"> {/* CartSummary için yarı genişlik */}
                        <CartSummary />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartForm;