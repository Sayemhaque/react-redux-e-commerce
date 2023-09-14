import FeaturedProduct from "../../components/FeaturedProduct";
import HeroSection from "../../components/Hero";
import Modal from "../../components/Modal";
import ProductCategories from "../../components/ProductCategories";
// import Review from "../../components/Review";

const Home = () => {
    return (
        <div className="bg">
          <HeroSection/>
          <Modal/>
          <ProductCategories/>
          <FeaturedProduct/>
          {/* <Review/> */}
        </div>
    );
};

export default Home;