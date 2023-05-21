import { ReactNode } from "react";
import SearchBar from "./SearchBar";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface Props {
    children?: ReactNode;
};


const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <SearchBar />
            <main>{children}</main>
        </>
    )
}

export default Layout;