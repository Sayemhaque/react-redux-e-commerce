/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import QuantityAdjustment from "../../components/QuantityAdjustment"
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../../redux/feature/cartSlice";
import ProductRating from "../../components/ProductRating";
const CartCard = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className="bg-purple-600 bg-opacity-80 
        text-white flex items-center gap-3  md:gap-5 lg:gap-12 mb-5 rounded-xl overflow-hidden shadow-lg">
            <img className="w-4/12 h-32 sm:w-4/12 sm:h-44 md: md:h-72" src={product.thumbnail} alt="" />
            <div className="py-2 space-y-4">
                <p className="font-bold text-md md:text-2xl font-serif">{product.title}</p>
                <ProductRating product={product} />
                <div className="flex items-center  gap-2">
                    <QuantityAdjustment item={product} />
                    <p className="font-bold text-sm md:text-md">${product.price * product.quantity}</p>
                    <FaTrash className="cursor-pointer text-gray-300"
                        onClick={() => dispatch(removeProductFromCart(product._id))} />
                </div>

            </div>
        </div>
    );
};

export default CartCard;