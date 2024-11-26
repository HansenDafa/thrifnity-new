import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const HomeNDetailsProductCard = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Link href={`/productdetails`}>
            <div className="flex flex-col items-center w-48 pr-4 transition-transform transform hover:scale-105 relative cursor-pointer">
                <div className="w-full relative mb-2" style={{ paddingBottom: '100%' }}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                    />
                </div>
                <h3 className="text-sm font-regulars w-full text-left truncate">{product.name}</h3>
                <p className="text-custom-sage font-bold w-full text-left">{product.price}</p>
                <p className="text-sm text-gray-500 w-full text-left">{product.size}</p>
                <button
                    onClick={toggleFavorite}
                    className="p-2 absolute bottom-0 right-2 hover:bg-gray-200">
                    {isFavorite ? (
                        <MdFavorite className="w-6 h-6 text-red-500" />
                    ) : (
                        <MdFavoriteBorder className="w-6 h-6 text-custom-sage" />
                    )}
                </button>
            </div>
        </Link>
    );
};

export default HomeNDetailsProductCard;