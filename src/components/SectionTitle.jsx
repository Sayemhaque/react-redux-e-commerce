/* eslint-disable react/prop-types */
const SectionTitle = ({ title }) => {
    return (
        <h2 className="uppercase text-black text-center text-2xl md:text-5xl
         font-sans font-bold py-2">
            {title}
        </h2>
    );
};

export default SectionTitle;