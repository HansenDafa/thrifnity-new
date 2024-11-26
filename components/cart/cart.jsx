import KAOS from "@/public/images/logo/kaos.jpeg";
import Image from "next/image";
import { CiStickyNote, CiTrash } from "react-icons/ci";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";

export default function Isi() {
  return (
    <div>
      <div className="mb-1 bg-white p-[19px] rounded-lg drop-shadow-lg overflow-hidden">
        <div className="flex">
          <input type="checkbox" className="w-[24.68px] rounded-3xl" />
          <h1 className="font-bold text-[23.73px] ml-3">El Thrift Shop</h1>
        </div>
        <div className="flex mt-5 flex-wrap items-start ">
          <input
            type="checkbox"
            className=" w-[24.68px] h-6 rounded-[15px] mb-12 "
          />
          <Image src={KAOS} className="w-[78.77px] ml-3" />
          <div className="ml-5 flex-grow">
            <p className="text-[15.19px] w-[80%] font-bold">
              Baju Mekanik Lengan Pendek
            </p>
            <div className="flex gap-3">
              <p className="font-light">350 gr</p>
              <p className="font-light">BLACK M</p>
              <p className="font-light">Likenew</p>
            </div>
          </div>
          {/* Harga, Ikon, dan Tombol Jumlah */}
          <div className="ml-auto flex flex-col items-end gap-3 ">
            <p className="text-custom-customGreen font-bold">Rp 60.000</p>
            <div className="flex items-center gap-3">
              <CiStickyNote size={27} />
              <FaHeart size={27} />
              <FaRegTrashAlt size={27} />
              <div className="border border-black flex items-center w-[83px] justify-between rounded-lg p-2">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
