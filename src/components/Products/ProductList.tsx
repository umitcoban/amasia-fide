import ProductCard from "./ProductCard";
import DUMMY_PRODUCTS from "../../datas/dummy-data/dummy-products";
const ProductList = () => {
    return (
        <>
            <div className="flex space-x-6 ml-3">
                {DUMMY_PRODUCTS.map((product, index) => {
                    return <ProductCard key={index}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        discount={product.discount} />
                })}
            </div>
        </>
    )
}

export default ProductList;