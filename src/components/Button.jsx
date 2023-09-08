/* eslint-disable react/prop-types */

const Button = ({title,style}) => {
    return <button
    className={`${style} bg-purple-600 text-white hover:bg-purple-700 rounded-full py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out inline-block`}
  >
    {title}
  </button>
};

export default Button;