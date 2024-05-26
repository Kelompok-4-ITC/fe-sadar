import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../../components/BackButton";
import PickUp from "../../img/Icon-PickUp.png";
import DropOff from "../../img/Icon-Drop-Off.png";
import Location from "../../img/icon-location.png";
import Recycle from "../../img/Logo Daur Ulang.png";
import TombolBuka from "../../img/Tombol-Buka.png";
import Mouse from "../../assets/Mouse.svg";

function ListOrder() {
  const navigate = useNavigate();
  const { jenisPesanan, kodePemesanan } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const token = sessionStorage.getItem("jwttoken");
        if (!token) {
          throw new Error("JWT token is missing.");
        }

        const response = await axios.get(
          `https://kelompok4-dot-personal-website-415207.et.r.appspot.com/process/detail-order/jenisOrder=pickUp&kodeOrder=${kodePemesanan}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const result = response.data;
          const order = result.order;
          console.log(result)
          const orders = {
            status: result.status,
            message: result.message,
            idPickUp: order.idPickUp,
            alamat: order.alamat,
            createdAt: order.createdAt,
            namaStatus: order.status?.namaStatus || "Unknown",
            custfullName: order.Customer?.fullName || "Unknown",
            custfotoProfile: order.Customer?.fotoProfile || "",
            drivfullName: order.Driver?.fullName || "Unknown",
            listSampah: order.listSampah || [],
            listBarang: order.listBarang || [],
          };
          console.log(orders)
          setOrderDetails(orders);
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (err) {
        console.error("Error fetching order details:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [kodePemesanan, jenisPesanan]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!orderDetails) {
    return <div>Data not available</div>;
  }

  const renderLogo = () => {
    if (jenisPesanan === "pickup") {
      return <img src={PickUp} alt="Pick Up Logo" className="w-[50px] h-[50px] border-0 rounded-[10px]" />;
    } else if (jenisPesanan === "dropoff") {
      return <img src={DropOff} alt="Drop Off Logo" className="w-[50px] h-[50px] border-0 rounded-[10px]" />;
    }
  };

  return (
      <div className="flex flex-col">
        <div className="py-[10px] mx-[20px] border-0 border-b-2 border-black">
          <div className="flex flex-row items-center justify-between">
            <BackButton path={"/proses"} />
            <div className="font-semibold text-[24px]">Detail Riwayat</div>
            <div className="w-[28px] h-[28px]"></div>
          </div>
        </div>
  
        <div className="flex flex-row py-[10px] mx-[20px] border-0 border-b-2 border-black justify-between items-center">
          <div className="w-[50px] h-fit flex flex-col font-semibold text-[10px] text-center gap-[5px]">
            {renderLogo()}
            {jenisPesanan === "pickup" ? "Pick Up" : "Drop Off"}
          </div>
          <div className="text-[13px] flex flex-col items-end">
            Kode Pemesanan <div className="font-bold"> {kodePemesanan} </div>
          </div>
        </div>
  
        <div className="py-[10px] mx-[20px] border-0 border-b-2 border-black">
          <div className="p-[10px] flex flex-row space-x-[6px]">
            <img src={Location} alt="Location" className="w-[16px] h-[22px]" />
            <div className="flex flex-col px-[5px] space-y-[5px]">
              <div className="font-semibold text-t-black text-[18px]">
                Alamat Penjemputan
              </div>
              <div className="flex flex-row space-x-[10px] text-[15px]">
                <div>{orderDetails.custfullName}</div>
              </div>
              <div className="text-[15px]">{orderDetails.alamat}</div>
            </div>
          </div>
        </div>
  
        <div className="py-[10px] mx-[20px] flex flex-col space-y-[15px]">
          <div className="flex flex-col space-y-[10px]">
            <div className="font-semibold text-t-black text-[18px]">
              Total Barang : {orderDetails.listBarang.length} Barang
            </div>
            {orderDetails.listBarang.map((barang) => (
              <div
                key={barang.idBarang}
                className="flex flex-row gap-[5px] border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025] bg-t-white p-[10px]"
              >
                <img
                  src={Recycle}
                  alt="Barang"
                  className="w-[65px] h-[65px] border-0 rounded-[15px]"
                />
                <div className="flex flex-col gap-[5px] w-full">
                  <div className="bg-sadar-secondary-color border-0 rounded-[10px]">
                    <div className="flex flex-row justify-between py-[6px] px-[10px]">
                      <div className="font-bold text-[15px] text-sadar-second-black">
                        {barang.deskripsiBarang}
                      </div>
                      <img src={TombolBuka} alt="Toggle" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                  <div className="font-semibold text-[13px] border rounded-[8px] py-[8px] px-[10px] border-sadar-secondary-color">
                    {barang.deskripsiBarang}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-[18px]">List Barang Bekas</div>
            <div className="flex flex-col gap-[10px]">
              {orderDetails.listBarang.map((barang) => (
                <div
                  key={barang.idBarang}
                  className="flex flex-col gap-[10px] border-0 rounded-[10px] shadow-[0px_4px_4px_0px_#00000025] bg-t-white p-[10px]"
                >
                  <div className="flex flex-row gap-[10px]">
                    <img
                      src={Mouse}
                      alt={barang.deskripsiBarang}
                      className="w-[64px] h-[64px] border rounded-[10px] border-sadar-secondary-color"
                    />
                    <div className="flex flex-col gap-[10px] w-full">
                      <div className="flex flex-col gap-[5px]">
                        <div className="font-semibold text-[15px] text-sadar-second-black">
                          Nama Barang
                        </div>
                        <div className="font-semibold text-[13px] border rounded-[8px] py-[8px] px-[10px] border-sadar-secondary-color text-t-black">
                          {barang.deskripsiBarang}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px]">
                        <div className="font-semibold text-[15px] text-sadar-second-black">
                          Harga Jual
                        </div>
                        <div className="font-semibold text-[13px] border rounded-[8px] py-[8px] px-[10px] border-sadar-secondary-color text-t-black">
                          Rp. {barang.hargaBarang}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div className="font-semibold text-[15px] text-sadar-second-black">
                      Deskripsi Barang
                    </div>
                    <div className="font-semibold text-[13px] border rounded-[8px] py-[8px] px-[10px] border-sadar-secondary-color text-t-black">
                      {barang.deskripsiBarang}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );  
}

export default ListOrder;
