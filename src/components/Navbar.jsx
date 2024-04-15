import IconHome from "../img/navbar-aktive-home.png";
import IconHomeMati from "../img/navbar-mati-home.png";
import IconProses from "../img/navbar-aktive-proses.png";
import IconProsesMati from '../img/navbar-mati-proses.png';
import IconChat from '../img/navbar-aktive-chat.png';
import IconChatMati from '../img/navbar-mati-chat.png';
import IconProfile from '../img/navbar-aktive-profile.png';
import IconProfileMati from '../img/navbar-mati-profile.png';

import { useNavigate } from "react-router-dom"

function Navbar({ value }) {
  // Sekarang halaman apa
  const active = value;

  // navigasi
  // untuk navigate
  const navigate = useNavigate();
  function keHome() {
    navigate('/')
  }
  function keProses() {
    navigate('/proses')
  }
  function keChat() {
    navigate('/chat')
  }
  function keProfile() {
    navigate('/profile')
  }

  return (
    <>
      <section className='flex justify-between items-center pt-3 pb-1 px-3 border border-t-2 border-t-sadar-secondary-color bg-white w-full h-auto'>
        <div
          className='flex flex-col py-1 justify-center items-center cursor-pointer'
          onClick={keHome}
        >
          {(active == "home") ?
            <>
              <img
                src={IconHome}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-black text-center'>Home</span>
            </>
            :
            <>
              <img
                src={IconHomeMati}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-grey text-center'>Home</span>
            </>
          }
        </div>
        <div
          className='flex flex-col py-1 justify-center items-center cursor-pointer'
          onClick={keProses}
        >
          {(active == "proses") ?
            <>
              <img
                src={IconProses}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-black text-center'>Proses</span>
            </>
            :
            <>
              <img
                src={IconProsesMati}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-grey text-center'>Proses</span>
            </>
          }
        </div>
        <div
          className='flex flex-col py-1 justify-center items-center cursor-pointer'
          onClick={keChat}
        >
          {(active == "chat") ?
            <>
              <img
                src={IconChat}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-black text-center'>Chat</span>
            </>
            :
            <>
              <img
                src={IconChatMati}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-grey text-center'>Chat</span>
            </>
          }
        </div>
        <div
          className='flex flex-col py-1 justify-center items-center cursor-pointer'
          onClick={keProfile}
        >
          {(active == "profile") ?
            <>
              <img
                src={IconProfile}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-black text-center'>Profil</span>
            </>
            :
            <>
              <img
                src={IconProfileMati}
                className='w-full'
              />
              <span className='font-semibold text-xs text-t-grey text-center'>Profil</span>
            </>
          }
        </div>
      </section>
    </>
  )
}

export default Navbar