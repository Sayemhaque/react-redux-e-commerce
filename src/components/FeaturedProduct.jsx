import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";
import { useGetFeatureProductsQuery } from "../redux/feature/api/baseApi";

const FeaturedProduct = () => {
    const {data:products,isLoading} = useGetFeatureProductsQuery()
    console.log(products)
    if(isLoading){
        return <p className="text-center text-2xl font-bold font-serif">Loading.....</p>
    }
    return (
        <section>
            <SectionTitle
                title={"Featured Product"}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:max-w-6xl 
            mx-auto py-12 px-5 md:px-0">
                {products?.map(product =>
                    <FeatureProductCard
                        key={product.id}
                        product={product} />)}
            </div>
        </section>
    );
};

export default FeaturedProduct;
