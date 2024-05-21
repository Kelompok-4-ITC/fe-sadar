import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";

import IconVoucer from "../../img/shop-voucher.png";
import IconCentang from "../../img/shop-centang.png";
import IconKosong from "../../img/shop-sad.png";

function ShopPilihVoucerPage() {
  const data = [
    {
      id: 1,
      namaLabel: "Potongan harga Rp 10.000",
      minBel: "Rp 200.000",
      berlaku: "09-05-2024",
      isSelected: false
    }, {
      id: 2,
      namaLabel: "Potongan harga Rp 15.000",
      minBel: "Rp 100.000",
      berlaku: "10-05-2024",
      isSelected: true
    }, {
      id: 3,
      namaLabel: "Potongan harga Rp 10.000",
      minBel: "Rp 200.000",
      berlaku: "09-05-2024",
      isSelected: false
    }
  ]

  return (
    <>
      <div className="flex flex-col gap-[10px] bg-sadar-second-white pb-[70px]">
        {/* Bagian Atas */}
        <section className="flex px-5 py-[10px] gap-5">
          <BackButton path={"/shop/detail-pembelian"} />
          <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
            <h1 className="font-semibold text-t-black text-base">
              Detail Voucher
            </h1>
          </div>
        </section>

        {/* Voucer */}
        <section className="bg-t-white border border-y-t-grey px-5 py-[10px] flex flex-col gap-[10px]">
          {data.length > 0 ? (
            <div>
              {data.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <div className="flex mb-2 w-full gap-3">
                      <img src={IconVoucer} alt="" className="h-full" />
                      <div>
                        <h1 className="font-normal text-[#1E1E2D] text-sm">{item.namaLabel}</h1>
                        <h2 className="font-normal text-[#FF3D00] text-xs">Minumum Belanja {item.minBel}</h2>
                        <h2 className="font-normal text-[#FF3D00] text-xs">Berlaku hingga {item.berlaku}</h2>
                      </div>
                    </div>
                    <img src={item.isSelected ? IconCentang : ""} alt="" className="h-10" />
                  </div>
                  {index < data.length - 1 && <div className="border-b border-[#A2A2A7] mt-1"></div>}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center">
              <img src={IconKosong} alt="" />
              <h1 className="font-normal text-sm text-t-black">Tidak ada Voucher yang dapat digunakan</h1>
            </div>
          )}
        </section>

        {/* Button Konfirmasi */}
        <section className="px-[20px] w-full">
          <button className="p-[5px] bg-[#8CFFCC] text-center text-sm font-medium text-t-black rounded-[10px] w-full border border-black cursor-pointer">
            Konfirmasi
          </button>
        </section>
      </div>
    </>
  )
}

export default ShopPilihVoucerPage