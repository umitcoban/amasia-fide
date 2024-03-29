import { CartItem as cartItemData } from "@/pages/cart";
import Image from "next/image";
import { useState } from 'react';

interface Props {
  data: cartItemData
}

const CartItem: React.FC<Props> = ({ data }: Props) => {
  const [qtyValue, setQtyValue] = useState(data.qty);

  const handleIncrease = () => {
    setQtyValue((qty) => qty + 1);
  }

  const handleDecrease = () => {
    setQtyValue((qty) => qty <= 0 ? 0 : qty + -1);
  }
  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start sm:w-full">
        <Image src={data.image}
          alt="product-image" className="w-full rounded-lg sm:w-40" width={80} height={80} />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between sm:text-center">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900 text-center">{data.name}</h2>
            <p className="mt-1 text-xs text-gray-700 text-center">{data.description}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleDecrease}> - </span>
              <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={qtyValue} min="1" defaultValue={data.qty} />
              <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleIncrease}> + </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{data.price} TL</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem;