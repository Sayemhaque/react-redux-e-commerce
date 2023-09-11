import useManageQuantity from "../hooks/useManageQuantity";

const ProductQuantity = () => {
    const [increaseQuantity, decreaseQuantity, quantity] = useManageQuantity(1)
    return (
        <div className="flex justify-center items-center gap-5">
        <p className='text-2xl cursor-pointer' onClick={increaseQuantity}>+</p>
         {quantity}
         <p className='text-2xl cursor-pointer' onClick={decreaseQuantity}>-</p>
        </div>
    );
};

export default ProductQuantity;