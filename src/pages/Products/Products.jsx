/* eslint-disable no-import-assign */
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";
import { useGetProductsQuery } from "../../redux/feature/api/baseApi";
import { useState } from "react";

const Products = () => {
    const [category,setCategory] = useState("All")
    const {data:products,isLoading} = useGetProductsQuery()
    // filtering the products
    let filteredProduct;
    filteredProduct = category === "All" ? products :
   products.filter(product => product.category === category) ;

   if(isLoading){
    return <p className="text-center text-2xl font-bold font-serif">Loading.....</p>
}
    return (
        <section className="grid grid-cols-1 md:grid-cols-5 bg-slate-900">
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