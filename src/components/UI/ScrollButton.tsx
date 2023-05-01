import { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="absolute bottom-0 right-5">
            <button onClick={handleClick} className={`${showButton ? '' : 'hidden'} h-24 w-24 rounded-full
             bg-primary-green text-center`}>
                <BsFillArrowUpSquareFill />
            </button>
        </div>
    );
};

export default ScrollButton;