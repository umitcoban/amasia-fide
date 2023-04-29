import Link from "next/link";
import { useEffect, useState } from "react";


const Navbar: React.FC = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768 && open) {
          setOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [open]);

    const toggleNavbar = () => {
        setOpen(!open);
      };

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap w-full">
                <div className="flex items-center flex-wrap text-black mr-5 ps-7 pt-5 mb-5">
                    <p className="text-center text-3xl font-semibold tracking-wide hover:text-green-800 cursor-pointer">Amasia Fide</p>
                </div>
                <div className="block lg:hidden me-4">
                    <button className="flex items-center px-3 py-2 border rounded text-black border-blue-400 hover:text-green-800 hover:border-green-800" onClick={toggleNavbar}>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto ${open ? 'opacity-100' : 'opacity-0 hidden'} transition-all ease-in`}>
                    <div className="text-lg text-center">
                            <Link href="/" className="font-semibold cursor-pointer me-10 hover:text-green-800 block mt-4 lg:inline-block lg:mt-0 mr-4">Home</Link>
                            <Link href="/" className="font-semibold cursor-pointer me-10 hover:text-green-800 block mt-4 lg:inline-block lg:mt-0 mr-4">Home</Link>
                            <Link href="/" className="font-semibold cursor-pointer me-10 hover:text-green-800 block mt-4 lg:inline-block lg:mt-0 mr-4">Home</Link>
                            <Link href="/" className="font-semibold cursor-pointer me-10 hover:text-green-800 block mt-4 lg:inline-block lg:mt-0 mr-4">Home</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;