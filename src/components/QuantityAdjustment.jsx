/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../redux/feature/cartSlice";

const QuantityAdjustment = ({item}) => {
    const dispatch = useDispatch()
    return (
        <td className="border px-4 py-2">
            <div className="flex justify-center items-center gap-5">
                <p className='text-2xl cursor-pointer border p-2'
                    onClick={() => dispatch(increaseQuantity(item.id))}>➕</p>
                {item.quantity}
                <p className='text-2xl cursor-pointer border p-2'
                    onClick={() => dispatch(decreaseQuantity(item.id))}>➖</p>
            </div>
        </td>
    );
};

export default QuantityAdjustment;