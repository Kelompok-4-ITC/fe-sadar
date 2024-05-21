import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";

function ShopPilihPembayaranPage() {
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

        {/* Voucer */}
        <main>

        </main>
      </div>
    </>
  )
}

export default ShopPilihPembayaranPage