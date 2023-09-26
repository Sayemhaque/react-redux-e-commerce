/* eslint-disable no-import-assign */
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";
import {useGetProductsByCategoryQuery} from "../../redux/feature/api/baseApi";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading";

const Products = () => {
    const [category, setCategory] = useState("All")
    // const [price, setPrice] = useState({ minPrice: 0, maxPrice: 0 })
    const { data: catProducts, isLoading } =
        useGetProductsByCategoryQuery({ category })
 
    if(isLoading) {
        return <Loading/>
    }

    return (
        <section className="w-full bg-slate-300 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <FilterProduct setCategory={setCategory}  />
                <div className="grid grid-cols-2   md:grid-cols-2 lg:grid-cols-3 gap-3 
             md:gap-8 py-12 md:col-span-4 px-3">
                    {catProducts?.map((product) => (
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

