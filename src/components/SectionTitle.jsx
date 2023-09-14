/* eslint-disable react/prop-types */
const SectionTitle = ({ title }) => {
    return (
        <h2 className="uppercase text-white text-center text-xl md:text-3xl
         font-sans font-bold py-5">
            {title}
        </h2>
    );
};

export default SectionTitle;