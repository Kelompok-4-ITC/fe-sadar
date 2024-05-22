import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";

import IconQris from "../../img/shop-qris.png"
import Barcode from "../../img/shop-barcode.png"

function ShopQrisPage() {
  return (
    <div className="flex flex-col gap-[10px] bg-sadar-second-white pb-[70px]">
      {/* Bagian Atas */}
      <section className="flex px-5 py-[10px] gap-5">
        <BackButton path={"/shop/pilih-pembayaran"} />
        <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
          <h1 className="font-semibold text-t-black text-base">
            Metode Pembayaran
          </h1>
        </div>
      </section>

      {/* main */}
      <section className="bg-t-white border border-y-t-grey px-5 py-[10px] flex flex-col gap-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col mb-2 w-full gap-1">
            <div className="flex justify-between items-center">
              <h1 className="font-normal text-sm text-t-black">Total Pembayaran</h1>
              <h2 className="font-normal text-sm text-[#FF3D00]">Rp. 100.000</h2>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="font-normal text-sm text-t-black">Bayar Dalam</h1>
              <h2 className="font-normal text-sm text-[#FF3D00]">23 Jam 59 emnit 59 detik</h2>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h1 className="font-normal text-sm text-t-black">Jatuh tempo</h1>
              <h1 className="font-normal text-sm text-t-black">23 Aprill 2024, 14:35</h1>
            </div>

            <div className="h-[1px] w-full bg-t-grey"></div>

            <div className="flex justify-between items-center w-full my-2">
              <div className="flex gap-1 items-center">
                <img src={IconQris} alt="" />
                <h1>Qris</h1>
              </div>
            </div>

            <div className="h-[1px] w-full bg-t-grey"></div>

            <div className="flex flex-col justify-center items-center mt-2">
              <img src={Barcode} alt="" />
              <h1 className="font-normal text-xl text-sadar-second-black">Download Barcode</h1>
            </div>
          </div>
        </div>
      </section >

      {/* Button Konfirmasi */}
      <section className="px-[20px] w-full" >
        <button className="p-[5px] bg-[#8CFFCC] text-center text-sm font-medium text-t-black rounded-[10px] w-full border border-black cursor-pointer">
          Ok
        </button>
      </section>
    </div >
  )
}

export default ShopQrisPage