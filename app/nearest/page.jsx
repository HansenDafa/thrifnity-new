import MainButton from "@/components/button/MainButton";
import WORKSHIRTIMG from "@/public/images/product/workshirt.png";
import TOPIIMG from "@/public/images/product/topi.png";
import CELANAIMG from "@/public/images/product/celana.png";


import ProductCard from "@/components/card/ProductCard";

const products = [
  {
    id: 1,
    imageSrc: WORKSHIRTIMG,
    title: "Baju Mekanik Lengan Pendek T-Shirt Cotton",
    description: "350 gr BLACK, M, Like New",
    seller: "El Thrift Shop",
    location: "Jalan Mulyosari BPD Blok E No.33",
    distance: "3 Km dari kamu",
    price: "Rp60.000",
  },
  {
    id: 2,
    imageSrc: TOPIIMG,
    title: "Topi Baseball NEW YORK EST 1625",
    description: "100 gr All Size Second Hand",
    seller: "Unixcomart",
    location: "Jalan Mulyosari Tengah No. 98",
    distance: "5 Km dari kamu",
    price: "Rp70.000",
  },
  {
    id: 3,
    imageSrc: CELANAIMG,
    title: "Celana Kargo OLIVE SERIES L2760",
    description: "350 gr 30 BNIB",
    seller: "Kurota Shop",
    location: "Jalan Sutorejo IX No. 77",
    distance: "6 Km dari kamu",
    price: "Rp100.000",
  },
];

export default function Login() {
  return (
    <main className="h-[90dvh] flex font-open-sans mb-12">
      <div className="w-10/12 mx-auto py-8">
        <section className="flex justify-between items-end mb-8">
          <div className="">
            <h1 className="text-4xl font-bold tracking-wider py-1">
              Nearest Thrift
            </h1>
            <p className="text-lg tracking-wide py-1">
              Terdekat dari{" "}
              <span className="font-bold">Mulyosari BPD Blok F No. 66</span>
            </p>
          </div>
          <MainButton type="button" className={"rounded-md w-fit"}>
            Ubah Alamat
          </MainButton>
        </section>
        <section className="flex w-full gap-6">
          <section className="w-1/2 flex flex-col gap-2">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                seller={product.seller}
                location={product.location}
                distance={product.distance}
                price={product.price}
              />
            ))}
            <MainButton type="button" className={"rounded-md w-full font-bold"}>
              Tampilkan Thrift Lainnya
            </MainButton>
          </section>
          <section className="w-1/2 shadow-lg rounded-lg overflow-clip">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d33475.82314959984!2d112.77434878551577!3d-7.271218270160372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sthrift%20terdekat!5e1!3m2!1sid!2sid!4v1731572523824!5m2!1sid!2sid"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </section>
      </div>
    </main>
  );
}
