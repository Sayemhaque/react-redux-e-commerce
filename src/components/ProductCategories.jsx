import SectionTitle from "./SectionTitle";
import { FaLaptop, FaTshirt, FaHome, FaBook, FaFootballBall } from 'react-icons/fa'; // Import the icons

const ProductCategories = () => {
  const categories = [
    {
      "id": 1,
      "name": "Electronics",
      "slug": "electronics",
      "icon": <FaLaptop />
    },
    {
      "id": 2,
      "name": "Clothing",
      "slug": "clothing",
      "icon": <FaTshirt />
    },
    {
      "id": 3,
      "name": "Home & Garden",
      "slug": "home-and-garden",
      "icon": <FaHome />
    },
    {
      "id": 4,
      "name": "Toys & Games",
      "slug": "toys-and-games",
      "icon": <FaFootballBall />
    },
    {
      "id": 5,
      "name": "Books",
      "slug": "books",
      "icon": <FaBook />
    }
  ]

  return (
    <div className="bg-slate-300 text-white py-6">
      <div className="container mx-auto">
        <SectionTitle
          title={"Product Categories"}
        />
        <ul className="grid grid-cols-2  md:grid-cols-3  gap-3 md:gap-12
         md:max-w-6xl mx-auto px-3 py-5">
          {categories.map((category) => (
            <div key={category.id}>
              <li
                className="bg-purple-800 
                bg-opacity-80 p-4 rounded-md">
                 <a href="#" className="font-medium text-xl md:text-3xl">
                  <p className="text-2xl md:text-5xl py-4">    {category.icon}</p>
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