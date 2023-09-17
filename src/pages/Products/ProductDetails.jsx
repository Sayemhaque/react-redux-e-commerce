import {useParams} from "react-router-dom"
import { useGetSingleProductQuery } from "../../redux/feature/api/baseApi";
const ProductDetails = () => {
    const {id} = useParams()
    const {data : product} = useGetSingleProductQuery({id})
    console.log(product)
    return (
        <div>
           <img src={product?.thumbnail} alt="" />
        </div>
    );
};

export default ProductDetails;