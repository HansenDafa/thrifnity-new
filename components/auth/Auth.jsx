import Link from "next/link";
import MainButton from "../button/MainButton";
import CustomInput from "./CustomInput";

export default function Auth({ isLogin }) {
  return (
    <section className="bg-white w-full px-4 py-6 max-w-[30rem] flex flex-col gap-3 shadow-lg rounded-2xl">
      <form action="" className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-wide font-open-sans w-full py-3 border-b border-black">
          {isLogin ? "Login" : "Register"}
        </h1>
        <CustomInput
          type={"email"}
          placeholder={"Email"}
          className={"border-neutral-700"}
        />
        {!isLogin && (
          <CustomInput
            type={"text"}
            placeholder={"User name"}
            className={"border-neutral-700"}
          />
        )}
        <CustomInput
          type={"Password"}
          placeholder={"Password"}
          className={"border-neutral-700"}
        />
        {!isLogin && (
          <CustomInput
            type={"Password"}
            placeholder={"Confirm Password"}
            className={"border-neutral-700"}
          />
        )}
        <MainButton type="submit" className={"rounded-md w-full"}>
          {isLogin ? "Login" : "Register"}
        </MainButton>
      </form>
      <p className="text-center text-sm">Atau</p>
      <section className="flex items-center gap-5">
        <MainButton type="button" className={"rounded-md w-full"}>
          Google
        </MainButton>
        <MainButton type="button" className={"rounded-md w-full"}>
          Facebook
        </MainButton>
      </section>
      {isLogin && (
        <p className="text-center mt-3 text-sm">
          Baru di Thrifnity?{" "}
          <Link href="/signup">
            <span className="underline italic">Daftar</span>
          </Link>
        </p>
      )}
      {!isLogin && (
        <p className="text-center mt-3 text-sm">
          Sudah punya akun di Thrifnity?{" "}
          <Link href="/login">
            <span className="underline italic">Masuk</span>
          </Link>
        </p>
      )}
    </section>
  );
}
