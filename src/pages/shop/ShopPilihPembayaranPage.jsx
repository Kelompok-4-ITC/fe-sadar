import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";

import IconArrow from "../../img/shop-arrow-kanan.png"
import IconBank from "../../img/shop-bank.png"
import IconQris from "../../img/shop-qris.png"
import IconCash from "../../img/shop-cash.png"
import IconCentang from "../../img/shop-centang.png"
import BankBRI from "../../img/shop-bankbri.png"
import BankBNI from "../../img/shop-bankbni.png"
import BankBCA from "../../img/shop-bankbca.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopPilihPembayaranPage() {
  const [metode, setMetode] = useState("cash");
  const [open, setOpen] = useState(false);
  function isOpen() {
    setOpen(!open);
  }

  function pilihMetode(metode) {
    console.log(metode);
    setMetode(metode);
  }

  const navigate = useNavigate();
  function keHalamanSelanjutnya() {
    if (metode == "qris") {
      navigate("/shop/pembayaran/qris");
    } else if (metode == "Bank BCA") {
      navigate("/shop/pembayaran/bank");
    }
  }

  return (
    <>
      <div className="flex flex-col gap-[10px] bg-sadar-second-white pb-[70px]">
        {/* Bagian Atas */}
        <section className="flex px-5 py-[10px] gap-5">
          <BackButton path={"/shop/detail-pembelian"} />
          <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
            <h1 className="font-semibold text-t-black text-base">
              Metode Pembayaran
            </h1>
          </div>
        </section>

        {/* metode */}
        <section className="bg-t-white border border-y-t-grey px-5 py-[10px] flex flex-col gap-[10px]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col mb-2 w-full gap-3">
              {/* transfer bangk */}
              <div className="flex justify-between items-center w-full"
                onClick={() => isOpen()}
              >
                <div className="flex gap-1 items-center">
                  <img src={IconBank} alt="" />
                  <h1>Transfer Bank</h1>
                </div>
                <img src={IconArrow} alt="" className={`${open ? 'rotate-90' : '-rotate-90'}`} />
              </div>
              <div className="h-[1px] w-full bg-t-grey"></div>

              <div className={`${open ? 'block' : 'hidden'}`}>
                <div className="ms-7 flex flex-col gap-2 ">
                  <div className="flex gap-1 justify-between items-center mb-2"
                    onClick={() => pilihMetode("Bank BRI")}
                  >
                    <div className="flex items-center gap-1">
                      <img src={BankBRI} alt="" />
                      <h1>Bank BRI</h1>
                    </div>
                    {
                      (metode == "Bank BRI") ?
                        <img src={IconCentang} alt="" className="h-7" />
                        : ""
                    }
                  </div>
                  <div className="h-[1px] w-full bg-t-grey"></div>
                  <div className="flex gap-1 justify-between items-center mb-2"
                    onClick={() => pilihMetode("Bank BNI")}
                  >
                    <div className="flex items-center gap-1">
                      <img src={BankBNI} alt="" />
                      <h1>Bank BNI</h1>
                    </div>
                    {
                      (metode == "Bank BNI") ?
                        <img src={IconCentang} alt="" className="h-7" />
                        : ""
                    }
                  </div>
                  <div className="h-[1px] w-full bg-t-grey"></div>
                  <div className="flex gap-1 justify-between items-center mb-2"
                    onClick={() => pilihMetode("Bank BCA")}
                  >
                    <div className="flex items-center gap-1">
                      <img src={BankBCA} alt="" />
                      <h1>Bank BCA</h1>
                    </div>
                    {
                      (metode == "Bank BCA") ?
                        <img src={IconCentang} alt="" className="h-7" />
                        : ""
                    }
                  </div>
                </div>
                <div className="h-[1px] w-full bg-t-grey"></div>
              </div>

              {/* transfer qris */}
              <div className="flex justify-between items-center w-full"
                onClick={() => pilihMetode("qris")}
              >
                <div className="flex gap-1 items-center">
                  <img src={IconQris} alt="" />
                  <h1>Qris</h1>
                </div>
                {
                  (metode == "qris") ?
                    <img src={IconCentang} alt="" className="h-7" />
                    : ""
                }
              </div>

              <div className="h-[1px] w-full bg-t-grey"></div>

              {/* trasnfer Cash */}
              <div className="flex justify-between items-center w-full" onClick={() => pilihMetode("cash")} >
                <div className="flex gap-1 items-center">
                  <img src={IconCash} alt="" />
                  <h1>Cash On Delivery</h1>
                </div>
                {
                  (metode == "cash") ?
                    <img src={IconCentang} alt="" className="h-7" />
                    : ""
                }
              </div>

            </div>
          </div>
        </section >


        {/* Button Konfirmasi */}
        <section section className="px-[20px] w-full" >
          <button className="p-[5px] bg-[#8CFFCC] text-center text-sm font-medium text-t-black rounded-[10px] w-full border border-black cursor-pointer"
            onClick={keHalamanSelanjutnya}
          >
            Konfirmasi
          </button>
        </section >
      </div >
    </>
  )
}

export default ShopPilihPembayaranPage