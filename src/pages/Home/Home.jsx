import HeroSection from "../../components/Hero";
import Navbar from "../../components/Navbar";
import ProductCategories from "../../components/ProductCategories";

const Home = () => {
    return (
        <div className="bg">
          <Navbar/>
          <HeroSection/>
          <ProductCategories/>
        </div>
    );
};

export default Home;