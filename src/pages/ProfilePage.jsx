import {Link} from "react-router-dom";
import Logout from "../assets/Logout.svg";
import Home from "../assets/Home.svg";
import HoverHome from "../assets/HoverHome.svg";
import HoverProcess from "../assets/HoverProcess.svg";
import HoverChat from "../assets/HoverChat.svg";
import HoverIcon from "../assets/HoverIconProfile.svg";
import Process from "../assets/Process.svg";
import Chat from "../assets/Chat.svg";
import Icon from "../assets/IconProfile.svg";
import Header from "../assets/HeaderProfile.svg";
import PFP from "../assets/PhotoProfile.svg";
import Edit from "../assets/IconEditProfile.svg";
import "../css/index.css";

function ProfilePage() {
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
      <div className="bottom-0 p-[10px] fixed w-screen border border-[#DCE1E4] bg-white">
        <div className="flex justify-between">
          <div className="flex-1 group flex items-center justify-center">
            <Link
              to="/"
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
            </Link>
          </div>
          <div className="flex-1 group flex items-center justify-center">
            <a
              href="#"
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="relative">
                <img src={Process} alt="" className="w-6 h-6" />
                <img
                  src={HoverProcess}
                  alt=""
                  className="w-6 h-6 absolute inset-0 opacity-0 hover:opacity-100"
                />
              </div>
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
              <div className="relative">
                <img src={Chat} alt="" className="w-6 h-6" />
                <img
                  src={HoverChat}
                  alt=""
                  className="w-6 h-6 absolute inset-0 opacity-0 hover:opacity-100"
                />
              </div>
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
              <div className="relative">
                <img src={Icon} alt="" className="w-6 h-6" />
                <img
                  src={HoverIcon}
                  alt=""
                  className="w-6 h-6 absolute inset-0 opacity-0 hover:opacity-100"
                />
              </div>
              <span className="text-[10px] text-[#79747E] font-semibold hover:text-black">
                Profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
