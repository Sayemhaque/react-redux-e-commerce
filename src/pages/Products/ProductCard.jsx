/* eslint-disable react/prop-types */
import { FaRegHeart, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToFavourite } from "../../redux/feature/favProductSlice";
import { Link } from "react-router-dom";
import AddToCart from "../../components/AddToCart";
import ProductRating from "../../components/ProductRating";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div
            className="cursor-pointer bg-purple-600 bg-opacity-70
             w-full hover:scale-105 duration-500 text-white shadow-md 
             rounded-lg relative overflow-hidden">
            <img src={product?.thumbnail} alt={product?.title}
                className="w-full h-40 md:h-64 object-conver" />
            <div className="absolute top-3 left-3">
                <p className="uppercase bg-purple-900 
                  text-sm md:text-md font-semibold
                 inline-block px-1 md:px-3 sm:w-auto">
                    {product?.category}
                </p>
            </div>
            <div className="px-1 md:px-4 py-5 space-y-3">
                <p className="text-sm md:text-lg font-bold ">{product?.title}</p>
                <ProductRating product={product} />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
                    <div className="text-xl flex  md:items-center gap-2 justify-start">
                        <AddToCart product={product} />
                        <Link to={`/product/${product._id}`}>
                            <FaArrowAltCircleRight title="see details"
                                className="bg-purple-400 bg-opacity-60
                              w-10 h-10 p-2 rounded-full" />
                        </Link>
                        <FaRegHeart title="make favourite"
                            onClick={() => dispatch(addToFavourite(product))}
                            className="absolute top-3 right-3 bg-purple-800  w-8 h-8 md:w-10 md:h-10
                        md:p-2 p-1 rounded-full" />
                    </div>
                    <div className="absolute bottom-44 md:bottom-52 right-4">
                        <p
                            className="bg-purple-900 text-sm md:text-lg font-semibold md:inline-block px-3">${product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
