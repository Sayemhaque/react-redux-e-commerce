
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavouriteIcon = () => {
    const {favouriteProduct} = useSelector((state) => state.favProductSlice)
    return (
        <Link to='favourite'>
        <div className='relative '>
              <div className='text-white text-xl bg-purple-400 p-2 rounded-full bg-opacity-60'><FaRegHeart /></div>
              <p className='text-sm absolute -top-3 -right-3 bg-red-400 text-white w-5 h-5 flex justify-center items-center rounded-full'>{favouriteProduct.length}</p>
          </div>
          </Link>
    );
};

export default FavouriteIcon;