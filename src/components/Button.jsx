/* eslint-disable react/prop-types */

const Button = ({title,style,icon,onClick}) => {
    return <button
    onClick={onClick}
    className={`${style} 
      text-white hover:bg-purple-700
      rounded-full px-3 py-1 md:py-2 md:px-6 md:text-lg text-sm
      font-semibold transition duration-300
      ease-in-out gap-2 w-fit 
      sm:px-4 sm:py-2 sm:text-base
      lg:px-5 lg:py-2 lg:text-lg
    `}
  >
    {icon} {title}
  </button>
  
};

export default Button;