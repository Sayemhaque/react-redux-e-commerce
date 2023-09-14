import { useSelector } from "react-redux";
import FeatureProductCard from "../../components/FeatureProductCard";

const FavouriteProduct = () => {
    const {favouriteProduct} = useSelector((state) => state.favProductSlice)
    return (
        <div className="grid grid-cols-2 gap-5 py-12 px-3">
            {favouriteProduct.length < 1 ? "no product" :
            favouriteProduct.map(product => 
            <FeatureProductCard key={product.id} product={product}/> )}
        </div>
    );
};

export default FavouriteProduct;