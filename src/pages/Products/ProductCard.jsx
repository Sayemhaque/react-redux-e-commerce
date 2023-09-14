/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {FaShoppingCart,FaRegHeart,FaEye, FaRegStar, FaStar} from "react-icons/fa"
import { addToCart } from "../../redux/feature/cartSlice";
import Rating from "react-rating";
const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className="cursor-pointer bg-purple-600 bg-opacity-70 w-full
         hover:scale-105 duration-500 text-white shadow-md rounded-lg overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-40 md:h-64 object-cover" />
        <div className="px-1 md:px-4 py-7">
            <h2 className="text-md md:text-2xl font-semibold hidden ">
                {product.title.substring(0,25)}...</h2>
           <div className="mr-5 pb-2">
           <p
            className="uppercase bg-purple-900 text-sm md:text-md font-semibold
             inline-block px-1 md:px-3 sm:w-auto">
                {product.category}
            </p>
           </div>
            <Rating
            readonly
            placeholderRating={product.rating.rate}
            emptySymbol={<FaRegStar className="text-yellow-400 text-sm md:text-md"/>}
            placeholderSymbol={<FaStar className="text-yellow-400 text-sm md:text-md"/>}
            fullSymbol={"s"}
          />
           <p className="md:hidden mt-3 min-w-4/12 w-4/12 bg-purple-900 text-sm font-semibold  px-3">${product.price}</p>
           <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
           <div className="text-xl flex items-center gap-2 justify-start">
           <FaShoppingCart className="bg-purple-400  bg-opacity-60 w-10 h-10 p-2  rounded-full"  onClick={() => dispatch(addToCart(product))}/>
           <FaRegHeart className="bg-purple-400  bg-opacity-60 w-10 h-10 p-2  rounded-full"/>
           <FaEye className="bg-purple-400  bg-opacity-60 w-10 h-10 p-2 rounded-full"/>
          </div>
            <p className="hidden  bg-purple-900 text-sm font-semibold md:inline-block px-3">${product.price}</p>
            
           </div>
        </div>
    </div>
    );
};

export default ProductCard;