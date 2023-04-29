import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container flex justify-between items-center content-between space-x-20 uppercase">
        <div className="flex space-x-16 items-center text-primary-black text-3xl m-5 lg:ms-12 w-auto font-inter font-bold">
          <Link href="/" className="transition delay-150 text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-900
            ease-linear hover:border-b pb-2 hover:border-primary-gray text-center lg:hover:scale-105">Amasia Fide</Link>
        </div>
        <div className="flex items-center pe-10 lg:hidden text-2xl hover:text-primary-green transition ease-in-out duration-75">
          <button onClick={() => setIsOpen(!isOpen)}> <AiOutlineMenu /> </button>
        </div>
        <div className={`hidden lg:flex item-center justify-items-center 
            justify-end font-inter font-semibold lg:space-x-8 md:space-x-1 md:pe-7 ${isOpen ? 'block': ''}`}>
          <Link href="/" className="transition delay-150 hover:text-primary-green 
            ease-linear hover:border-b hover:border-primary-gray 
            text-center">Mağaza</Link>
          <div className="inline">
            <select id="cars" className="font-inter outline-1 outline-dashed text-center cursor-
            pointer rounded-full w-44 uppercase font-semibold">
              <option selected className="m-2">Kategoriler</option>
              <option>Test1</option>
              <option>Test2</option>
              <option>Test3</option>
              <option>Test4</option>
              <option>Test5</option>
            </select>
          </div>
          <Link href="/" className="transition delay-150 hover:text-primary-green 
            ease-linear hover:border-b hover:border-primary-gray 
            text-center">hakkımızda</Link>
          <div className="flex lg:border-e-2 lg:border-s-2 text-center">
            <input type="text" className="w-full border text-center md:ms-3 md:w-full sm:w-full border-gray-400 rounded-md text-sm focus:outline-teal-600" placeholder="This is placeholder" />
            <button type="button" className="rounded text-center border items-center me-3 ms-2 w-10 hover:bg-primary-green transition
              duration-75 hover:text-white">
              <AiOutlineSearch className="mx-auto" />
            </button>
          </div>
          <div className="flex text-center space-x-3">
            <button type="button" className="rounded text-center border items-center w-10 hover:bg-primary-green transition
              duration-75 hover:text-white">
              <AiOutlineHeart className="mx-auto" />
            </button>
            <button type="button" className="rounded text-center border items-center w-10 hover:bg-primary-green transition
              duration-75 hover:text-white">
              <AiOutlineUser className="mx-auto" />
            </button>
            <button type="button" className="rounded text-center border items-center w-10 hover:bg-primary-green transition
              duration-75 hover:text-white">
              <AiOutlineShoppingCart className="mx-auto" />
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;