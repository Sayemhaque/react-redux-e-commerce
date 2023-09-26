/* eslint-disable react/prop-types */
const SectionTitle = ({ title }) => {
    return (
        <h2 className="uppercase text-purple-500  text-center 
        text-2xl md:text-5xl
         font-sans font-bold  my-12 py-2 
         rounded-md bg-gray-100 w-7/12 mx-auto">
            {title}
        </h2>
    );
};
export default SectionTitle;