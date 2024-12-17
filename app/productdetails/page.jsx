"use client";

import ProductCard from "@/components/card/HomeNDetailsProductCard";
import ImageGallery from "@/components/ImageGallery";
import Image from 'next/image';
import Link from "next/link";
import { FaStar } from 'react-icons/fa';

const ProductPage = () => {
    const images = [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
        "/images/product/product4.png",
        "/images/product/product5.png",
    ];

    const products = [
        {
            image: "/images/product/productE.png",
            name: "Adidas Men's Black...",
            price: "Rp 300.000",
            size: "Size: M",
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
    ];

    const storeReviews = [
        { name: "Lovina", rating: 5, comment: "Turns out bajunya super lucu dilihat langsung 😍." },
        { name: "Avant garde king", rating: 5, comment: "Sweet seller 💜" },
        { name: "Farah", rating: 5, comment: "Bagus banget!! Harum fresh abis laundry 🧼" },
    ];

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="flex">
                {/* Image Gallery */}
                <ImageGallery images={images} />

                {/* Product Details */}
                <div className="w-1/2 pl-4 space-y-4">
                    <h1 className="text-2xl font-semibold">Asics Men's Black & Yellow Jersey</h1>
                    <p className="text-xl font-bold text-custom-sage">Rp 300.000</p>
                    <p className="text-sm text-gray-500">Size: M &bull; Kondisi Lorem Ipsum</p>

                    <button className="w-full bg-custom-sage text-white py-2 rounded-lg font-semibold hover:bg-dark-green-600">
                        <Link href="/payment">
                            Beli Sekarang
                        </Link>
                    </button>
                    <button className="w-full border border-gray-400 py-2 rounded-lg font-semibold mt-2">
                        + Keranjang
                    </button>

                    <div className="border-t border-b border-gray-300 py-4">
                        <p className="text-gray-700">
                            Asics vintage 90s - yellow line<br />Size XL<br />
                            Length 71cm<br />Pit to pit 60cm<br />Sleeve 58 <br />
                            Very good condition, it would be a shame to miss it</p>
                        <br />
                        Asics vintage 90s - yellow line<br />Size XL<br />
                        Length 71cm<br />Pit to pit 60cm<br />Sleeve 58 <br />
                        Very good condition, it would be a shame to miss it
                    </div>
                    {/* Store Info */}
                    <div className="mt-6">
                        <p className="text-sm font-semibold">6.cents &bull; Verified Store</p>
                        <p className="text-sm text-gray-500">Surabaya</p>
                    </div>
                    {/* Shipping Info */}
                    <div className="mt-6 border-t border-gray-300">
                        <h2 className="text-base text-black mt-2 font-semibold">Pengiriman</h2>
                        <p className="text-sm text-gray-600">Dikirim dari Surabaya <br />Rp 9.999</p>
                    </div>
                </div>
            </div>

            <div className="mb-4 mt-4 border-b border-gray-300"></div>

            {/* Other Product */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Lainnya dari Seller</h2>
                <a href="#" className="text-custom-sage font-semibold">Lihat semua</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            {/* Store Reviews */}
            <div className="mt-12 flex">
                <div className="w-1/3 pr-4 flex flex-col items-start">
                    <h2 className="text-xl font-semibold mb-2 text-left">Review Toko</h2>
                    <div className="mt-6 flex items-center justify-center w-full">
                        <FaStar className="text-4xl text-yellow-500" />
                        <p className="text-4xl ml-2">
                            5.0
                            <span className="text-gray-500 text-xl">/5.0</span>
                        </p>
                    </div>
                    <div className="mt-2 items-center justify-center w-full">
                        <p className="text-center">100% pembeli merasa puas</p>
                        <p className="text-center text-gray-500">230 rating &bull; 71 ulasan</p>
                    </div>
                    {/* Stars Bar */}
                    <div className="mt-4 w-full px-4">
                        {[
                            { stars: 5, count: 71 },
                            { stars: 4, count: 0 },
                            { stars: 3, count: 0 },
                            { stars: 2, count: 0 },
                            { stars: 1, count: 0 },
                        ].map((review, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <span className="w-12 text-sm flex-shrink-0">{review.stars} <FaStar className="inline text-yellow-500" /></span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mx-2">
                                    <div className="bg-custom-sage h-2 rounded-full" style={{ width: `${(review.count / 71) * 100}%` }}></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-600 flex-shrink-0">{review.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Review Toko dari Produk yang Lain */}
                <div className="w-full lg:w-2/3">
                    <h2 className="text-xl font-semibold mb-4">Review Toko dari Produk yang Lain</h2>
                    <div>
                        {storeReviews.map((review, index) => (
                            <div key={index} className="flex items-start p-4 border-b border-gray-300">
                                <Image
                                    src={products[index % products.length].image}
                                    alt={`Product image ${index + 1}`}
                                    width={70}
                                    height={70}
                                    className="rounded-lg flex-shrink-0"
                                />
                                <div className="ml-4">
                                    <div className="flex items-center">
                                        <p className="font-semibold text-lg ml-2">{review.name}</p>
                                        <div className="flex ml-2">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-500 text-lg" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-md text-gray-700 mt-2">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;