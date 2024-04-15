import TitikTiga from "../../img/icon-titik_tiga.png"
import IconSearch from "../../img/icon-search.png"
import ProfileOrang from "../../img/Profile-Orang.png"
import Navbar from "../../components/Navbar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ChatPages() {
  // Sekarang Halaman Chat
  const valueNavbar = 'chat';

  let [data, setData] = useState([]);
  data = [
    {
      id: 1,
      nama: "Pak Jhon",
    },
    {
      id: 2,
      nama: "Pak Ahmad"
    },
    {
      id: 3,
      nama: "Ayrisa"
    }
  ]

  const navigate = useNavigate();
  const keChating = () => {
    // Nanti pelacari `Socket.io` --> Karena mau bikin fitur chating. Data apa aja yang diperlukan
    navigate('/chat/chating')
  }

  return (
    <>
      <section className='flex flex-col gap-2 p-5 bg-t-white'>
        <div>
          <div className='p-2 flex justify-between'>
            <h1 className="font-bold text-t-black text-2xl">Chating</h1>
            {/* <img src={TitikTiga} alt="titik tiga" className="cursor-pointer" /> */}
            <div id="titik-tiga" className="flex flex-col justify-evenly items-center cursor-pointer">
              <div className="rounded bg-black w-[5px] h-[5px]"></div>
              <div className="rounded bg-black w-[5px] h-[5px]"></div>
              <div className="rounded bg-black w-[5px] h-[5px]"></div>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Cari"
              className="w-full py-2 ps-3 pe-8 bg-sadar-third-white border-sadar-third-white rounded focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
              id="search"
            />
            <label htmlFor="search" className="absolute inset-y-0 end-2 flex items-center ps-4 cursor-pointer">
              <img src={IconSearch} alt="search-icon" class="flex-shrink-0 size-4" />
            </label>
          </div>
        </div>

        <main>
          {!data ?
            // Jika Data tidak ada
            <div className="text-center py-5 text-t-grey font-semibold text-lg pt-10">
              <h1>Kontak Tidak Ditemukan</h1>
            </div>
            :
            // Jika Data ada
            <div className="flex flex-col gap-0">
              {data.map((item, key) => (
                <div
                  key={key} className="flex gap-2 hover:bg-sadar-third-white rounded-t-md p-2 border-b-t-grey border-b-2"
                  onClick={(e) => keChating(e)}
                >
                  <img src={ProfileOrang} alt="foto orang" className="rounded-full size-12" />
                  <div className="flex flex-col items-start w-full">
                    <h1 className="font-bold text-base text-t-black">{item.nama}</h1>
                    <p className="font-medium text-sm text-t-black">Oke mas</p>
                  </div>
                  <div className="flex justify-center items-center py-3 px-1">
                    <p className="font-medium text-sm text-t-black">20:30</p>
                  </div>
                </div>
              ))}
              {/* Tamplate box */}
              <div className="flex gap-2 hover:bg-sadar-third-white rounded-t-md p-2 border-b-t-grey border-b-2">
                <img src={ProfileOrang} alt="foto orang" className="rounded-full size-12" />
                <div className="flex flex-col items-start w-full">
                  <h1 className="font-bold text-base text-t-black">Nama Orang</h1>
                  <p className="font-medium text-sm text-t-black">Pesan</p>
                </div>
                <div className="flex justify-center items-center py-3 px-1">
                  <p className="font-medium text-sm text-t-black">JAM</p>
                </div>
              </div>
            </div>
          }
        </main>
      </section >
      {/* navbar */}
      <div className="bottom-0 fixed w-screen">
        {/* <div className="bottom-0 fixed w-screen border border-[#DCE1E4] bg-white"> */}
        <Navbar value={valueNavbar} />
      </div>
    </>
  )
}

export default ChatPages