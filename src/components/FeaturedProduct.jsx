import { useEffect, useState } from "react";
import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";

const FeaturedProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        try {
            fetch("featured.json")
                .then(res => res.json())
                .then(data => setProduct(data))
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log(product)
    return (
        <section>
            <SectionTitle
                title={"Featured Product"}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:max-w-6xl 
            mx-auto py-12 px-5 md:px-0">
                {product?.map(product =>
                    <FeatureProductCard
                        key={product.id}
                        product={product} />)}
            </div>
        </section>
    );
};

export default FeaturedProduct;
