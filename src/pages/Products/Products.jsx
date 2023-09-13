import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";

const Products = () => {
    const [products,setProducts] = useState([])
    const [category,setCategory] = useState("All")
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // filtering the products
    let filteredProduct;
    filteredProduct = category === "All" ? products :
   products.filter(product => product.category === category) ;

    return (
        <section className="grid grid-cols-1 md:grid-cols-5 bg">
            <FilterProduct setCategory={setCategory}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 py-12 md:col-span-4 px-5">
            {
                filteredProduct.
                map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        </section>
    );
};

export default Products;