/* eslint-disable no-import-assign */
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ProductCard from "../../Products/ProductCard";
import SectionTitle from "../../../components/SectionTitle";

const TrendingProducts = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {
        fetch("trending.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    },)

    return (
        <section className="w-full bg-slate-300 min-h-screen">
            <SectionTitle title={"Trending Products"}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:max-w-6xl mx-auto px-3">
                {products?.map(product =>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    );
};

export default TrendingProducts;

