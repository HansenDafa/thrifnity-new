import Link from "next/link";

export default function Total() {
  return (
    <div>
      <h1 className="text-[17.68px] font-bold">Ringkasan Belanja</h1>
      <h2 className="text-[15.02px] font-bold mt-[15px]">Total Belanja</h2>
      <div className="flex flex-col my-5">
        <div className="flex my-1 justify-between ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <div className="flex justify-between my-1 ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <div className="flex my-1 justify-between ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <div className="flex my-1 justify-between ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <hr className="border border-black mt-5 " />
        <h2 className="font-bold mt-6"> Biaya Transaksi</h2>
        <div className="my-5">
          <div className="flex my-1 justify-between ">
            <p>Biaya Layanan</p>
            <p>Rp 60.000</p>
          </div>
          <div className="flex my-1 justify-between ">
            <p>Biaya Layanan</p>
            <p>Rp 60.000</p>
          </div>
          <div className="flex my-1 justify-between ">
            <p>Biaya Layanan</p>
            <p>Rp 60.000</p>
          </div>
        </div>
        <hr className="border border-black mt-5 " />
        <div className="flex mt-4 justify-between ">
          <h1 className="text-[23.51px]  font-bold">Total Tagihan</h1>
          <h1 className="text-[23.51px]   font-bold text-custom-customGreen">
            Rp 60.000
          </h1>
        </div>
        <hr className="border border-black mt-5 " />
        <button className="bg-custom-customGreen text-white mt-5 h-[53px] rounded-lg text-[20.51px] font-bold mb-1">
          <Link href={'/delivery/' + 1}>
            Bayar
          </Link>
        </button>
      </div>
    </div>
  );
}
