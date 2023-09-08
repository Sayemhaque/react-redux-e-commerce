import { Link } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import {FaBars} from "react-icons/fa"

const navLinks = [
  { text: 'Home', to: '/' },
  { text: 'Products', to: '/products' },
  { text: 'About Us', to: '/about' },
  { text: 'Contact', to: '/contact' },
  // Add more navigation items as needed
];

function Navbar() {
    const [isToggled,toogle] =  useToggle(false)
  return (
    <nav className="bg-white shadow-lg py-4 px-4">
      <div className="flex flex-col space-y-6 md:space-y-0 md:pl-0 md:flex-row md:items-center justify-between md:max-w-6xl mx-auto">
        <div className='flex items-center justify-between'>
        <Link to="/" className="text-black text-2xl font-bold">
          {/* Your text logo */}
          MyShop
        </Link>
        {/* icons */}
        <FaBars className='md:hidden cursor-pointer' onClick={toogle}/>
        </div>
        <ul className={`${!isToggled ? "hidden md:flex flex-col md:flex-row gap-3 " : "flex flex-col md:flex-row gap-3 "}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="text-black font-semibold">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
