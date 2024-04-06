import Logout from "../assets/Logout.svg";
import Home from "../assets/Home.svg";
import HoverHome from "../assets/HoverHome.svg";
import Process from "../assets/Process.svg";
import Chat from "../assets/Chat.svg";
import Icon from "../assets/IconProfile.svg";
import Header from "../assets/HeaderProfile.svg";
import PFP from "../assets/PhotoProfile.svg";
import Edit from "../assets/IconEditProfile.svg";
import "../css/index.css";

import Navbar from "../components/Navbar";

function ProfilePage() {
  // Sekarang Halaman Profile
  const valueNavbar = 'profile';

  return (
    <div className="h-screen relative py-[24px]">
      <div className="fixed top-0 px-5 py-2.5 w-full">
        <div className="flex items-center justify-between font-medium">
          <span className="w-[185px] text-end text-[20px]">Profile</span>
          <span className="">
            <img className="p-[5px]" src={Logout} alt="" />
          </span>
        </div>
      </div>

      {/* Header dan PFP */}
      <div className="fixed ">
        <div className="ml-[10px] w-[340px] h-[260px] mt-[46px]">
          <img src={Header} alt="" className="" />
          <div className="relative bottom-[60px] left-[110px]">
            <img src={PFP} alt="" className="bg-[#D9D9D9] bg-cover" />
            <img src={Edit} alt="" className="absolute bottom-0 left-0" />
          </div>
        </div>
      </div>

      {/* username */}



      {/* navbar */}
      <div className="bottom-0 fixed w-screen">
        <Navbar value={valueNavbar}></Navbar>
      </div>
    </div>

  );
}

export default ProfilePage;
