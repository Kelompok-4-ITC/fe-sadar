import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Filter from "../../assets/Filter.svg";
import HoverFilter from "../../assets/HoverFilter.svg";
import PickUp from "../../img/Icon-PickUp.png";
import DropOff from "../../img/Icon-Drop-Off.png";

function RiwayatTransaksi() {
  const navigate = useNavigate();
  const [showFilterIcon, setShowFilterIcon] = useState(false);

  function keProses() {
    navigate("/proses");
  }

  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col space-y-[15px]">
      <div className="py-[10px] mx-[20px] border-0 border-b-2 border-black ">
        <div className="flex flex-row items-center justify-between">
          <BackButton path={"/profile"} />
          <div className="font-semibold text-[24px]">Riwayat Transaksi</div>
          <div className="w-[28px] h-[28px]"></div>
        </div>
      </div>
      <div className="flex flex-row justify-between px-[20px] text-t-grey">
        <button
          type="button"
          className="flex flex-row items-center font-medium focus:font-semibold text-[15px] gap-[5px] py-[6px] px-[11px] border-[2px] rounded-full w-fit border-t-grey focus:text-sadar-primary-color focus:border-sadar-primary-color"
          onClick={() => {
            setShowFilterIcon(!showFilterIcon);
            setFilter("all");
          }}
          
        >
          <img
            src={showFilterIcon ? HoverFilter : Filter}
            alt=""
            className="w-[14px] h-[15px]"
          />
          Filter
        </button>
        <button
          type="button"
          className={`font-medium focus:font-semibold text-[15px] gap-[5px] py-[6px] px-[11px] border-[2px] rounded-full w-fit border-t-grey focus:text-sadar-primary-color focus:border-sadar-primary-color ${
            filter === "pickup" && "text-sadar-primary-color"
          }`}
          onClick={() => setFilter("pickup")}
        >
          Pick Up
        </button>
        <button
          type="button"
          className={`font-medium focus:font-semibold text-[15px] gap-[5px] py-[6px] px-[11px] border-[2px] rounded-full w-fit border-t-grey focus:text-sadar-primary-color focus:border-sadar-primary-color ${
            filter === "dropoff" && "text-sadar-primary-color"
          }`}
          onClick={() => setFilter("dropoff")}
        >
          Drop Off
        </button>
      </div>

      <div className="flex space-y-[17px] flex-col">
        <div className="w-screen font-semibold text-[15px] bg-sadar-primary-color px-[20px] py-[10px]">
          15 Februari 2024
        </div>
        <div className="mx-[20px]">
          {/* Pick Up */}
          <div className="flex flex-col gap-[10px]">
            <div
              className={`shadow-[0px_4px_4px_0px_#00000025] border-0 rounded-[10px] ${
                filter === "all" || filter === "pickup" ? "" : "hidden"
              }`}
            >
              <div className="p-[10px] bg-sadar-primary-color border-0 rounded-t-[10px] flex flex-row justify-between">
                <div className="font-medium text-[13px]">
                  Kode Pemesanan <div className="font-bold">RNG7J7A</div>
                </div>
                <span className="py-[8px] px-[13px] rounded-[10px] text-[15px] font-medium border bg-[#EBFBEE] text-[#2AB445] pointer-events-none">
                  Proses
                </span>
              </div>
              <div className="flex flex-row justify-center py-[20px] px-[15px] gap-[10px] items-center border-0 rounded-b-[10px] bg-sadar-second-white">
                <img src={PickUp} alt="" className="border-0 rounded-[10px]" />
                <div className="font-extrabold text-[30px]">PICK UP</div>
              </div>
            </div>
            {/* DropOff */}
            <div
              className={`shadow-[0px_4px_4px_0px_#00000025] border-0 rounded-[10px] ${
                filter === "all" || filter === "dropoff" ? "" : "hidden"
              }`}
            >
              <div className="p-[10px] bg-sadar-primary-color border-0 rounded-t-[10px] flex flex-row justify-between">
                <div className="font-medium text-[13px]">
                  Kode Pemesanan <div className="font-bold">RNG7J7A</div>
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

      <div className="flex space-y-[17px] flex-col">
        <div className="w-screen font-semibold text-[15px] bg-sadar-primary-color px-[20px] py-[10px]">
          10 Maret 2024
        </div>
        <div className="mx-[20px]">
          <div className="flex flex-col gap-[10px]">
            {/* DropOff */}
            <div
              className={`shadow-[0px_4px_4px_0px_#00000025] border-0 rounded-[10px] ${
                filter === "all" || filter === "dropoff" ? "" : "hidden"
              }`}
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
  );
}

export default RiwayatTransaksi;
