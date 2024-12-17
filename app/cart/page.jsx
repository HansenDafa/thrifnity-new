import Isi from "@/components/cart/cart";
import Total from "@/components/cart/total";
import CheckAll from "@/components/cart/checkall";

export default function Cart() {
  return (
    <main className="">
      <h1 className=" font-bold ml-[144px] mt-7 font-open-sans w-[226px] text-3xl ">
        Keranjang
      </h1>
      <div className=" flex justify-between mt-7 mx-[144px]">
        <div className="flex flex-col w-[55.36%] mb-10">
          <CheckAll />
          <Isi />
          <Isi />
          <Isi />
        </div>

        <Total />
      </div>
    </main>
  );
}
