"use client";

import Carousel from "@/components/Carousel";
import MainButton from "@/components/button/MainButton";
import BrandCard from "@/components/card/BrandCard";
import ProductCard from "@/components/card/HomeNDetailsProductCard";
import NearestThriftCard from "@/components/card/NearestThriftCard";
import PriceRangeCard from "@/components/card/PriceRangeCard";
import Image from "next/image";
import Link from "next/link";

const product = {
  image: "/images/product/product1.png",
  name: "Asics Men's Black & Yellow Jersey",
  price: "Rp 300.000",
  size: "Size: M",
};

const styles = [
  {
    image: "/images/stylewear/y2k.png",
    name: "Y2K",
  },
  {
    image: "/images/stylewear/streetwear.png",
    name: "Streetwear",
  },
  {
    image: "/images/stylewear/coquette.png",
    name: "Coquette",
  },
  {
    image: "/images/stylewear/workwear.png",
    name: "Workwear",
  },
];

const priceRanges = [
  { label: "100 Rb", value: 100000 },
  { label: "250 Rb", value: 250000 },
  { label: "500 Rb", value: 500000 },
  { label: "750 Rb", value: 750000 },
  { label: "1 Juta", value: 1000000 },
];

const brands = [
  { name: "Coach", image: "/images/brands/coach.png" },
  { name: "Bershka", image: "/images/brands/bershka.png" },
  { name: "Carhartt", image: "/images/brands/carhartt.png" },
  { name: "Adidas", image: "/images/brands/adidas.png" },
  { name: "Fila", image: "/images/brands/fila.png" },
  { name: "Colorbox", image: "/images/brands/colorbox.png" },
];

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto p-6">
        {/* Carousel */}
        <Carousel />

        {/* Thrift Populer! */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold flex justify-between items-center">
            Thrift Populer!
            <Link href="/search" className="text-lg font-normal text-custom-sage hover:text-green-500 transition-colors">More...</Link>
          </h1>
          <div className="mt-3 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
          </div>
        </div>

        {/* Nearest Thrift */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Nearest Thrift</h1>
          <div className="min-h-full py-3">
            <div className="container mx-auto flex flex-col lg:flex-row gap-6">
              {/* Nearest Thrift Card */}
              <div className="flex-[0.7] flex flex-col justify-between h-full">
                <NearestThriftCard />
                <Link href="/thrift-lainnya">
                  <MainButton className="rounded-lg mt-4 w-full">
                    Tampilkan Thrift Lainnya
                  </MainButton>
                </Link>
              </div>

              {/* Google Map Image */}
              <div className="flex-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d33475.82314959984!2d112.77434878551577!3d-7.271218270160372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sthrift%20terdekat!5e1!3m2!1sid!2sid!4v1731572523824!5m2!1sid!2sid"
                  className="border-0 w-full h-full rounded-xl"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pilih Style Kamu! */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold flex justify-between items-center">
            Pilih Style Kamu!
            <Link href="/search" className="text-lg font-normal text-custom-sage hover:text-green-500 transition-colors">More...</Link>
          </h1>

          {/* Style Grid */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {styles.map((style, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="overflow-hidden rounded-md w-full h-auto group">
                  <Image
                    src={style.image}
                    alt={style.name}
                    width={200}
                    height={200}
                    className="rounded-md w-full h-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="mt-1 text-m font-bold text-gray-700">{style.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Belanja sesuai Hargamu */}
        <div className="mt-12">
          <h1 className="text-2xl font-bold">Belanja Sesuai Hargamu!</h1>
          {/* Price Range Grid */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {priceRanges.map((range, index) => (
              <PriceRangeCard key={index} label={range.label} />
            ))}
          </div>
        </div>

        {/* Brand Populer*/}
        <div className="mt-12">
          <h1 className="text-2xl font-bold flex justify-between items-center">
            Brand Populer
            <Link href="/search" className="text-lg font-normal text-custom-sage hover:text-green-500 transition-colors">More...</Link>
          </h1>
          {/* Price Range Grid */}
          <div className="mt-4 mb-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <BrandCard key={index} imageSrc={brand.image} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
