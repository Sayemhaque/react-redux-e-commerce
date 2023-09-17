/* eslint-disable no-import-assign */
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";
import { useGetAllProductsQuery, useGetProductsByCategoryQuery, } from "../../redux/feature/api/baseApi";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Products = () => {
    const [category, setCategory] = useState("All")
    const [price, setPrice] = useState({ minPrice: 0, maxPrice: 0 })
    const { data: catProducts, isLoading } =
        useGetProductsByCategoryQuery({ category })
    const { data: allProducts, isLoading: loadingAllProudcts } = useGetAllProductsQuery()

    let filteredProduct;
    if (category === "All") {
        filteredProduct = allProducts?.products;
    } else {
        filteredProduct = catProducts?.products.filter(
            (product) => product.category === category
        );
    }

    if (price.minPrice > 0) {
        filteredProduct = filteredProduct?.filter(
            (product) =>
                product.price >= price.minPrice && product.price <= price.maxPrice
        );
    }

    return (
        <section className="w-full bg-slate-900 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <FilterProduct setCategory={setCategory} setPrice={setPrice} />
                <div className="grid grid-cols-2   md:grid-cols-2 lg:grid-cols-3 gap-3 
             md:gap-8 py-12 md:col-span-4 px-3">
                    {loadingAllProudcts || isLoading ? (
                        <p className="md:mx-auto pl-56 md:pl-96 text-2xl font-bold font-serif text-white">
                            Loading.....
                        </p>
                    ) : filteredProduct && filteredProduct.length > 0 ? (
                        filteredProduct.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="w-full text-lg font-bold font-serif text-white">
                            No products found in the selected category and price range.
                        </p>
                    )}
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    );
};

export default Products;

