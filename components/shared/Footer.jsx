import Image from "next/image";
import CUPHEADIMG from "@/public/images/footer/cuphead.svg";
import DOWNLOADFROMIMG from "@/public/images/footer/download.svg";

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-custom-sage shadow-2xl">
      <section className="w-11/12 mx-auto flex items-center justify-between gap-20">
        <div className="w-full flex flex-col gap-6">
          <div>
            <h5 className="font-open-sans text-4xl tracking-wide">Thrifnity</h5>
          </div>
          <section className="flex gap-2 justify-between items-start font-open-sans font-thin text-lg text-neutral-600">
            <ul className="flex flex-col gap-2">
              <li>Homepage</li>
              <li>Thrift Populer</li>
              <li>Nearest Thrift</li>
              <li>Recommendation</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Metode Pembayaran</li>
              <li>Thriftnity COD</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Thriftnity Care</li>
              <li>Buat Toko Sendiri</li>
              <li>Promo Hari Ini</li>
              <li>OOTD Slay</li>
            </ul>
            <div>
              <p className="text-black font-medium">Ikuti Kami</p>
              <ul className="flex gap-4">
                <li>
                  <FaFacebook color="#3b5998" size={36} />
                </li>
                <li>
                  <AiFillTwitterCircle color="#00acee" size={40} />
                </li>
                <li>
                  <FaPinterest color="#E60023" size={36} />
                </li>
                <li className="rounded-full flex items-center justify-center bg-[#C13584] h-9 w-9">
                  <FaInstagram color="white" size={28} />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div>
          <Image src={CUPHEADIMG} alt="" width={400}/>
          <Image src={DOWNLOADFROMIMG} alt="" width={400}/>
        </div>
      </section>
    </footer>
  );
}
