import BackButton from "../../components/BackButton"
import ProfileOrang from "../../img/Profile-Orang.png"
import IconTelpon from "../../img/icon-chat-telpon.png"
import IconTitikTiga from "../../img/icon-chat-tiga-lingkaran.png"
import IconSend from "../../img/icon-chat-send.png"
import Navbar from "../../components/Navbar"

function ChatingPage() {
  // Sekarang Halaman Chat
  const valueNavbar = 'chat';

  return (
    <div className="flex flex-col h-screen">
      {/* Bagian Atas */}
      <div className="flex items-center py-1 px-2 gap-3 bg-sadar-second-white border-b-sadar-sixth-white border-b-2">
        <BackButton path={"/chat"} />
        <div className="flex gap-2 py-1 w-full items-center justify-center">
          <img src={ProfileOrang} alt="foto orang" className="rounded-full size-12" />
          <div className="flex flex-col items-start w-full">
            <h1 className="font-bold text-base text-t-black">Pak Jhon</h1>
            <p className="font-medium text-sm text-t-black">Online</p>
          </div>
          <img src={IconTelpon} alt="IconTelpom" />
          <img src={IconTitikTiga} alt="IconTitikTiga" />
        </div>
      </div>
      {/* Pesan tampil dibagian ini*/}
      {/* Bagaimana agar bisa memanjang tingginya */}
      <div className="flex flex-col p-5 gap-2 overflow-y-auto h-screen flex-grow">
        {/* Dari user 1 */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="p-2 rounded-ss-xl rounded-ee-xl bg-sadar-fifth-white box-content text-left">Permisi kak saya rencananya kesana tanggal 20, kisaran siang hari. Bisa kan ya kak?</h1>
          <p>20:30</p>
        </div>
        {/* Dari user 2 */}
        <div className="flex flex-col justify-end items-end">
          <h1 className="p-2 rounded-se-xl rounded-es-xl bg-sadar-fifth-white box-content text-right">Boleh pak</h1>
          <p>20:30</p>
        </div>
        {/* Dari user 2 */}
        <div className="flex flex-col justify-end items-end">
          <h1 className="p-2 rounded-se-xl rounded-es-xl bg-sadar-fifth-white box-content text-right">saya akan usahakan ada dirumah saat ya pak</h1>
          <p>20:30</p>
        </div>
        {/* Dari user 1 */}
        <div className="flex flex-col justify-start items-start">
          <h1 className="p-2 rounded-ss-xl rounded-ee-xl bg-sadar-fifth-white box-content text-left">Permisi kak saya rencananya kesana tanggal 20, kisaran siang hari. Bisa kan ya kak?</h1>
          <p>20:30</p>
        </div>
        {/* Dari user 2 */}
        <div className="flex flex-col justify-end items-end">
          <h1 className="p-2 rounded-se-xl rounded-es-xl bg-sadar-fifth-white box-content text-right">saya akan usahakan ada dirumah saat ya pak</h1>
          <p>20:30</p>
        </div>
      </div>
      {/* Text Input Chat */}
      <div className="flex py-2 px-[10px] gap-1 bg-sadar-fifth-white">
        <input
          type="text"
          placeholder="Masukan pesan"
          className="flex-grow p-2 rounded-md border focus:outline-none focus:border-green-700"
        />
        <button type="submit" className="flex-shrink-0">
          <img src={IconSend} alt="IconSend" className="size-10" />
        </button>
      </div>
      {/* navbar */}
      <div className="">
        {/* <div className="bottom-0 fixed w-screen border border-[#DCE1E4] bg-white"> */}
        <Navbar value={valueNavbar} />
      </div>
    </div>
  )
}

export default ChatingPage