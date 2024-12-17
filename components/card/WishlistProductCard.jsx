import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const WishlistProductCard = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(true); // Set default to true

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };


    return (
        <div className="flex flex-col items-center w-56 p-4 transition-transform transform hover:scale-105 relative cursor-pointer bg-white shadow-lg rounded-lg">
            {/* Bagian Gambar Produk */}
            <div className="w-full relative mb-4" style={{ paddingBottom: '100%' }}>
                <Link href={`/productdetails/`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded"
                    />
                </Link>
            </div>

            {/* Nama Produk */}
            <h3 className="text-sm font-semibold w-full text-left truncate">
                {product.name}
            </h3>

            {/* Harga Produk */}
            <p className="text-custom-sage font-bold w-full text-left">
                {product.price}
            </p>

            {/* Ukuran Produk */}
            {product.size && (
                <p className="text-sm text-gray-500 w-full text-left">
                    {product.size}
                </p>
            )}

            {/* Tombol Favorite */}
            <button
                onClick={toggleFavorite}
                className="p-2 absolute bottom-0 right-2 hover:bg-gray-200"
                aria-label="Toggle Favorite"
            >
                {isFavorite ? (
                    <MdFavorite className="w-6 h-6 text-red-500" />
                ) : (
                    <MdFavoriteBorder className="w-6 h-6 text-custom-sage" />
                )}
            </button>
        </div>
    );
};

export default WishlistProductCard;
