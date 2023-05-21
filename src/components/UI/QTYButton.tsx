import { useState } from "react";

const QTYButton = () => {
    const [qty, setQty] = useState(1);
    const handlerPlusButtonClick = () => {
        setQty(qty + 1);
    }
    const handlerMinusButtonClick = () => {
        qty - 1 < 1 ? 1 : setQty(qty - 1);
    }
    return (
        <div className="h-8 flex justify-center items-center mx-auto w-4/5">
            <div className="flex flex-row justify-center h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 
                hover:bg-gray-400 h-full w-20 m-auto rounded-l cursor-pointer outline-none" onClick={handlerMinusButtonClick}>
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <input type="number" className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700  outline-none"
                    name="qty"
                    value={qty}></input>
                <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
                 h-full w-20 rounded-r cursor-pointer" onClick={handlerPlusButtonClick}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    )
}

export default QTYButton;