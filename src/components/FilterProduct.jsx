import { useEffect, useState } from "react";
import Button from "./Button";

const FilterProduct = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {products.map(product => <Button key={product.id} title={product.category}/>)}
        </div>
    );
};

export default FilterProduct;