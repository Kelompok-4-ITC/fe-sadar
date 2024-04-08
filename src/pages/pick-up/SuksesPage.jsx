import TitleComponent from "../../components/TitleComponent"
import BadgeSukses from "../../img/badge-sukses.png"
import { Link } from "react-router-dom"

function SuksesPage() {
  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white">
      <div>
        <TitleComponent path={"/pick-up"} title={"Pick Up"}></TitleComponent>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>
      <main className="px-5 flex flex-col justify-center gap-2 h-full">
        <div className="flex flex-col justify-center items-center gap- mb-3">
          <img src={BadgeSukses} />
          <div className="flex flex-col gap-0 text-center text-t-black">
            <h1 className="font-bold text-lg">Pesanan Telah Berhasil</h1>
            <h2 className="font-medium text-base">Silahkan Menunggu Driver</h2>
          </div>
        </div>
        <Link to={"/process"} className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center">Melihat Proses</Link>
        <Link to={"/"} className="px-3 py-2 rounded-lg border border-sadar-primary-color hover:border-sadar-fourth-black font-semibold text-lg text-t-black hover:text-t-grey text-center">Kembali Ke Menu</Link>
      </main>
    </div>
  )
}

export default SuksesPage