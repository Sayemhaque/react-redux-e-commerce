import { useParams } from "react-router-dom"
import { useGetSingleProductQuery } from "../../redux/feature/api/baseApi";
import ProductRating from "../../components/ProductRating";
import AddToCart from "../../components/AddToCart";
const ProductDetails = () => {
  const { id } = useParams()
  const { data: product,isLoading } = useGetSingleProductQuery({ id })
  if(isLoading) {
    return <p className="text-3xl font-bold flex justify-center items-center h-screen">Loading...</p>
  }
  return (
    <div className="bg-purple-800 md:py-12 md:px-5 min-h-screen">
      <div className="md:max-w-6xl mx-auto md:flex md:items-center bg-purple-500 bg-opacity-60 gap-5 pb-2 md:pb-0 
      rounded-b-3xl md:rounded-md overflow-hidden">
        <div >
          <img className="h-[20rem] w-full md:h-auto md:w-auto"
           src={product?.thumbnail} alt="" />
        </div>
        <div className="space-y-6 py-8 md:py-4 px-3 text-white">
          <h2 className="text-3xl text-white font-bold">{product?.title}</h2>
          <h4 className="text-md w-10/12 text-white">{product?.description}</h4>
          <div className="flex items-center gap-3">
          <p className="text-sm text-gray-200"><s>${product?.price}</s></p>
          <p className="text-md font-bold text-white">${product?.price * 
          (product?.discountPercentage / 100).toFixed(2)}</p>
          <ProductRating product={product}/>
          </div>
        <AddToCart product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;