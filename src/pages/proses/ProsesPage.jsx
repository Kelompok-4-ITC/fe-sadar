import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import History from "../../assets/History.svg";
import HoverHistory from "../../assets/HoverHistory.svg";
import PickUp from "../../img/Icon-PickUp.png";
import DropOff from "../../img/Icon-Drop-Off.png";

import Navbar from "../../components/Navbar";

function ProsesPage() {
  const [filter, setFilter] = useState("all");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const valueNavbar = "proses";

  const token = sessionStorage.getItem("jwttoken");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/process/list-order",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data.listPickUp);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  function keRiwayatTransaksi() {
    navigate("/riwayat-transaksi");
  }

  function keDetailRiwayat(jenisPesanan, kodePemesanan) {
    navigate(`/detail-riwayat/${jenisPesanan}/${kodePemesanan}`);
  }

  function keProsesCek(jenisPesanan, kodePemesanan) {
    navigate(`/proses/cek/${jenisPesanan}/${kodePemesanan}`);
  }

  console.log(orders);

  return (
    <div>
      <div className="p-[20px]">
        <div className="pb-[20px] font-normal text-[15px]">
          <div className="w-full h-fit flex flex-row items-center justify-between pb-[10px]">
            <div className="font-bold text-[25px] p-[10px]">Process </div>
            <div
              className="relative cursor-pointer"
              onClick={keRiwayatTransaksi}
            >
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

            <div className="mt-[20px] flex flex-col gap-[20px]">
              {/* Orders List */}
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                orders
                  .filter(
                    (order) =>
                      filter === "all" ||
                      (order.status &&
                        order.status.namaStatus.toLowerCase() === filter)
                  )
                  .map((order) => (
                    <div
                      key={order.idPickUp}
                      className={`shadow-[0px_4px_4px_0px_#00000025] border-0 rounded-[10px] cursor-pointer ${
                        filter === "all" ||
                        (order.status &&
                          order.status.namaStatus.toLowerCase() === filter)
                          ? ""
                          : "hidden"
                      }`}
                      onClick={() =>
                        //  keProsesCek
                        keProsesCek(
                          order.status
                            ? order.status.namaStatus.toLowerCase()
                            : "unknown",
                          order.idPickUp
                        )
                      }
                    >
                      <div className="p-[10px] bg-sadar-primary-color border-0 rounded-t-[10px] flex flex-row justify-between">
                        <div className="font-medium text-[13px]">
                          Kode Pemesanan{" "}
                          <div className="font-bold">{order.idPickUp}</div>
                        </div>
                        <span className="py-[8px] px-[13px] rounded-[10px] text-[15px] font-medium border bg-[#EBFBEE] text-[#2AB445] pointer-events-none">
                          {order.status ? order.status.namaStatus : "Unknown"}
                        </span>
                      </div>
                      <div className="flex flex-row justify-center py-[20px] px-[15px] gap-[10px] items-center border-0 rounded-b-[10px] bg-sadar-second-white">
                        <img
                          src={
                            order.status &&
                            order.status.namaStatus.toLowerCase() === "pickup"
                              ? PickUp
                              : DropOff
                          }
                          alt=""
                          className="border-0 rounded-[10px]"
                        />
                        <div className="font-extrabold text-[30px]">
                          PICK UP
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 fixed w-screen border border-sadar-secondary-color bg-white">
        <Navbar value={valueNavbar}></Navbar>
      </div>
    </div>
  );
}

export default ProsesPage;
