import { Link } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import { FaBars, FaShoppingBag } from "react-icons/fa"
import { useSelector } from 'react-redux';

const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Products', to: 'products' },
    { text: 'About Us', to: '/about' },
    { text: 'Contact', to: '/contact' },
    { text: '', to: '/cart', icon: <FaShoppingBag /> },
    // Add more navigation items as needed
];

function Navbar() {
    const [isToggled, toogle] = useToggle(false)
    const {cart} = useSelector((state) => state.cartSlice)
    let totalQuantity = 0;

    // Loop through the cart and sum up the quantities
    for (const item of cart) {
      totalQuantity += item.quantity;
    }
    
    return (
        <nav className="bg-purple-500 bg-opacity-80 sticky top-0 z-50 shadow-lg py-4 px-4">
            <div className="flex flex-col space-y-6 md:space-y-0 md:pl-0 md:flex-row md:items-center justify-between md:max-w-6xl mx-auto">
                <div className='flex items-center justify-between'>
                    <Link to="/" className="text-white text-2xl font-bold">
                        {/* Your text logo */}
                        ShopZenith
                    </Link>
                    {/* icons */}
                    <FaBars className='md:hidden cursor-pointer text-white' onClick={toogle} />
                </div>
                   {/* cart */}
                  <Link to='cart'>
                  <div className='relative '>
                        <p className='text-white text-2xl'><FaShoppingBag /></p>
                        <p className='absolute -top-3 -right-3 bg-red-400 text-white w-5 h-5 flex justify-center items-center rounded-full'>{totalQuantity}</p>
                    </div>
                    </Link>
                <ul className={`${!isToggled ? "hidden md:flex flex-col md:flex-row gap-3 items-center" : "flex flex-col md:flex-row gap-3 "}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} className="text-white font-semibold">
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
