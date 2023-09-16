import { FaEye, FaRegHeart, FaRegStar, FaShoppingCart, FaStar, } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/feature/cartSlice";
import  Rating from "react-rating";
import { addToFavourite } from "../redux/feature/favProductSlice";
/* eslint-disable react/prop-types */
function FeatureProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div
      className="cursor-pointer bg-purple-600 bg-opacity-70
     w-full hover:scale-105 duration-500 text-white shadow-md rounded-lg relative">
      <img src={product.thumbnail} alt={product.title}
        className="w-full h-40 md:h-64 object-cover" />
      <div className="absolute top-3 left-3">
        <p className="uppercase bg-purple-900 text-sm md:text-md font-semibold inline-block px-1 md:px-3 sm:w-auto">
          {product.category}
        </p>
      </div>
      <div className="px-1 md:px-4 py-7">
        <Rating
          readonly
          placeholderRating={product.rating}
          emptySymbol={<FaRegStar className="text-yellow-400 text-sm md:text-md" />}
          placeholderSymbol={<FaStar className="text-yellow-400 text-sm md:text-md" />}
          fullSymbol={"s"}
        />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
          <div className="text-xl flex items-center gap-2 justify-start">
            <FaShoppingCart 
            className="bg-purple-400 bg-opacity-60 w-10 h-10 p-2 rounded-full"
             onClick={() => dispatch(addToCart(product))} />
            <FaRegHeart onClick={() => dispatch(addToFavourite(product))} 
            className="bg-purple-400 bg-opacity-60 w-10 h-10 p-2 rounded-full" />
            <FaEye className="bg-purple-400 bg-opacity-60 w-10 h-10 p-2 rounded-full" />
          </div>
          <div className="absolute bottom-40 right-4">
            <p
              className="bg-purple-900 text-sm md:text-lg font-semibold md:inline-block px-3">${product.price}</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FeatureProductCard;
