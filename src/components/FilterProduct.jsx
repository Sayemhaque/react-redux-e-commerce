/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FilterProduct = ({ setCategory}) => {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("All");

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(["All",...data]))
    }, []);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setActive(e.target.value);
    };
    return (
        <div className="relative bg-purple-800 bg-opacity-75">
            <div className="h-20"></div> {/* Adjust the height as needed */}
            <div className="sticky top-20 flex flex-col gap-8 py-5 px-3 ">
                <h4 className="text-2xl font-bold text-white text-center">Categories</h4>
                <aside className="flex flex-row flex-wrap md:flex-col gap-2  text-center md:gap-5">
                <select
            className="block w-md md:w-full py-2 px-4 text-white bg-purple-800 bg-opacity-90"
            value={active}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option  key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
                </aside>
            </div>
        </div>
    );
};

export default FilterProduct;
