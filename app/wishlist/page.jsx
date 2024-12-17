"use client";

import WishlistProductCard from "@/components/card/WishlistProductCard";
import { useState } from 'react';
import { MdFilterList } from 'react-icons/md';

export default function WishlistPage() {
    const [activeButton, setActiveButton] = useState('Semua');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const products = [
        {
            image: "/images/product/product1.png",
            name: "Sweater Rajut Lengan Panjang",
            price: "Rp 60.000",
            size: "M",
        },
        {
            image: "/images/product/productA.png",
            name: "Hanes Men's Black T-shirt",
            price: "Rp 50.000",
            size: "S",
        },
        {
            image: "/images/product/productB.png",
            name: "Men's White T-shirt",
            price: "Rp 100.000",
            size: "L",
        },
        {
            image: "/images/product/productC.png",
            name: "Hysteric Glamour Women's...",
            price: "Rp 200.000",
            size: "L",
        },
        {
            image: "/images/product/productD.png",
            name: "Hysteric Glamour Women's...",
            price: "Rp 30.000",
            size: "M",
        },
        {
            image: "/images/product/productE.png",
            name: "Adidas Men's Black...",
            price: "Rp 150.000",
            size: "M",
        },
        {
            image: "/images/product/productA.png",
            name: "Hanes Men's Black T-shirt",
            price: "Rp 50.000",
            size: "S",
        },
        {
            image: "/images/product/productB.png",
            name: "Men's White T-shirt",
            price: "Rp 100.000",
            size: "L",
        },
        {
            image: "/images/product/productA.png",
            name: "Hanes Men's Black T-shirt",
            price: "Rp 50.000",
            size: "S",
        },
        {
            image: "/images/product/productB.png",
            name: "Men's White T-shirt",
            price: "Rp 100.000",
            size: "L",
        },
        {
            image: "/images/product/productC.png",
            name: "Hysteric Glamour Women's...",
            price: "Rp 200.000",
            size: "L",
        },
        {
            image: "/images/product/productD.png",
            name: "Hysteric Glamour Women's...",
            price: "Rp 30.000",
            size: "M",
        },
        {
            image: "/images/product/productE.png",
            name: "Adidas Men's Black...",
            price: "Rp 150.000",
            size: "M",
        },
        {
            image: "/images/product/productA.png",
            name: "Hanes Men's Black T-shirt",
            price: "Rp 50.000",
            size: "S",
        },
        {
            image: "/images/product/productB.png",
            name: "Men's White T-shirt",
            price: "Rp 100.000",
            size: "L",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Wishlist Saya</h1>
            <div className="flex justify-between mb-4 mr-2">
                <div className="flex gap-2">
                    <button
                        className={`px-4 py-2 rounded ${activeButton === 'Semua' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handleButtonClick('Semua')}
                    >
                        Semua
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeButton === 'Atasan' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handleButtonClick('Atasan')}
                    >
                        Atasan
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeButton === 'Aksesoris' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handleButtonClick('Aksesoris')}
                    >
                        Aksesoris
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${activeButton === 'Bawahan' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => handleButtonClick('Bawahan')}
                    >
                        Bawahan
                    </button>
                </div>
                <button
                    className={`px-4 py-2 rounded ${activeButton === 'Filter' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'} flex items-center`}
                    onClick={() => handleButtonClick('Filter')}
                >
                    <MdFilterList className="mr-2" />
                    Filter
                </button>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <WishlistProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
}