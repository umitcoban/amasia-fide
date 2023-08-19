import { GetServerSideProps } from "next";
import DUMMY_PRODUCTS from "@/datas/dummy-data/dummy-products";
import CartForm from "@/components/Cart/CartForm";
export interface CartItem{
    name: string,
    description: string,
    qty: number,
    price: number,
    image: string
}

interface Props {
    data: CartItem[]
}

const ShoppingCart: React.FC<Props> = ({ data }: Props) => {
    return (
        <>
            <CartForm data={data} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const fetchedData = DUMMY_PRODUCTS;
    const data: CartItem[] = fetchedData.map((product) => {
        return {
            name: product.name,
            image: product.image,
            description: product.description,
            price: product.price,
            qty: 1
        }
    })
    return {
        props: {
            data
        }
    }

}

export default ShoppingCart;