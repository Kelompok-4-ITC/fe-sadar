import IconNotifBaru from "../img/icon-notif-baru.png";

function BoxNotif({ dibaca }) {
  return (
    <>
      <div className="flex flex-col gap-0 cursor-pointer hover:bg-sadar-third-white rounded p-1">
        <div className="flex justify-center items-center gap-2 h-full">
          <img src={IconNotifBaru} className={`${dibaca ? 'invisible' : 'block'}`} />
          <h1 h1 className="w-full font-semibold text-base text-t-black leading-tight">Chat dari Driver</h1>
          <p className="w-full text-right font-normal text-xs">17 dtk lalu</p>
        </div>
        <div className="ps-5 font-normal text-sm">
          Lorem ipsum dolor sit.
        </div>
      </div>
    </>
  )
}

export default BoxNotif