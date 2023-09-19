/* eslint-disable react/prop-types */

const Button = ({ title, style, onClick }) => {
  return <button
    onClick={onClick}
    className={`${style}  text-gray-200  font-bold font-serif`}>
    {title}
  </button>

};

export default Button;