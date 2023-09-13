import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import FilterProduct from "../../components/FilterProduct";

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <section className="bg">
            <FilterProduct/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 md:max-w-6xl mx-auto">
            {
                products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </div>
        </section>
    );
};

export default Products;