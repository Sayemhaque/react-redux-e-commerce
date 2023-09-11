import FeaturedProduct from "../../components/FeaturedProduct";
import HeroSection from "../../components/Hero";
import ProductCategories from "../../components/ProductCategories";
// import Review from "../../components/Review";

const Home = () => {
    return (
        <div className="bg">
          <HeroSection/>
          <ProductCategories/>
          <FeaturedProduct/>
          {/* <Review/> */}
        </div>
    );
};

export default Home;