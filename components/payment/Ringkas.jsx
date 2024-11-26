export default function Total() {
  return (
    <div>
      <h1 className="text-[17.68px] font-bold">Ringkasan Belanja</h1>
      <h2 className="text-[15.02px] font-bold mt-[31px]">Total Belanja</h2>
      <div className="flex flex-col my-5">
        <div className="flex my-2 justify-between ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <div className="flex justify-between my-2 ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <div className="flex my-2 justify-between ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <div className="flex my-2 justify-between ">
          <p>Total Harga 1 Barang</p>
          <p>Rp 60.000</p>
        </div>
        <hr className="border border-black mt-5 " />
        <h2 className="font-bold mt-10"> Biaya Transaksi</h2>
        <div className="my-5">
          <div className="flex my-2 justify-between ">
            <p>Biaya Layanan</p>
            <p>Rp 60.000</p>
          </div>
          <div className="flex my-2 justify-between ">
            <p>Biaya Layanan</p>
            <p>Rp 60.000</p>
          </div>
          <div className="flex my-2 justify-between ">
            <p>Biaya Layanan</p>
            <p>Rp 60.000</p>
          </div>
        </div>
        <hr className="border border-black mt-5 " />
        <div className="flex gap-14">
          <h1 className="text-[26.51px] mt-4 font-bold">Total Tagihan</h1>
          <h1 className="text-[26.51px] mt-4 font-bold text-custom-customGreen">
            Rp 60.000
          </h1>
        </div>
        <hr className="border border-black mt-5 " />
        <button className="bg-custom-customGreen text-white mt-4 h-[69px] rounded-lg text-[26.51px] font-bold mb-1">
          Bayar
        </button>
      </div>
    </div>
  );
}
