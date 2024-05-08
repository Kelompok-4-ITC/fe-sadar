import { Link, useLocation } from "react-router-dom"
import TitleComponent from "../../components/TitleComponent"
import LogoDaurUlang from "../../img/Logo Daur Ulang.png"
import FotoContoh from "../../img/contoh-barang-1.png"
import LogoAlamat from "../../img/icon-location.png"
import ArrowButton from "../../assets/ArrowButton.svg";
import axios from "axios"
import { useEffect, useState } from "react"


function PickUpCekPage() {
  // State untuk menyimpan data pengguna
  const [userData, setUserData] = useState(null);
  // Ngambil data user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem('jwttoken');
        if (token) {
          const response = await axios({
            method: "get",
            url: "https://kelompok4-dot-personal-website-415207.et.r.appspot.com//user/fetch-user",
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          // Set data pengguna ke state
          setUserData(response.data.loggedUser);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData(); // Panggil fungsi untuk mengambil data saat komponen dipasang
  }, []); // Gunakan array kosong sebagai dependencies agar hanya dipanggil sekali saat komponen dipasang

  console.log(userData)

  // Ngambil data dari halaman sebelumnya
  const { listSampah, listBarang } = useLocation().state;

  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white">
      {/* Menampilkan User --- Gunakan data pengguna di sini */}
      {userData && (
        <div>
          <TitleComponent path={"/pick-up"} title={"Pick Up"}></TitleComponent>
          <div className="px-5">
            <div className="bg-t-black h-[3px] w-full rounded"></div>
          </div>
          <div>
            <div className="w-full px-5">
              <div className="p-2 flex gap-1">
                <img src={LogoAlamat} alt="logo alamat" className="w-[16px] h-[22px]" />
                <div className="flex flex-col gap-0 px-1 w-full">
                  <h1 className="font-semibold text-t-black text-lg">Alamat Penjemputan</h1>
                  <div className="flex gap-3 font-normal text-t-black text-base">
                    <h2>{userData.fullName}</h2>
                    <h2>{userData.noHP}</h2>
                  </div>
                  <p className="font-normal text-t-black text-bas">{userData.alamat == null ? "Alamat tidak ada " : userData.alamat}</p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-t-black h-[3px] w-full rounded"></div>
            </div>
          </div>
        </div>
      )}

      <main className="px-5 flex flex-col gap-2 h-full pb-5">
        {/* Kategori Sampah - List */}
        <div id="List-Sampah" className="flex flex-col gap-0">

          <h1 className="font-bold text-lg text-t-black">Total Barang : {listSampah.length} Barang</h1>

          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
          {listSampah.map((sampah) => (
            <section key={sampah.id} className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2">

                  <img src={LogoDaurUlang} className="w-[65px] h-[65px]" />

                  <div className="w-full flex flex-col gap-1">
                    <div className="px-2 py-1 bg-sadar-secondary-color rounded-lg flex justify-between items-center">
                      <h1 className="text-sadar-second-black font-bold text-[15px]">{sampah.kategori}</h1>
                      <mark className="bg-sadar-primary-color rounded-full w-7 h-7 text-center flex justify-center items-center -rotate-90">
                        <img src={ArrowButton} className="h-3/5" />
                      </mark>
                    </div>

                    <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                      {sampah.deksripsi}
                    </p>
                  </div>

                </div>
              </div>
            </section>
          ))}


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