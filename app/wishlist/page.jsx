import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
    const products = [
        {
            id: 1,
            imageSrc: "/images/sliders/slider1.png",
            title: "Sweater rajut lengan panjang",
            price: "Rp 60.000",
        },
        {
            id: 2,
            imageSrc: "/images/sliders/slider1.png",
            title: "Kaos Lengan Pendek T-Shirt Cotton",
            price: "Rp 60.000",
        },
        {
            id: 3,
            imageSrc: "/images/sliders/slider1.png",
            title: "Vest rajut tanpa lengan",
            price: "Rp 60.000",
        },
        {
            id: 4,
            imageSrc: "/images/sliders/slider1.png",
            title: "Dress putih manik-manik",
            price: "Rp 60.000",
        },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Wishlist Saya</h1>
            <div className="flex gap-4 mb-4">
                <button className="px-4 py-2 bg-green-200 text-green-800 rounded">
                    Semua
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                    Atasan
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                    Aksesoris
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded">
                    Bawahan
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        imageSrc={product.imageSrc}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}