/* eslint-disable no-import-assign */
import { Toaster } from "react-hot-toast";
import ProductCard from "../../Products/ProductCard"
import SectionTitle from "../../../components/SectionTitle";
import { useGetTrendingQuery } from "../../../redux/feature/api/baseApi";
import Loading from "../../../components/Loading";

const TrendingProducts = () => {
    const { data: products,isLoading } = useGetTrendingQuery()
    if(isLoading){
        return <Loading/>
    }
    return (
        <section className="w-full bg-slate-300 min-h-screen">
            <SectionTitle title={"Trending Products"} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:max-w-6xl mx-auto px-3">
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

