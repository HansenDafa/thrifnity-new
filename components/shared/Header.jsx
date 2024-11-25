"use client";

import Image from "next/image";
import WHITELOGO from "@/public/images/logo/white-logo.svg";
import { BsCart, BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import Link from "next/link";
import Dropdown from "../dropdown/Dropdown";

export default function Header() {
  return (
    <header className="h-fit bg-custom-sage py-3 text-white">
      <section className="w-11/12 mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex gap-1 items-center justify-center">
            <Image src={WHITELOGO} alt="logo" width={60} />
            <p className="font-open-sans font-bold text-3xl">Thrifnity</p>
          </div>
        </Link>
        <div className="flex gap-1 items-center justify-center relative">
          <BsSearch color="black" className="absolute left-0 mx-2" />
          <input
            type="search"
            className="h-fit text-md px-3 py-2 text-black rounded-md text-opacity-50 bg-custom-white font-extralight outline-none pl-8 w-full min-w-[40svw]"
            placeholder="Search Product..."
          />
        </div>
        <div className="flex gap-8 items-center justify-center">
          <BsHeart size={27} className="w-full h-full" />
          <BsCart size={28} className="w-full h-full" />
          <Dropdown className="relative">
            <Dropdown.Title className={`flex`}>
              <BsPerson
                size={28}
                className="w-full h-full hover:cursor-pointer"
              />
            </Dropdown.Title>
            <Dropdown.Menu className="text-sm bg-opacity-70 z-50 backdrop-blur-sm w-fit h-fit absolute flex flex-col right-0">
              <Link
                href="/login"
                className="hover:bg-neutral-700 hover:cursor-pointer bg-neutral-900 px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-full  bg-neutral-900 px-4 py-2 hover:bg-neutral-700 hover:cursor-pointer"
              >
                <p className="whitespace-nowrap">Sign Up</p>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </section>
    </header>
  );
}
