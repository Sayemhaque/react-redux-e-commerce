import FeatureProductCard from "./FeatureProductCard";
import SectionTitle from "./SectionTitle";
import { useGetAllProductsQuery } from "../redux/feature/api/baseApi";
import { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";

const FeaturedProduct = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery()
  const [visibleProducts, setVisibleProducts] = useState(6)
  const textRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((items) => {
      if (items[0].isIntersecting) {
        // "see more" element is in view, load more products
        setVisibleProducts((prevCount) => prevCount + 6); // Load 6 more products
      }
      console.log(items);
    });
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    console.log(textRef.current);
    return () => {
      observer.disconnect();
    };
  }, [textRef]);
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
        {allProducts?.products.slice(0, visibleProducts).map(product =>
          <FeatureProductCard
            key={product.id}
            product={product} />)}
      </div>
      <p ref={textRef} className="text-white text-center">see more</p>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </section>
  );
};

export default FeaturedProduct;
