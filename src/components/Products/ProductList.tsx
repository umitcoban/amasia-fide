import ProductCard from "./ProductCard";
import DUMMY_PRODUCTS from "../../datas/dummy-data/dummy-products";
const ProductList = () => {
    return (
        <>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 space-x-6">
                <div className="grid grid-cols-1 gap-x-12 lg:gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                    {DUMMY_PRODUCTS.map((product, index) => {
                        return <ProductCard key={index}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            discount={product.discount} />
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductList;