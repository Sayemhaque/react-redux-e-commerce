/* eslint-disable react/prop-types */
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartIcon = ({totalQuantity}) => {
    return (
        <Link  to='cart'>
        <div className={`relative`}>
              <div className='text-white text-xl bg-purple-400 p-2 rounded-full bg-opacity-60'><FaShoppingBag /></div>
              <p className='text-sm absolute -top-3 -right-3 bg-red-400 text-white w-5 h-5 flex justify-center items-center rounded-full'>{totalQuantity}</p>
          </div>
          </Link> 
    );
};

export default CartIcon