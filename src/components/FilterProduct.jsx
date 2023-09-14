/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const FilterProduct = ({ setCategory}) => {
    const [categories, setCategories] = useState([]);
    const [active, setActive] = useState("All");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(["All", ...data]))
    }, []);

    const handleCategory = (categoryName) => {
        setCategory(categoryName);
        setActive(categoryName);
    };
    return (
        <div className="relative bg-purple-800 bg-opacity-75">
            <div className="h-20"></div> {/* Adjust the height as needed */}
            <div className="sticky top-20 flex flex-col gap-8 py-5 px-3 ">
                <h4 className="text-2xl font-bold text-white text-center">Categories</h4>
                <aside className="flex flex-row flex-wrap md:flex-col gap-2  text-center md:gap-5">
                    {categories.map((category) => (
                        <p 
                        className={`${active === category ? " bg-purple-400  bg-opacity-60 duration-500 ease-out rounded-lg" : ""} p-2 text-sm md:text-md text-white font-bold  cursor-pointer capitalize pb-2 mx-auto`}
                        onClick={() => handleCategory(category)} 
                        key={category}>{category}</p>
                    ))}
                </aside>
            </div>
        </div>
    );
};

export default FilterProduct;
