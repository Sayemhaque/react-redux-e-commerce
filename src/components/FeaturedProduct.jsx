import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";
import { useGetAllProductsQuery } from "../redux/feature/api/baseApi";
import { Toaster } from "react-hot-toast";

const FeaturedProduct = () => {
    const { data: allProducts, isLoading } = useGetAllProductsQuery()
    if (isLoading) {
        return <p className="text-center text-2xl font-bold font-serif">Loading.....</p>
    }
    return (
        <section>
            <SectionTitle
                title={"Featured Product"}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 md:max-w-6xl 
            mx-auto py-12 px-3  md:px-3">
                {allProducts?.products.map(product =>
                    <FeatureProductCard
                        key={product.id}
                        product={product} />)}
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </section>
    );
};

export default FeaturedProduct;
