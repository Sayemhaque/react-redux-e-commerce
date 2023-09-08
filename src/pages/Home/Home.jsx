import FeaturedProduct from "../../components/FeaturedProduct";
import HeroSection from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ProductCategories from "../../components/ProductCategories";

const Home = () => {
    return (
        <div className="bg">
          <Navbar/>
          <HeroSection/>
          <ProductCategories/>
          <FeaturedProduct/>
        </div>
    );
};

export default Home;