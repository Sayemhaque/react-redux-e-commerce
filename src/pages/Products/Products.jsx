/* eslint-disable no-import-assign */
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";
import {  useGetAllProductsQuery, useGetProductsByCategoryQuery,} from "../../redux/feature/api/baseApi";
import { useState } from "react";

const Products = () => {
    const [category,setCategory] = useState("All")
    const {data:catProducts,isLoading} = 
    useGetProductsByCategoryQuery({category})
    const {data:allProducts ,isLoading:loadingAllProudcts} = useGetAllProductsQuery()
    console.log(allProducts?.products)
    // filtering the products
    let filteredProduct;
    filteredProduct = category === "All" ? allProducts?.products : catProducts?.products;

   if(loadingAllProudcts){
    return <p className="text-center text-2xl font-bold font-serif">Loading.....</p>
}
   if(isLoading){
    return <p className="text-center text-2xl font-bold font-serif text-white">Loading.....</p>
}
    return (
        <section className="grid grid-cols-1 md:grid-cols-5 bg-slate-900 min-h-screen">
            <FilterProduct setCategory={setCategory}/>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 
             md:gap-8 py-12 md:col-span-4 px-3">
            {
                filteredProduct.
                map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        </section>
    );
};

export default Products;