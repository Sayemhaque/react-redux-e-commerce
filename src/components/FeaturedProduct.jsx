import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";
import { Toaster } from "react-hot-toast";
import { useGetFeatureQuery } from "../redux/feature/api/baseApi";
import Loading from "./Loading";

const FeaturedProduct = () => {
  const { data: products, isLoading } = useGetFeatureQuery()
  if (isLoading) {
    return <Loading />
  }
  return (
    <section>
      <SectionTitle
        title={"Featured Product"}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 md:max-w-6xl mx-auto px-3 pb-5">
        {products?.map(product =>
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
