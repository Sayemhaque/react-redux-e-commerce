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
        <div className="relative ">
            <div className="h-20"></div> {/* Adjust the height as needed */}
            <div className="sticky top-20 flex flex-col gap-8 py-5 px-3 shadow-md">
                <h4 className="text-2xl font-bold text-white">Filter Products</h4>
                <select className="w-2/12 md:w-6/12" onChange={(e) => handleCategory(e.target.value)} value={active}>
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterProduct;
