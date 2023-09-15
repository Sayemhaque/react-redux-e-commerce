import { FaBars, FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const NavBarToogleIcons = ({isToggled,toogle}) => {
    return (
         <div className='md:hidden bg-purple-400 p-2 bg-opacity-60 rounded-md '>
          {isToggled ? 
           <FaTimes className='text-xl cursor-pointer text-white' onClick={toogle} /> 
           : 
           <FaBars className='text-md text-xl cursor-pointer text-white' onClick={toogle} />
          }
         </div>
    );
};

export default NavBarToogleIcons;