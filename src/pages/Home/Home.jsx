import FeaturedProduct from "../../components/FeaturedProduct";
import HeroSection from "../../components/Hero";
import Modal from "../../components/Modal";
import ProductCategories from "../../components/ProductCategories";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
// import Review from "../../components/Review";

const Home = () => {
    return (
        <div className="bg-slate-300">
          <HeroSection/>
          <Modal/>
          <ProductCategories/>
          <TrendingProducts/>
          <FeaturedProduct/>
          {/* <Review/> */}
        </div>
    );
};

export default Home;