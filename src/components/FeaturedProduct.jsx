import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";
import {  useGetAllProductsQuery} from "../redux/feature/api/baseApi";

const FeaturedProduct = () => {
    const {data:allProducts,isLoading} = useGetAllProductsQuery()
    if(isLoading){
        return <p className="text-center text-2xl font-bold font-serif">Loading.....</p>
    }
    return (
        <section>
            <SectionTitle
                title={"Featured Product"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 md:max-w-6xl 
            mx-auto py-12 px-3 space-y-4 md:px-0">
                {allProducts?.products.map(product =>
                    <FeatureProductCard
                        key={product.id}
                        product={product} />)}
            </div>
        </section>
    );
};

export default FeaturedProduct;
