const BrandCard = ({ imageSrc }) => {
    return (
        <div className="flex justify-center items-center bg-white aspect-square rounded-lg shadow hover:border-gray-500 cursor-pointer border border-gray-300 p-4 transition duration-300">
            <img src={imageSrc} alt="Brand Logo" className="w-full h-full object-none" />
        </div>
    );
};

export default BrandCard;