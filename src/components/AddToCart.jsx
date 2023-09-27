/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/feature/cartSlice';
import Button from './Button';

const AddToCart = ({product}) => {
    console.log(product)
    const dispatch = useDispatch()
    return (
        <Button
         title="🛒Cart" 
         style={"shadow-lg bg-purple-900  rounded-full py-3 px-5 text-sm md:text-md w-full"}
         onClick={() => dispatch(addToCart(product))} />
    );
};

export default AddToCart;