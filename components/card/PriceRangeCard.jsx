const PriceRangeCard = ({ label }) => {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[rgba(62,144,141,0.3)] to-transparent rounded-lg shadow hover:bg-gray-200 cursor-pointer p-4 border border-gray-300">
            <span className="text-sm text-gray-600">di bawah</span>
            <span className="text-2xl font-bold text-gray-800">{label}</span>
        </div>
    );
};

export default PriceRangeCard;