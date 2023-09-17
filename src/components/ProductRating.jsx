/* eslint-disable react/prop-types */
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const ProductRating = ({product}) => {
    return (
        <Rating
        readonly
        placeholderRating={product?.rating}
        emptySymbol={<FaRegStar className="text-yellow-400 text-sm md:text-md" />}
        placeholderSymbol={<FaStar className="text-yellow-400 text-sm md:text-md" />}
        fullSymbol={"s"}
    />
    );
};

export default ProductRating;