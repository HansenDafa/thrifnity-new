"use client";

import Image from "next/image";
import { SiGooglemaps } from "react-icons/si";
import BCA from "@/public/images/logo/bca.png";
import Gopay from "@/public/images/logo/gopay.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import React, { useState, useEffect } from "react";
import "@/components/payment/modal.css";
import { CiSearch } from "react-icons/ci";
import OVO from "@/public/images/logo/ovo.png";
import Kredit from "@/public/images/logo/kredit.png";
import { IoMdClose } from "react-icons/io";

export default function Kirim() {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (modalName) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }

    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [activeModal]);

  return (
    <>
      <div className="bg-white w-[673.41px] mt-7 rounded-lg drop-shadow-lg p-5">
        <div className="flex">
          <SiGooglemaps size={40} />
          <h1 className="text-[21.95px] ml-5 mt-1 font-bold text-custom-customGreen">
            Alamat Pengiriman
          </h1>
        </div>
        <div className="flex">
          <p className="text-[10.17px] ml-2 mt-4 font-bold">
            Fauzan (+62) 85801688001 <br />
            Pepelegi indah jalan sindoro no 8, KAB. SIDOARJO - WARU, JAWA TIMUR,
            ID 61256
          </p>
          <button
            onClick={() => toggleModal("tambahAlamat")}
            className="bg-custom-customGreen w-[80.77px] h-[29.85px] text-[14.05px] rounded-2xl text-white ml-[100px] mt-5"
          >
            Ubah
          </button>
        </div>
        <hr className="mt-5 border border-black" />
        <div className="flex mx-2 gap-[145px]">
          <h1 className="mt-4 text-[21.95px] font-bold">Pilih Pengiriman</h1>
          <h1 className="mt-4 text-[21.95px] font-bold">Pilih Kurir</h1>
        </div>
        <div className="flex gap-[90px]">
          <select
            id="cars"
            name="cars"
            className="border border-black p-2 mt-3 ml-3 w-[208.96px] rounded-lg h-[51.8px]"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <div className="flex flex-col mt-3 ml-3">
            <select
              id="cars"
              name="cars"
              className="border border-black p-2 w-[300.96px] rounded-lg h-[51.8px]"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <h1 className="mt-[24px] text-[21.07px] font-thin ml-8">
              Estimasi tiba 29 Sep - 1 Oct
            </h1>
          </div>
        </div>
        <hr className="mt-[100px] border border-black" />
        <div className="flex mt-4 gap-6">
          <Image src={BCA} alt="bca" className="w-[65.31px] ml-5" />
          <h1 className="mt-4 text-[21.95px] font-semibold w-[420.37px]">
            BCA Virtual Account
          </h1>
          <button
            className="ml-[23px] "
            onClick={() => toggleModal("pilihPayment")}
          >
            <IoIosArrowDroprightCircle size={45} color="#3E918D" />
          </button>
        </div>
      </div>

      {/* Modal tambah alamat */}
      {activeModal === "tambahAlamat" && (
        <div
          className={` fixed inset-0  z-[1000] flex items-center justify-center `}
        >
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-80"
          ></div>
          <div className="absolute  bg-custom-customWhite p-6 rounded-lg shadow-lg w-[723px] overflow-y-auto h-[700px]  ">
            <h2 className="text-[40px] font-bold flex items-center justify-center   p-3  ">
              Daftar Alamat
            </h2>
            <div className="flex mt-[50px] border border-custom-customGreen p-2 gap-2 rounded-xl">
              <CiSearch className="" />
              <input
                type="text"
                placeholder="Tulis Nama Alamat / Kota / Kecamatan"
                className="flex-1 text-sm text-gray-700 placeholder-gray-500 outline-none bg-custom-customWhite"
              />
            </div>

            <button className="border border-custom-customGreen rounded-lg mt-8  p-3  text-custom-customGreen font-extrabold w-full hover:bg-custom-customGreen hover:text-white">
              Tambah Alamat Baru
            </button>

            <div>
              <div className="border border-custom-customGreen p-5 rounded-xl  mr-[100px] mt-[40px]">
                <p className="font-bold">Alamat rumah</p>
                <p className="font-bold mt-3">Fauzan</p>
                <p className=" mt-3">6285893894</p>
                <p className="mt-3">Jalan Airlangga no 1</p>
                <div className="flex gap-5">
                  <butt on className="mt-3 text-custom-customGreen">
                    Share
                  </butt>
                  <button className="mt-3 text-custom-customGreen ">
                    Ubah Alamat
                  </button>
                </div>
              </div>

              <div className="border border-custom-customGreen p-5 rounded-xl  mr-[100px] mt-[40px]">
                <p className="font-bold">Alamat rumah</p>
                <p className="font-bold mt-3">Fauzan</p>
                <p className=" mt-3">6285893894</p>
                <p className="mt-3">Jalan Airlangga no 1</p>
                <div className="flex gap-5">
                  <button className="mt-3 text-custom-customGreen">
                    Share
                  </button>
                  <button className="mt-3 text-custom-customGreen ">
                    Ubah Alamat
                  </button>
                </div>
              </div>
              <div className="border border-custom-customGreen p-5 rounded-xl  mr-[100px] mt-[40px]">
                <p className="font-bold">Alamat rumah</p>
                <p className="font-bold mt-3">Fauzan</p>
                <p className=" mt-3">6285893894</p>
                <p className="mt-3">Jalan Airlangga no 1</p>
                <div className="flex gap-5">
                  <button className="mt-3 text-custom-customGreen">
                    Share
                  </button>
                  <button className="mt-3 text-custom-customGreen ">
                    Ubah Alamat
                  </button>
                </div>
              </div>
            </div>

            <button
              className="absolute top-2 right-2 text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* Modal pilih payment */}
      {activeModal === "pilihPayment" && (
        <div
          className={` fixed inset-0  z-[1000] flex items-center justify-center  `}
        >
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-80"
          ></div>
          <div className="absolute  bg-custom-customWhite rounded-lg shadow-lg w-[498px] overflow-y-auto h-[700px]  ">
            <h2 className="text-[25px] font-bold    p-8 ">Pilih Pembayaran</h2>
            <div className="bg-custom-customGreen opacity-[.20] h-3 "></div>
            <div className="p-8">
              <h1 className="text-[20px] font-extrabold">Dompet Digital</h1>
              <div className="flex mt-5 ">
                <div className="border border-custom-customGreen bg-custom-white rounded-full  ">
                  <Image src={Gopay} alt="gopay" className="w-[50px] p-3" />
                </div>
                <div className="ml-5">
                  <p className="text-[13px]">Rp30.000,00</p>
                  <p className="text-[13px] opacity-[.50]">Saldo Tidak Cukup</p>
                </div>
                <button className="ml-[180px] ">
                  <IoIosArrowDroprightCircle size={45} color="#3E918D" />
                </button>
              </div>
              <hr className=" border-black opacity-[.30] mt-3" />

              <div className="flex mt-5 ">
                <Image src={OVO} alt="ovo" className="w-[50px] " />

                <div className="ml-5">
                  <p className="text-[13px]">OVO CASH</p>
                  <p className="text-[13px] opacity-[.50]">Saldo Tidak Cukup</p>
                </div>
                <button className="ml-[181px] ">
                  <IoIosArrowDroprightCircle size={45} color="#3E918D" />
                </button>
              </div>
            </div>
            <div className="bg-custom-customGreen opacity-[.20] h-3 "></div>
            <div className="p-8">
              <h1 className="text-[20px] font-extrabold">Kartu Kredit</h1>
              <div className="flex mt-5 ">
                <Image src={Kredit} alt="kredit" className="w-[50px] " />

                <h1 className="ml-5 text-[18px] mt-2  font-semibold">
                  Kartu Kredit / Cicilan
                </h1>
                <button className="ml-[117px] ">
                  <IoIosArrowDroprightCircle size={45} color="#3E918D" />
                </button>
              </div>
            </div>
            <div className="bg-custom-customGreen opacity-[.20] h-3 "></div>
            <div className="p-8">
              <h1 className="text-[20px] font-extrabold">Virtual Account</h1>
              <div className="flex mt-5 ">
                <Image src={BCA} alt="bca" className="w-[50px] " />

                <h1 className="ml-5 text-[18px] mt-2  font-semibold  ">
                  BCA Virtual Account
                </h1>
                <button className="ml-[117px] ">
                  <IoIosArrowDroprightCircle size={45} color="#3E918D" />
                </button>
              </div>
              <hr className=" border-black opacity-[.30] mt-3" />

              <div className="flex mt-5 ">
                <Image src={BCA} alt="bca" className="w-[50px] " />

                <h1 className="ml-5 text-[18px] mt-2  font-semibold  ">
                  BCA Virtual Account
                </h1>
                <button className="ml-[117px] ">
                  <IoIosArrowDroprightCircle size={45} color="#3E918D" />
                </button>
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-sm px-3 py-1 text-custom-customGreen rounded-xl hover:bg-custom-customGreen hover:text-white h-9"
              onClick={closeModal}
            >
              <IoMdClose size={30} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
