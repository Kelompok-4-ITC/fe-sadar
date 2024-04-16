import { Link } from "react-router-dom";
import Header from "../../assets/HeaderProfile.svg";
import PFP from "../../assets/PhotoProfile.svg";
import Edit from "../../assets/IconEditProfile.svg";
import Forward from "../../assets/Forward.svg";
import InfoPersonal from "../../assets/InfoPersonal.svg";
import Achievement from "../../assets/Achievement.svg";
import RiwayatTransaksi from "../../assets/RiwayatTransaksi.svg";
import FAQ from "../../assets/FAQ.svg";
import Settings from "../../assets/Settings.svg";
import Logout from "../../assets/Logout.svg";
import HoverInfoPersonal from "../../assets/InfoPersonal.svg";
import HoverAchievement from "../../assets/Achievement.svg";
import HoverRiwayatTransaksi from "../../assets/RiwayatTransaksi.svg";
import HoverFAQ from "../../assets/FAQ.svg";
import HoverSettings from "../../assets/Settings.svg";
import HoverLogout from "../../assets/Logout.svg";

import "../../css/index.css";

import Navbar from "../../components/Navbar";

function ProfilePage() {
  // Sekarang Halaman Profile
  const valueNavbar = "profile";

  return (
    <div>
      <div className="h-screen relative py-[24px] mb-[100px]">
        <div className="fixed top-0 px-5 py-2.5 w-full">
          <div className="flex items-center justify-center font-medium w-full text-center">
            <span className="text-[20px]">Profile</span>
          </div>
        </div>

        {/* Header dan PFP */}
        <div className="fixed mt-[24px] pb-[24px] bg-white">
          <div className="flex flex-col mt-[26px] items-center justify-center w-screen gap-[24px]">
            <div>
              <img src={Header} alt="" className="" />
              <div className="relative bottom-[60px] -mb-[60px] w-full flex justify-center">
                <div className="relative">
                  <img
                    src={PFP}
                    alt=""
                    className="bg-[#D9D9D9] bg-cover border-0 rounded-full"
                  />
                  <img src={Edit} alt="" className="absolute bottom-0 left-0" />
                </div>
              </div>
            </div>
            {/* username */}
            <div className="px-[20px] w-full">
              <div className="group font-medium text-[16px] flex flex-col items-center w-full justify-center border-0 rounded-[10px] bg-sadar-fourth-white py-[5px] px-[15px] hover:border-[2px] hover:border-black hover:bg-sadar-primary-color hover:text-t-white">
                <div>ITC-4 Driver</div>
                <span className="h-[2px] bg-sadar-fourth-black w-full group-hover:bg-t-black"></span>
                <div>Pahlawan Bumi</div>
              </div>
            </div>
          </div>
        </div>

        {/* informasi akun */}
        <div className="mt-[410px] px-[10px] flex flex-col gap-[15px] py-[10px] font-medium text-[16px]">
          <div className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px]">
            <img src={InfoPersonal} alt="" />
            <div className="w-full">Info Personal</div>
            <img src={Forward} alt="" />
          </div>

          <div className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px]">
            <img src={RiwayatTransaksi} alt="" />
            <div className="w-full">Riwayat Transaksi</div>
            <img src={Forward} alt="" />
          </div>

          <div className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px]">
            <img src={FAQ} alt="" />
            <div className="w-full">Pertanyaan dan Bantuan</div>
            <img src={Forward} alt="" />
          </div>

          <div className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px]">
            <img src={Achievement} alt="" />
            <div className="w-full">Pencapaian</div>
            <img src={Forward} alt="" />
          </div>

          <button
            type="button"
            data-hs-overlay="#logout"
            className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px]"
          >
            <img src={Logout} alt="" />
            <div className="w-full text-start">Logout</div>
            <img src={Forward} alt="" />
          </button>

          <div
            id="logout"
            className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
          >
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all min-h-[calc(100%-3.5rem)] flex items-center w-full justify-center">
              <div className="w-fit flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto gap-[25px] py-[20px] px-[10px]">
                <h3 className="font-extrabold text-t-black text-[16px] w-full text-center">
                  LOGOUT
                </h3>
                <div className="overflow-y-auto">
                  <p className="font-bold text-[15px] text-t-black">
                    Anda ingin keluar dari akun anda?
                  </p>
                </div>
                <div className="flex justify-center items-center gap-x-[15px]">
                  <button
                    type="button"
                    className="p-[5px] w-full h-[40px] flex flex-row justify-center items-center gap-x-2 text-[16px] font-extrabold rounded-[10px] border border-[#D9D9D9] text-[#D9D9D9]"
                    data-hs-overlay="#logout"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    className="p-[5px] w-full h-[40px] flex flex-row justify-center items-center gap-x-2 text-[16px] font-extrabold rounded-[10px] border-0 bg-[#D42828] text-white "
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px]">
            <img src={Settings} alt="" />
            <div className="w-full">Pengaturan</div>
            <img src={Forward} alt="" />
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bottom-0 fixed w-screen">
        <Navbar value={valueNavbar}></Navbar>
      </div>
    </div>
  );
}

export default ProfilePage;
