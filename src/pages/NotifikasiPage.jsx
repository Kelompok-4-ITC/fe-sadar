import { useState } from "react"
import TitleComponent from "../components/TitleComponent"
import BoxNotif from "../components/BoxNotif"


function NotifikasiPage() {
  // Note : ubah ubah aja isi useStatenya buat lihat kalo gak ada data sama ada
  const [data, setData] = useState("ada")

  // Nanti fetch API dapat respon judul, deskripsi, dan perhitungan waktu
  // masukin ke props BoxNotif

  return (
    <div className="bg-sadar-second-white">
      <TitleComponent path={"/"} title={"Notifikasi"}></TitleComponent>
      {!data ?
        <div className="h-screen -my-14 flex flex-col justify-center items-center text-t-grey font-bold text-2xl text-center overscroll-none">
          <div>
            <h1>Anda Tidak Punya</h1>
            <h1>Notifikasi</h1>
          </div>
          <div className="h-1/7 w-ful"></div>
        </div>
        :
        <div className="flex flex-col px-5 gap-2 py-3">
          {/* Ada nontifikasi */}
          <BoxNotif dibaca={true}></BoxNotif>
          <BoxNotif dibaca={false}></BoxNotif>
        </div>
      }
    </div>
  )
}

export default NotifikasiPage