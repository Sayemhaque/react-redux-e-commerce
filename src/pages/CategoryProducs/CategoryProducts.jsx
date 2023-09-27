import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../../redux/feature/api/baseApi";
import ProductCard from "../Products/ProductCard";
import Loading from "../../components/Loading";
import SectionTitle from "../../components/SectionTitle";

const CategoryProducts = () => {
    const { category } = useParams()
    const { data: products,isLoading } = useGetProductsByCategoryQuery({category})
    if(isLoading) {
        return <Loading/>
    }
    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="md:max-w-5xl mx-auto">
           <div className="pt-12">
           <SectionTitle title={category}/>
           </div>
            <div className="grid grid-cols-2   md:grid-cols-2 lg:grid-cols-3 gap-3 
             md:gap-8 py-12 md:col-span-4 px-3">
                {products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default CategoryProducts;