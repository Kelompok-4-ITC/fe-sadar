import TitleComponent from "../../components/TitleComponent"
import BadgeTunggu from "../../img/badge-tunggu.png"
import { Link } from "react-router-dom"

function TahapSatuPage() {
  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white">
      <div>
        {/* <TitleComponent path={"/drop-off/cek"} title={"Drop Off"}></TitleComponent> */}
        <h1 className="text-xl font-semibold text-t-black text-center px-5 py-3">Drop Off</h1>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>
      <main className="px-5 flex flex-col justify-center gap-2 h-full">
        <div className="flex flex-col justify-center items-center gap-3 mb-3">
          <img src={BadgeTunggu} />
          <div className="flex flex-col gap-0 text-center text-t-black">
            <h1 className="font-bold text-lg">Pesanan Tahap Satu Berhasil</h1>
            <h2 className="font-medium text-base">Silahkan Mengantar ke Tujuan</h2>
          </div>
        </div>
        <Link to={"/proses"} className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center">Melihat Proses</Link>
        <Link to={"/"} className="px-3 py-2 rounded-lg border border-sadar-primary-color hover:border-sadar-fourth-black font-semibold text-lg text-t-black hover:text-t-grey text-center">Kembali Ke Menu</Link>
      </main>
    </div>
  )
}

export default TahapSatuPage