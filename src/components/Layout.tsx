import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "@/redux/slices/authSlice";
import { CategoryModel } from "@/models/categoryModel";
import { getAllCategories } from "@/services/categoryService";
import { RootState } from "@/redux/store";
import { setCategories } from "@/redux/slices/categorySlice";
interface Props {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const categories: CategoryModel[] = useSelector((state: RootState) => state.category);

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        console.log(data);
        dispatch(setCategories(data));
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    fetchCategories();

    const token = localStorage.getItem('token');

    if (token) {
      dispatch(logIn(token));
    }

  }, [dispatch]);

  return (
    <>
      <Navbar categories={categories} />
      <main>{children}</main>
      <Footer />
    </>
  );
}


export default Layout;
