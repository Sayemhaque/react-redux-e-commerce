/* eslint-disable react/prop-types */

const Input = ({ type, name, placeholder}) =>
    <input required className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring focus:border-blue-300 w-ful"
   type={type} name={name} placeholder={placeholder} />

export default Input;