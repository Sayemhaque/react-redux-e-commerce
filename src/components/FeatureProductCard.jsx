import { FaShoppingCart } from "react-icons/fa";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/feature/cartSlice";

/* eslint-disable react/prop-types */
function FeatureProductCard({ product }) {
    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className="cursor-pointer bg-purple-600 bg-opacity-70 w-full hover:scale-105 duration-500 text-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />

            <div className="px-4 py-8 space-y-4">
                <h2 className="text-2xl font-semibold ">{product.name}</h2>
                <p className=""><span className="font-bold">Rating: </span>{product.rating}</p>
               <div className="flex items-center justify-between">
               <Button
                title={`Add to cart`}
                icon={<FaShoppingCart/>}
                onClick={() =>handleAddToCart(product)}
                />
                <p className="text-lg text-right font-semibold">${product.price}</p>
               </div>
            </div>
        </div>
    );
}

export default FeatureProductCard;
