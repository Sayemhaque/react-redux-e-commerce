import { useState } from "react";

const useManageQuantity = (initialQuantity) => {
    const [quantity,setQuantity] = useState(initialQuantity)

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
    }
    const decreaseQuantity = () => {
        setQuantity((prev) => prev - 1)
    }
    return [increaseQuantity,decreaseQuantity,quantity]
};

export default useManageQuantity;