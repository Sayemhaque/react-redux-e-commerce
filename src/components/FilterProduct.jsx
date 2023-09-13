/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./Button";

const FilterProduct = ({ setCategory }) => {
    const [categories, setCategories] = useState([])
    const [active,setActive] = useState("All")

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(data => setCategories(["All", ...data,]))
    }, [])
    const handleCategory = (categoryName) => {
        setCategory(categoryName)
        setActive(categoryName)
    }
    return (
        <div className="relative ">
            <div className="h-20"></div> {/* Adjust the height as needed */}
            <div className="sticky top-20 flex flex-col gap-8 py-5 px-3  shadow-md">
                <h4 className="text-2xl font-bold text-white">Filter Products</h4>
                {categories.map(category =>
                     <Button 
                     style={`${active === category ? "bg-black" : "bg-purple-600 bg-opacity-90"}`}
                     onClick={() => handleCategory(category)}
                     key={category.id} title={category} />)}
            </div>
        </div>

    );
};

export default FilterProduct;