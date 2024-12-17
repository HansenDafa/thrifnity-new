import KAOS from "@/public/images/logo/kaos.jpeg";
import Image from "next/image";
import { CiStickyNote, CiTrash } from "react-icons/ci";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";

export default function PaymentCard() {
  return (
    <div>
      <div className=" mb-1 bg-white p-[19px] rounded-lg drop-shadow-lg w-auto">
        <h1 className="font-bold text-[23.73px] ml-3 ">El Thrift Shop</h1>

        <div className="flex mt-5">
          <Image src={KAOS} className="w-[78.77px] ml-3" alt="baju" />
          <div className="ml-5">
            <p className="text-[15.19px] font-bold">
              Baju Mekanik Lengan Pendek T-Shirt Cotton
            </p>
            <div className="flex gap-3">
              <p className="font-light	">350 gr</p>
              <p className="font-light	">BLACK M</p>
              <p className="font-light	">Likenew</p>
              <p className="ml-[190px] text-custom-customGreen font-bold">
                Rp 60.000
              </p>
            </div>
            <div className="flex">
              <div className="border border-black flex  w-[83px] gap-5 rounded-lg mt-1">
                <button className="ml-2">-</button>
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
