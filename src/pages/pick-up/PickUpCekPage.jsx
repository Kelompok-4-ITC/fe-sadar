import { Link } from "react-router-dom"
import TitleComponent from "../../components/TitleComponent"
import LogoDaurUlang from "../../img/Logo Daur Ulang.png"
import FotoContoh from "../../img/contoh-barang-1.png"
import LogoAlamat from "../../img/icon-location.png"
import ArrowButton from "../../assets/ArrowButton.svg";

function PickUpCekPage() {
  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white">
      <div>
        <TitleComponent path={"/pick-up"} title={"Pick Up"}></TitleComponent>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>
      <div>
        <div className="w-full px-5">
          <div className="p-2 flex gap-1">
            <img src={LogoAlamat} alt="logo alamat" className="w-[16px] h-[22px]" />
            <div className="flex flex-col gap-0 px-1 w-full">
              <h1 className="font-semibold text-t-black text-lg">Alamat Penjemputan</h1>
              <div className="flex gap-3 font-normal text-t-black text-base">
                <h2>Ahmad</h2>
                <h2>082188887777</h2>
              </div>
              <p className="font-normal text-t-black text-bas">Jalan Babarsari, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281</p>
            </div>

          </div>

        </div>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>

      <main className="px-5 flex flex-col gap-2 h-full pb-5">
        {/* Kategori Sampah - List */}
        <div id="List-Sampah" className="flex flex-col gap-0">

          <h1 className="font-bold text-lg text-t-black">Total Barang : 2 Barang</h1>

          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
          <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
            <div className="flex flex-col gap-1" >
              <div className="flex gap-2">

                <img src={LogoDaurUlang} className="w-[65px] h-[65px]" />

                <div className="w-full flex flex-col gap-1">
                  <div className=" px-2 py-1 bg-sadar-secondary-color rounded-lg flex justify-between items-center">
                    <h1 className="text-sadar-second-black font-bold text-[15px]">Kardus</h1>
                    <mark className="bg-sadar-primary-color rounded-full w-7 h-7 text-center flex justify-center items-center -rotate-90" >
                      <img src={ArrowButton} className="h-3/5" />
                    </mark>
                  </div>

                  <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                    Saya punya 5 kg kardus di rumah
                  </p>
                </div>

              </div>
            </div>
          </section>

          <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
            <div className="flex flex-col gap-1" >
              <div className="flex gap-2">

                <img src={LogoDaurUlang} className="w-[65px] h-[65px]" />

                <div className="w-full flex flex-col gap-1">
                  <div className=" px-2 py-1 bg-sadar-secondary-color rounded-lg flex justify-between items-center">
                    <h1 className="text-sadar-second-black font-bold text-[15px]">Plastik</h1>
                    <mark className="bg-sadar-primary-color rounded-full w-7 h-7 text-center flex justify-center items-center -rotate-90" >
                      <img src={ArrowButton} className="h-3/5" />
                    </mark>
                  </div>

                  <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                    Saya punya 1 karung botol plastik, dan plastik-plastik tidak terpakai dari bungkus makanan yang saya beli
                  </p>
                </div>

              </div>
            </div>
          </section>

        </div>

        {/* List Barang Bekas  */}
        <div id="List-Barang" className="flex flex-col gap-0">

          <h1 className="font-bold text-lg text-t-black">List Barang Bekas</h1>

          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
          <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
            <div className="flex flex-col gap-1" >

              <div className="flex gap-2">
                <div className="w-[90px] ">
                  <label htmlFor="upload">
                    <img src={FotoContoh} className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer" />
                  </label>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div>
                    <h1 className="font-semibold text-base text-sadar-second-black">Nama Barang</h1>
                    <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                      Mouse Bekas
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold text-base text-sadar-second-black">Harga Jual</h1>
                    <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                      Rp. 100.000
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-base text-sadar-second-black">Deskripsi Barang</h1>
                <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                  Saya mau jual Mouse saya ini, karena saya sudah beli yang baru dan lebih bagus. Jadi saya jual. Harga yang tertera saya jual rugi.
                </p>
              </div>

            </div>
          </section>
        </div>

        {/* Button Lanjut */}
        <Link to={"/pick-up/sukses"} className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center">Proses Pesanan</Link>
      </main >
    </div >
  )
}

export default PickUpCekPage