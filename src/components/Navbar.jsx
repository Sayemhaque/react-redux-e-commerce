import { Link } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import { FaShoppingBag } from "react-icons/fa"
import { useSelector } from 'react-redux';
import NavBarToogleIcons from './NavBarToogleIcons';
import CartIcon from './CartIcon';
import FavouriteIcon from './FavouriteIcon';
import { UserButton, useUser } from '@clerk/clerk-react';
import Button from './Button';


const navLinks = [
    { text: 'Home', to: '/' },
    { text: 'Products', to: 'products' },
    { text: 'Contact', to: '/contact' },
    { text: '', to: '/cart', icon: <FaShoppingBag /> },
    // Add more navigation items as needed
];

function Navbar() {
    const { isLoaded, isSignedIn, user } = useUser();
    console.log(user, isLoaded, isSignedIn)
    const [isToggled, toogle] = useToggle(false)
    const { cart } = useSelector((state) => state.cartSlice)
    let totalQuantity = 0;
    // Loop through the cart and sum up the quantities
    for (const item of cart) {
        totalQuantity += item.quantity;
    }

    return (
        <nav className=" bg-purple-800 bg-opacity-80 sticky top-0 z-50 shadow-lg py-5 px-4">
            <div className="flex flex-col space-y-6 md:space-y-0 md:pl-0 md:flex-row md:items-center justify-between md:max-w-6xl mx-auto">
                <div className='flex items-center   justify-between'>
                    <NavBarToogleIcons toogle={toogle} isToggled={isToggled} />
                    <Link to="/" className="text-white text-2xl font-bold">
                        {/* Your text logo */}
                        ShopZenith
                    </Link>
                    {/* cart  for mobile*/}
                    <div className='flex items-center gap-4 md:hidden'>
                        <CartIcon style={`flex md:hidden`} totalQuantity={totalQuantity} />
                        <FavouriteIcon style={"flex md:hidden"} />
                        <UserButton />
                    </div>
                </div>
                <ul className={`${!isToggled ? "hidden md:flex flex-col md:flex-row gap-3 items-center" : "flex flex-col md:flex-row gap-3 "}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to} onClick={toogle} className="text-white font-semibold">
                                {link.text}
                            </Link>
                        </li>
                    ))}
                    {!isSignedIn ? <Link to="signin"  className="md:hidden text-white font-semibold">
                            <Button 
                             title={"Sign In"}
                             style={"bg-purple-900 px-5 py-1 rounded-lg"}
                            />
                        </Link> : ""}
                    {/* cart for desktop */}
                    <div className='hidden md:flex items-center gap-3'>
                        {!isSignedIn ? <Link to="signin" className="text-white font-semibold">
                            <Button 
                             title={"Sign In"}
                             style={"bg-purple-900 px-5 py-1 rounded-lg"}
                            />
                        </Link> : ""}
                        <CartIcon totalQuantity={totalQuantity} />
                        <FavouriteIcon />
                        <UserButton />

                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
