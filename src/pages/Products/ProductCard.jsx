/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import {FaShoppingCart} from "react-icons/fa"
import { addToCart } from "../../redux/feature/cartSlice";
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className="cursor-pointer bg-purple-600 bg-opacity-70 w-full hover:scale-105 duration-500 text-white shadow-md rounded-lg overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />

        <div className="px-4 py-8 space-y-4">
            <h2 className="text-2xl font-semibold ">{product.title.substring(0,25)}...</h2>
            <p className=""><span className="font-bold">Rating: </span>{product.rating.rate}</p>
           <div className="flex items-center justify-between">
           <Button
            title={`Add to cart`}
            style={"bg-black flex items-center"}
            icon={<FaShoppingCart/>}
            onClick={() => dispatch(addToCart(product))}
            />
            <p className="text-lg text-right  font-semibold">${product.price}</p>
           </div>
        </div>
    </div>
    );
};

export default ProductCard;