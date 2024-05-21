import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";

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
      namaLabel: "Potongan harga Rp 10.000",
      minBel: "Rp 200.000",
      berlaku: "09-05-2024",
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
        <main>

        </main>
      </div>
    </>
  )
}

export default ShopPilihVoucerPage