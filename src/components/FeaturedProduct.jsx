import { useEffect, useState } from "react";
import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";
import { Toaster } from "react-hot-toast";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch("featured.json")
          .then(res => res.json())
          .then(data => setProducts(data))
  },)

  return (
    <section>
      <SectionTitle
        title={"Featured Product"}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 md:max-w-6xl 
            mx-auto py-12 px-3  md:px-3">
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
