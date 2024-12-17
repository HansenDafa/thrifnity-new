import Image from "next/image";
import SAGELOGO from "@/public/images/logo/sage-logo.svg";
import Auth from "@/components/auth/Auth";
import AuthLogo from "@/components/auth/AuthLogo";

export default function Login() {
  return (
    <main className="h-[90dvh] flex items-center justify-center ">
      <div className="flex items-center justify-between w-4/6 mx-auto ">
        <AuthLogo />
        <Auth/>
      </div>
    </main>
  );
}
