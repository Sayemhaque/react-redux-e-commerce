import { FaArrowAltCircleRight, FaRegHeart, FaRegStar, FaStar, } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Rating from "react-rating";
import { addToFavourite } from "../redux/feature/favProductSlice";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
/* eslint-disable react/prop-types */
function FeatureProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div
      className="cursor-pointer bg-purple-600 bg-opacity-70
     w-full hover:scale-105 duration-500 text-white shadow-md rounded-lg relative overflow-hidden">
      <img src={product.thumbnail} alt={product.title}
        className="w-full h-40 md:h-64 object-cover" />
      <div className="absolute top-3 left-3">
        <p className="uppercase bg-purple-900 text-sm md:text-md font-semibold inline-block px-1 md:px-3 sm:w-auto">
          {product.category}
        </p>
      </div>
      <div className="px-1 md:px-4 py-5 space-y-3">
        <p className="text-xs md:text-lg font-bold ">{product.title}</p>
        <Rating
          readonly
          placeholderRating={product.rating}
          emptySymbol={<FaRegStar className="text-yellow-400 text-sm md:text-md" />}
          placeholderSymbol={<FaStar className="text-yellow-400 text-sm md:text-md" />}
          fullSymbol={"s"}
        />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
          <div className="text-xl flex items-center gap-2 justify-start">
            <AddToCart product={product}/>
            <FaRegHeart onClick={() => dispatch(addToFavourite(product))}
              className="absolute top-3 right-3 bg-purple-800  w-8 h-8 md:w-10 md:h-10
             md:p-2 p-1 rounded-full" />
            <Link to={`/product/${product._id}`}>
              <FaArrowAltCircleRight title="see  details" className="bg-purple-400 bg-opacity-60 w-10 h-10 p-2 rounded-full" />
            </Link>
          </div>
          <div className="absolute bottom-44 md:bottom-52 right-4">
            <p
              className="bg-purple-900 text-sm md:text-lg font-semibold md:inline-block px-3">${product.price}</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FeatureProductCard;
