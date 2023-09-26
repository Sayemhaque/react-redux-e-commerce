/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useGetCategoryiesQuery } from "../redux/feature/api/baseApi";

const FilterProduct = ({ setCategory, setPrice }) => {
  const [active, setActive] = useState("All");
  const {data:categories} = useGetCategoryiesQuery()
  
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setActive(e.target.value);
  };
 
  const handleSetPrice = (e) => {
    const selectedPriceRange = e.target.value;
    const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
    setPrice({ minPrice, maxPrice });
  }
 
  return (
    <div className="relative bg-purple-800 bg-opacity-75">
      <div className="md:h-20"></div> {/* Adjust the height as needed */}
      <div className="sticky top-20 flex flex-col gap-8 py-5 px-3 ">
        <h4 className="text-2xl font-bold text-white text-center">Categories</h4>
        <aside className="flex md:flex-col gap-2  text-center md:gap-5">
          <select
            className=" py-2 px-4 text-white
             bg-purple-800 bg-opacity-90"
            value={active}
            onChange={handleCategoryChange}
          >
            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className=" 
          w-full py-2 px-4 text-white bg-purple-800 bg-opacity-90"
            onChange={handleSetPrice}
          >
            <option value="">Price</option>
            <option value="1-50">1-50</option>
            <option value="51-100">51-100</option>
            <option value="101-200">101-200</option>
            <option value="201-300">201-300</option>
            <option value="401-500">401-500</option>
            <option value="501-750">501-750</option>
            <option value="751-1000">751-1000</option>
            <option value="1001-2000">1001-2000</option>
          </select>
        </aside >
      </div>
    </div>
  );
};

export default FilterProduct;
