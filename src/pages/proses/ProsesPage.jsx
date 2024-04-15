import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import History from "../../assets/History.svg";
import HoverHistory from "../../assets/HoverHistory.svg";
import PickUp from "../../img/Icon-PickUp.png";
import DropOff from "../../img/Icon-Drop-Off.png";

import Navbar from "../../components/Navbar";

function ProsesPage() {
  const valueNavbar = 'proses';
  const navigate = useNavigate();
  
  function keRiwayatTransaksi() {
    navigate('/riwayat-transaksi');
  }
  
  function keDetailRiwayat(jenisPesanan,kodePemesanan) {
    navigate(`/detail-riwayat/${jenisPesanan}/${kodePemesanan}`);
  }

  const [filter, setFilter] = useState("all");

  return (
    <div>
      <div className="p-[20px]">
        <div className="pb-[20px] font-normal text-[15px]">
          <div className="w-full h-fit flex flex-row items-center justify-between pb-[10px]">
            <div className="font-bold text-[25px] p-[10px]">Process </div>
            <div className="relative" onClick={keRiwayatTransaksi}>
              <img src={History} alt="" className="" />
              <img
                src={HoverHistory}
                alt=""
                className="absolute inset-0 opacity-0 hover:opacity-100"
              />
            </div>
          </div>
          Semua proses yang sedang berlangsung menunggu langkah selanjutnya
        </div>

        <div className="p-[10px] w-full h-fit border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025] bg-[#EBFBEE]">
          <div className="flex flex-col">
            <div className="font-semibold text-[20px] text-t-black pb-[10px]">
              Pesanan saya
            </div>
            <div className="font-semibold text-[15px] flex flex-row justify-between text-t-grey">
              <button
                type="button"
                className={`font-medium focus:font-semibold border-[2px] rounded-full w-[80px] h-[34px] border-t-grey focus:text-sadar-primary-color focus:border-sadar-primary-color ${
                  filter === "all" && "text-sadar-primary-color"
                }`}
                onClick={() => setFilter("all")}
              >
                Semua
              </button>
              <button
                type="button"
                className={`font-medium focus:font-semibold border-[2px] rounded-full w-[85px] h-[34px] border-t-grey focus:text-sadar-primary-color focus:border-sadar-primary-color ${
                  filter === "pickup" && "text-sadar-primary-color"
                }`}
                onClick={() => setFilter("pickup")}
              >
                Pick Up
              </button>
              <button
                type="button"
                className={`font-medium focus:font-semibold border-[2px] rounded-full w-[92px] h-[34px] border-t-grey focus:text-sadar-primary-color focus:border-sadar-primary-color ${
                  filter === "dropoff" && "text-sadar-primary-color"
                }`}
                onClick={() => setFilter("dropoff")}
              >
                Drop Off
              </button>
            </div>
            {/* Pick Up */}
            <div className="flex flex-col py-[10px] gap-[10px]">
              <div
                className={`shadow-[0px_4px_4px_0px_#00000025] border-0 rounded-[10px] cursor-pointer ${
                  filter === "all" || filter === "pickup" ? "" : "hidden"
                }`} 
                onClick={() => keDetailRiwayat("pickup","RNG7J7A")}
              >
                <div className="p-[10px] bg-sadar-primary-color border-0 rounded-t-[10px] flex flex-row justify-between">
                  <div className="font-medium text-[13px]">
                    Kode Pemesanan <div className="font-bold">RNG7J7A</div>
                  </div>
                  <span className="py-[8px] px-[13px] rounded-[10px] text-[15px] font-medium border bg-[#EBFBEE] text-[#2AB445] pointer-events-none">
                    Selesai
                  </span>
                </div>
                <div className="flex flex-row justify-center py-[20px] px-[15px] gap-[10px] items-center border-0 rounded-b-[10px] bg-sadar-second-white">
                  <img
                    src={PickUp}
                    alt=""
                    className="border-0 rounded-[10px]"
                  />
                  <div className="font-extrabold text-[30px]">PICK UP</div>
                </div>
              </div>
              {/* DropOff */}
              <div
                className={`shadow-[0px_4px_4px_0px_#00000025] border-0 rounded-[10px] cursor-pointer ${
                  filter === "all" || filter === "dropoff" ? "" : "hidden"
                }`}
                onClick={() => keDetailRiwayat("dropoff","KUI8K8A")}
              >
                <div className="p-[10px] bg-sadar-primary-color border-0 rounded-t-[10px] flex flex-row justify-between">
                  <div className="font-medium text-[13px]">
                    Kode Pemesanan <div className="font-bold">KUI8K8A</div>
                  </div>
                  <span className="py-[8px] px-[13px] rounded-[10px] text-[15px] font-medium border bg-[#EBFBEE] text-[#2AB445] pointer-events-none">
                    Selesai
                  </span>
                </div>
                <div className="flex flex-col justify-center pt-[15px] px-[15px] pb-[10px] items-center border-0 rounded-b-[10px] bg-sadar-second-white">
                  <div className="flex flex-row items-center gap-[10px]">
                    <img
                      src={DropOff}
                      alt=""
                      className="border-0 rounded-[10px]"
                    />
                    <div className="font-extrabold text-[30px]">DROP OFF</div>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full py-[5px] px-[10px]">
                    <div className="font-semibold text-[13px]">Pak Ahmad</div>
                    <span className="py-[8px] px-[10px] rounded-[10px] text-[13px] font-semibold border bg-sadar-primary-color text-t-white  hover:bg-sadar-thrid-black">
                      Chat
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="bottom-0 fixed w-screen border border-sadar-secondary-color bg-white">
        <Navbar value={valueNavbar}></Navbar>
      </div>
    </div>
  );
}

export default ProsesPage;
