/* eslint-disable react/prop-types */

const Button = ({title,style,icon,onClick}) => {
    return <button
    onClick={onClick}
    className={`${style} 
    text-white hover:bg-purple-700
     rounded-full py-2 px-6 text-lg
      font-semibold transition duration-300
       ease-in-out gap-3`}
  >
   {icon} {title}
  </button>
};

export default Button;