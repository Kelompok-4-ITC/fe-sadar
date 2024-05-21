import BackButton from "../../components/BackButton";
import Navbar from "../../components/Navbar";

import IconTambah from "../../img/shop-tambah.png";
import IconCentang from "../../img/shop-centang.png";

function ShopPilihAlamatPage() {
  // Sekarang Halaman Home
  const valueNavbar = "home";

  // Data
  const data = [
    {
      id: 1,
      nama: "Kim Tae Alexander",
      noHP: "0800-7890-9000",
      alamat: "Jalan Dirgantara III No.77, Caturtunggal, Depok, Sleman, DI Yogyakarta, ID 55282",
      isSelected: true
    },
    {
      id: 2,
      nama: "Kim Tae Alexander",
      noHP: "0800-7890-9000",
      alamat: "Jalan Dirgantara III No.77, Caturtunggal, Depok, Sleman, DI Yogyakarta, ID 55282",
      isSelected: false
    },
    {
      id: 3,
      nama: "Kim Tae Alexander",
      noHP: "0800-7890-9000",
      alamat: "Jalan Dirgantara III No.77, Caturtunggal, Depok, Sleman, DI Yogyakarta, ID 55282",
      isSelected: false
    },
  ]

  return (
    <div className="flex flex-col gap-[10px] bg-sadar-second-white pb-[70px]">
      {/* Bagian Atas */}
      <section className="flex px-5 py-[10px] gap-5">
        <BackButton path={"/shop/detail-pembelian"} />
        <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
          <h1 className="font-semibold text-t-black text-base">
            Pilih Alamat
          </h1>
        </div>
      </section>

      {/* Bagian main */}
      <section className="bg-t-white border border-y-t-grey px-5 py-[10px] flex flex-col gap-[10px]">
        <h1 className="font-semibold text-t-black text-base">Alamat Tersimpan</h1>
        <div className="border-b border-[#A2A2A7]"></div>
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div className="text-regular text-[14px]">
                <h1>{item.nama} | {item.noHP}</h1>
                <p>{item.alamat}</p>
              </div>
              <img src={item.isSelected ? IconCentang : ""} alt="" className="h-10" />
            </div>
            <div className="border-b border-[#A2A2A7] mt-1"></div>
          </div>
        ))}

        {/* Tambah alamat */}
        <section className="flex items-center gap-3">
          <img src={IconTambah} alt="" />
          <h1>Tambah Alamat Baru</h1>
        </section>
      </section >

      {/* navbar */}
      < div className="bottom-0 fixed w-screen" >
        {/* <div className="bottom-0 fixed w-screen border border-[#DCE1E4] bg-white"> */}
        < Navbar value={valueNavbar} />
      </div >
    </div >
  )
}

export default ShopPilihAlamatPage