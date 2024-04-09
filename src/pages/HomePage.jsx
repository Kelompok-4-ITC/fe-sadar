import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/LogoSadar.svg";
import Notification from "../assets/Notification.svg";
import Photo from "../assets/corosek.png";
import Home from "../assets/Home.svg";
import HoverHome from "../assets/HoverHome.svg";
import Process from "../assets/Process.svg";
import Chat from "../assets/Chat.svg";
import Icon from "../assets/IconProfile.svg";
import PickUp from "../assets/PickUp.svg";
import DropOff from "../assets/DropOff.svg";
import Shop from "../assets/Shop.svg";
import AboutUs from "../assets/BannerAboutUs.svg";
import ArrowButton from "../assets/ArrowButtonBanner.svg";
import Berita1 from "../img/Berita1.svg";
import Navbar from "../components/Navbar";


function HomePage() {
  // Sekarang Halaman Home
  const valueNavbar = 'home';

  // untuk navigate
  const navigate = useNavigate();
  function keTentangKami() {
    navigate('/test')
  }
  function keBerita() {
    navigate('/berita')
  }
  function keNotif() {
    navigate('/notifikasi')
  }
  function kePickUp() {
    navigate('/pick-up')
  }
  function keDropOff() {
    navigate('/drop-off')
  }
  function keShop() {
    navigate('/shop')
  }


  return (
    // <div className="flex flex-col items-center justify-center h-svh">
    //   <div>Ini Halaman HomePage</div>
    //   <Link to="/login" className="font-bold text-red-500">Menuju ke Login</Link>
    // </div>

    <div className="">
      {/* headline */}
      <div className="fixed z-50">
        <div className="w-screen py-[10px] px-[20px] bg-white ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row content-center items-center text-[20px] font-semibold">
              <img src={Logo} /> SADAR
            </div>
            <img src={Notification} className="cursor-pointer" onClick={keNotif} />
          </div>
        </div>
      </div>

      <div className="py-[51px]">
        <img src={Photo} alt="" />
        {/* main content */}
        <div className="absolute w-screen -mt-[41px] py-[10px] pb-[61px] bg-white border rounded-t-[20px] content-center px-[10px]">
          <div className="flex flex-row space-x-[25px] justify-center pb-[10px]">
            <div className="flex flex-col font-semibold text-[10px] text-center cursor-pointer" onClick={kePickUp}>
              <img src={PickUp} alt="" />
              Pick Up
            </div>
            <div className="flex flex-col font-semibold text-[10px] text-center cursor-pointer" onClick={keDropOff}>
              <img src={DropOff} alt="" />
              Drop Off
            </div>
            <div className="flex flex-col font-semibold text-[10px] text-center cursor-pointer" onClick={keShop}>
              <img src={Shop} alt="" />
              Shop
            </div>
          </div>

          {/* NOTE : Kata PM Gak usah pake ini  */}
          {/* <div
            className="flex w-[340px] h-[100px] px-[15px] bg-cover bg-[url('../assets/BannerAboutUs.svg')] flex-row item-center border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025] cursor-pointer"
            onClick={keTentangKami}>
            <div className="m-auto font-bold text-[20px] text-white">
              Kenalan dengan Kami Kelompok 4 - ITC
            </div>
            <img src={ArrowButton} alt="" className="w-[30px]" />
            <div></div>
          </div> */}

          <div className="font-bold text-black text-[20px] py-[10px]">
            Berita Apa Hari Ini?
          </div>

          <div>
            <div className="p-[10px] border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025]" onClick={keBerita}>
              <div className="flex flex-row w-[340px] h-[99px] items-center space-x-[10px]">
                <img
                  src={Berita1}
                  alt=""
                  className="border object-cover w-[75px] h-[75px] rounded-[10px]"
                />
                <div className="font-medium text-[11px]">
                  <div className="font-bold text-[15px]">
                    Hari Sampah Sedunia
                  </div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when...
                </div>
              </div>
            </div>

            <div className="p-[10px] border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025]">
              <div className="flex flex-row w-[340px] h-[99px] items-center space-x-[10px]">
                <img
                  src={Berita1}
                  alt=""
                  className="border object-cover w-[75px] h-[75px] rounded-[10px]"
                />
                <div className="font-medium text-[11px]">
                  <div className="font-bold text-[15px]">
                    Hari Sampah Sedunia
                  </div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when...
                </div>
              </div>
            </div>

            <div className="p-[10px] border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025]">
              <div className="flex flex-row w-[340px] h-[99px] items-center space-x-[10px]">
                <img
                  src={Berita1}
                  alt=""
                  className="border object-cover w-[75px] h-[75px] rounded-[10px]"
                />
                <div className="font-medium text-[11px]">
                  <div className="font-bold text-[15px]">
                    Hari Sampah Sedunia
                  </div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bottom-0 fixed w-screen">
        {/* <div className="bottom-0 p-[10px] fixed w-screen border border-[#DCE1E4] bg-white"> */}
        <Navbar value={valueNavbar} />
        {/* <div className="flex justify-between">
          <div className="flex-1 group flex items-center justify-center">
            <a
              href="#"
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="relative">
                <img src={Home} alt="" className="w-6 h-6" />
                <img
                  src={HoverHome}
                  alt=""
                  className="w-6 h-6 absolute inset-0 opacity-0 hover:opacity-100"
                />
              </div>

              <span className="text-[10px] text-[#79747E] font-semibold hover:text-black">
                Home
              </span>
            </a>
          </div>
          <div className="flex-1 group flex items-center justify-center">
            <a
              href="#"
              className="flex flex-col items-center justify-center text-center"
            >
              <img src={Process} alt="" className="w-6 h-6" />
              <span className="text-[10px] text-[#79747E] font-semibold hover:text-black">
                Process
              </span>
            </a>
          </div>
          <div className="flex-1 group flex items-center justify-center">
            <a
              href="#"
              className="flex flex-col items-center justify-center text-center"
            >
              <img src={Chat} alt="" className="w-6 h-6" />
              <span className="text-[10px] text-[#79747E] font-semibold hover:text-black">
                Chat
              </span>
            </a>
          </div>
          <div className="flex-1 group flex items-center justify-center">
            <a
              href="#"
              className="flex flex-col items-center justify-center text-center icon-profile"
            >
              <img src={Icon} alt="" className="w-6 h-6" />
              <span className="text-[10px] text-[#79747E] font-semibold hover:text-black">
                Profile
              </span>
            </a>
          </div>
        </div> */}
      </div>

    </div>
  );
}

export default HomePage;
