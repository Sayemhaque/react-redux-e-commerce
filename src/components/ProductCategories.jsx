import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useGetCategoryiesQuery } from "../redux/feature/api/baseApi";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";

const ProductCategories = () => {
  const { data: categories } = useGetCategoryiesQuery();
  const containerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="bg-slate-300 text-white py-6">
      <div className="container mx-auto">
        <SectionTitle title={"Product Categories"} />
        <div
          ref={containerRef}
          className="flex overflow-x-hidden gap-5 mt-1 md:mt-7 p-4 md:max-w-5xl mx-auto"
          style={{ scrollbarWidth: "none", WebkitScrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {categories?.map((category) => (
            <ul key={category.id}>
              <li className="bg-purple-800 bg-opacity-80 p-4 rounded-md">
                <p className="font-medium text-md md:text-3xl w-full" style={{ whiteSpace: 'nowrap' }}>
                  {category}
                </p>
              </li>
            </ul>
          ))}
        </div>
        <div className="flex justify-center mt-2 text-5xl gap-4 cursor-pointer">
          <FaArrowAltCircleLeft  onClick={() => handleScroll(-300)}/>
          <FaArrowAltCircleRight  onClick={() => handleScroll(300)} />
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
