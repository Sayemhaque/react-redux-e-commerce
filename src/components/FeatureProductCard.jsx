import { FaEye, FaRegHeart, FaRegStar, FaShoppingCart, FaStar, } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/feature/cartSlice";
import Rating from "react-rating";
/* eslint-disable react/prop-types */
function FeatureProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="cursor-pointer bg-purple-600 bg-opacity-70 w-full hover:scale-105 duration-500 text-white shadow-md rounded-lg overflow-hidden">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />

      <div className="px-4 py-7">
        <h2 className="text-md md:text-2xl font-semibold hidden ">
          {product.title.substring(0, 25)}...</h2>
        <div className="mr-5 pb-2">
          <p className="uppercase bg-purple-900 text-sm font-semibold inline-block px-3">{product.category}</p>
        </div>
        <Rating
          readonly
          placeholderRating={product.rating.rate}
          emptySymbol={<FaRegStar className="text-yellow-400" />}
          placeholderSymbol={<FaStar className="text-yellow-400" />}
          fullSymbol={"s"}
        />
        <p className="md:hidden mt-3 w-3/12 bg-purple-900 text-sm font-semibold  px-3">${product.price}</p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
          <div className="text-xl flex items-center gap-2 justify-between">
            <FaShoppingCart onClick={() => dispatch(addToCart(product))} />
            <FaRegHeart />
            <FaEye />
          </div>
          <p className="hidden  bg-purple-900 text-sm font-semibold md:inline-block px-3">${product.price}</p>

        </div>
      </div>
    </div>
  );
}

export default FeatureProductCard;
