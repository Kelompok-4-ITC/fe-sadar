import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../assets/HeaderProfile.svg";
import PFP from "../../assets/PhotoProfile.svg";
import Edit from "../../assets/IconEditProfile.svg";
import Forward from "../../assets/Forward.svg";
import InfoPersonal from "../../assets/InfoPersonal.svg";
import HoverInfoPersonal from "../../assets/HoverInfoPersonal.svg";
import Achievement from "../../assets/Achievement.svg";
import HoverAchievement from "../../assets/HoverAchievement.svg";
import RiwayatTransaksi from "../../assets/RiwayatTransaksi.svg";
import HoverRiwayatTransaksi from "../../assets/HoverRiwayatTransaksi.svg";
import FAQ from "../../assets/FAQ.svg";
import HoverFAQ from "../../assets/HoverFAQ.svg";
import Settings from "../../assets/Settings.svg";
import HoverSetting from "../../assets/HoverSetting.svg";
import Logout from "../../assets/Logout.svg";
import HoverLogout from "../../assets/HoverLogout.svg";
import Cancel from "../../assets/Cancel.svg";
import Logout2 from "../../assets/Logout2.svg";
import "../../css/index.css";
import Navbar from "../../components/Navbar";

function ProfilePage() {
  const valueNavbar = "profile";
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function keinfoPersonal() {
    navigate("/profile/info");
  }

  function keRiwayatTransaksi() {
    navigate("/riwayat-transaksi");
  }

  function keFAQ() {
    navigate("/profile/faq");
  }

  function keAchievement() {
    navigate("/profile/achievement");
  }

  function keSetting() {
    navigate("/profile/setting");
  }

  function handleLogout() {
    // Hapus token autentikasi yang disimpan
    sessionStorage.removeItem("jwttoken");
    // Setelah logout, navigasikan pengguna kembali ke halaman login
    navigate("/login");
  }

  return (
    <div>
      <div className="h-screen relative py-[24px] mb-[110px]">
        <div className="fixed top-0 px-5 py-2.5 w-full">
          <div className="flex items-center justify-center font-medium w-full text-center">
            <span className="text-[20px]">Profile</span>
          </div>
        </div>

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
            <div className="px-[20px] w-full">
              <div className="group font-medium text-[16px] flex flex-col items-center w-full justify-center border-0 rounded-[10px] bg-sadar-fourth-white py-[5px] px-[15px] hover:border-[2px] hover:border-black hover:bg-sadar-primary-color hover:text-t-white">
                <div>ITC-4 Driver</div>
                <span className="h-[2px] bg-sadar-fourth-black w-full group-hover:bg-t-black"></span>
                <div>Pahlawan Bumi</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[410px] px-[10px] flex flex-col gap-[15px] py-[10px] font-medium text-[16px]">
          <div
            className="group border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px] cursor-pointer hover:border-[3px] hover:border-sadar-fourth-black"
            onClick={keinfoPersonal}
          >
            <img src={InfoPersonal} alt="" />
            <img
              src={HoverInfoPersonal}
              alt=""
              className="absolute h-[30px] w-[30px] opacity-0 group-hover:opacity-100 group-hover:bg-white"
            />
            <div className="w-full">Info Personal</div>
            <img src={Forward} alt="" />
          </div>

          <div
            className="border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px] cursor-pointer group hover:border-[3px] hover:border-sadar-fourth-black"
            onClick={keRiwayatTransaksi}
          >
            <img src={RiwayatTransaksi} alt="" />
            <img
              src={HoverRiwayatTransaksi}
              alt=""
              className="absolute h-[30px] w-[30px] opacity-0 group-hover:opacity-100 group-hover:bg-white"
            />
            <div className="w-full">Riwayat Transaksi</div>
            <img src={Forward} alt="" />
          </div>

          <div
            className="group hover:border-[3px] hover:border-sadar-fourth-black border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px] cursor-pointer"
            onClick={keFAQ}
          >
            <img src={FAQ} alt="" />
            <img
              src={HoverFAQ}
              alt=""
              className="absolute h-[30px] w-[30px] opacity-0 group-hover:opacity-100 group-hover:bg-white"
            />
            <div className="w-full">Pertanyaan dan Bantuan</div>
            <img src={Forward} alt="" />
          </div>

          <div
            className="group hover:border-[3px] hover:border-sadar-fourth-black border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px] cursor-pointer"
            onClick={keAchievement}
          >
            <img src={Achievement} alt="" />
            <img
              src={HoverAchievement}
              alt=""
              className="absolute h-[30px] w-[30px] opacity-0 group-hover:opacity-100 group-hover:bg-white"
            />
            <div className="w-full">Pencapaian</div>
            <img src={Forward} alt="" />
          </div>

          <div
            className="group hover:border-[3px] hover:border-sadar-fourth-black border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px] cursor-pointer"
            onClick={keSetting}
          >
            <img src={Settings} alt="" />
            <img
              src={HoverSetting}
              alt=""
              className="absolute h-[30px] w-[30px] opacity-0 group-hover:opacity-100 group-hover:bg-white"
            />
            <div className="w-full">Pengaturan</div>
            <img src={Forward} alt="" />
          </div>

          <div
            className="group hover:border-[3px] hover:border-sadar-fourth-black border border-black p-[10px] flex flex-row justify-between gap-[12px] items-center rounded-[10px] cursor-pointer mb-16"
            onClick={() => setIsModalOpen(true)}
          >
            <img src={Logout} alt="" />
            <img
              src={HoverLogout}
              alt=""
              className="absolute h-[30px] w-[30px] opacity-0 group-hover:opacity-100 group-hover:bg-white"
            />
            <div className="w-full">Logout</div>
            <img src={Forward} alt="" />
          </div>
        </div>
      </div>

      <div className="bottom-0 fixed w-screen">
        <Navbar value={valueNavbar}></Navbar>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white py-[20px] px-[10px] rounded-[10px] flex flex-col gap-[25px]">
            <h2 className="text-[16px] font-extrabold w-full text-center">
              LOGOUT
            </h2>
            <p className="font-bold text-[15px]">
              Apakah Anda yakin ingin logout?
            </p>
            <div className="flex justify-center gap-[15px] font-extrabold text-[16px]">
              <button
                className="p-[5px] border-[1px] border-[#D9D9D9] text-[#D9D9D9] rounded-[10px] w-full flex flex-row items-center h-fit justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <img src={Cancel} alt="" />
                Batal
              </button>
              <button
                className="p-[5px] bg-[#D42828] text-white rounded-[10px] w-full flex flex-row items-center h-fit justify-center"
                onClick={handleLogout}
              >
                <img src={Logout2} alt="" />
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
