/* eslint-disable no-import-assign */
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";
import { useGetProductsByCategoryQuery } from "../../redux/feature/api/baseApi";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading";

const Products = () => {
    const [category, setCategory] = useState("All")
    const [price, setPrice] = useState({ minPrice: 0, maxPrice: 0 })
    const { data: products, isLoading } =
        useGetProductsByCategoryQuery({ category })

    const filterProduct = price.minPrice === 0 ? products : products.filter(product => product.price >= price.minPrice && product.price <= price.maxPrice)

    return (
        <section className="w-full bg-slate-300 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <FilterProduct setCategory={setCategory} setPrice={setPrice} />
                <div className="grid grid-cols-2   md:grid-cols-2 lg:grid-cols-3 gap-3 
             md:gap-8 py-12 md:col-span-4 px-3 w-full">
                  {isLoading && <div className="col-span-3"><Loading /></div>}
                    {filterProduct?.length <  1 ? <p className="text-center text-2xl col-span-3">No Products found</p>
                    :filterProduct?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
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

