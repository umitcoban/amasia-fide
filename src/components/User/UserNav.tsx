import Image from "next/image";
import Link from "next/link";
import { ReactNode } from 'react';
import { AiFillAlipayCircle, AiFillHeart, AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { FaMoneyCheck } from "react-icons/fa";

interface Props {
    children: ReactNode;
}

const UserNav: React.FC<Props> = ({ children }: Props) => {
    return (
        <div className="flex justify-center w-full h-full mt-2">
            <div className="h-screen w-full bg-white relative flex overflow-hidden">
                <aside className="hidden md:flex md:flex-col h-full w-16 space-y-10 items-center justify-center relative bg-primary-blue text-white rounded">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <AiOutlineUser className="font-bold text-2xl" />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <FaMoneyCheck className="font-bold text-2xl" />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <AiFillHeart className="font-bold text-2xl" />
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                        <AiFillSetting className="font-bold text-2xl" />
                    </div>
                </aside>
                <div className="w-full h-full flex flex-col justify-between">
                    <header className="lg:h-28 sm:h-16 w-full flex items-center relative justify-end px-2 lg:px-12 lg:space-x-20 bg-primary-blue">
                        <div className="hidden md:flex flex-shrink-0 items-center space-x-4 text-white">
                            <div className="flex flex-col items-end ">
                                <div className="lg:text-xl sm:text-md font-medium ">Ümit Yasin Çoban</div>
                            </div>
                            <Image src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg" alt="user" height={15} width={50}
                                className="rounded-full sm:h-16 w-12 cursor-pointer object-cover" />
                        </div>
                        <div className="md:hidden lg:hidden lg:h-16 flex mx-auto w-full text-center justify-center flex-shrink-0 items-center text-white">
                            <div className="flex flex-row items-center space-x-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                                    <AiOutlineUser className="font-bold text-2xl" />
                                </div>
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                                    <FaMoneyCheck className="font-bold text-2xl" />
                                </div>
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                                    <AiFillHeart className="font-bold text-2xl" />
                                </div>
                                <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
                                    <AiFillSetting className="font-bold text-2xl" />
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="max-w-full sm:w-full h-full flex relative overflow-y-hidden overflow-x-hidden">
                        <div className="h-full w-full lg:m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4">
                            <div className="sm:w-full sm:pt-3 w-96 h-full rounded-lg flex-shrink-0 flex-grow bg-third-gray-gray">
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default UserNav;