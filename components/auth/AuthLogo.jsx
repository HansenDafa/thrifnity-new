import Image from "next/image";
import SAGELOGO from "@/public/images/logo/sage-logo.svg";

export default function AuthLogo() {
  return (
    <section className="flex flex-col items-center justify-center gap-3">
      <Image src={SAGELOGO} alt="logo" className="w-[20rem]" />
      <p className="text-black text-4xl font-bold">Thrifnity</p>
      <p className="text-xl font-extralight">Connected Through Clothes</p>
    </section>
  );
}
