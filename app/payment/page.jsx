import Isi from "@/components/payment/paymentcart";
import Kirim from "@/components/payment/Kirim";
import Bayar from "@/components/payment/Ringkas";
export default function Pay() {
  return (
    <main>
      <h1 className="font-bold mx-[114px] mt-7 font-open-sans w-[400.95px] text-[28.1px]">
        Barang yang Dibeli
      </h1>
      <div className=" flex mx-[114px] mt-7    justify-between	   ">
        <div className="flex flex-col w-[664.36px] mb-10">
          <Isi />
          <h1 className="mt-[80px] text-[28.1px] font-bold">
            Pengiriman dan Pembayaran
          </h1>
          <Kirim />
        </div>
        <div className=" bg-white mb-[200px]  w-[424.6px] p-8 rounded-lg drop-shadow-lg">
          <Bayar />
        </div>
      </div>
    </main>
  );
}
