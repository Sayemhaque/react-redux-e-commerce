/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/feature/cartSlice";
import {FaPlusCircle,FaMinusCircle} from "react-icons/fa"

const QuantityAdjustment = ({item}) => {
    const dispatch = useDispatch()
    return (
        <td className="bg-purple-400 bg-opacity-75 rounded-full px-2 p-1 md:p-2">
            <div className="flex justify-center items-center gap-5">
                <p className='text-md md:text-2xl cursor-pointer'
                    onClick={() => dispatch(increaseQuantity(item._id))}><FaPlusCircle/></p>
                {item.quantity}
                <p className='text-md md:text-2xl cursor-pointer'
                    onClick={() => dispatch(decreaseQuantity(item._id))}><FaMinusCircle/></p>
            </div>
        </td>
    );
};

export default QuantityAdjustment;