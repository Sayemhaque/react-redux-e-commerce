/* eslint-disable react/prop-types */

const Button = ({ title, style, onClick,type }) => {
  return <button
    onClick={onClick}
    type={type}
    className={`${style}  text-gray-200  font-bold font-serif`}>
    {title}
  </button>

};

export default Button;