import SectionTitle from "./SectionTitle";
import { FaLaptop, FaTshirt, FaHome, FaBook,FaFootballBall } from 'react-icons/fa'; // Import the icons

const ProductCategories = () => {
    const categories = [
        {
          "id": 1,
          "name": "Electronics",
          "slug": "electronics",
          "icon": <FaLaptop/>
        },
        {
          "id": 2,
          "name": "Clothing",
          "slug": "clothing",
          "icon": <FaTshirt/>
        },
        {
          "id": 3,
          "name": "Home & Garden",
          "slug": "home-and-garden",
          "icon": <FaHome/>
        },
        {
          "id": 4,
          "name": "Toys & Games",
          "slug": "toys-and-games",
          "icon": <FaFootballBall/>
        },
        {
          "id": 5,
          "name": "Books",
          "slug": "books",
          "icon": <FaBook/>
        }
      ]
      
    return (
        <div className="bg text-white py-6">
        <div className="container mx-auto">
         <SectionTitle 
          title={"Product Categories"}
         />
          <ul className="grid grid-cols-1  md:grid-cols-2  gap-3 md:gap-12 md:max-w-6xl mx-auto px-5 py-12">
            {categories.map((category) => (
              <div   key={category.id}>
                <li
                className="bg-purple-500 bg-opacity-80 p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                <a href="#" className="font-medium text-3xl">
                    <p className="text-5xl py-4">    {category.icon}</p>
                  {category.name}
                </a>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default ProductCategories;