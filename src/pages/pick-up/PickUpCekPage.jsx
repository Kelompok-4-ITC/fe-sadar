import { useLocation, useNavigate } from "react-router-dom";
import TitleComponent from "../../components/TitleComponent";
import LogoDaurUlang from "../../img/Logo Daur Ulang.png";
import LogoAlamat from "../../img/icon-location.png";
import ArrowButton from "../../assets/ArrowButton.svg";
import axios from "axios";
import { useEffect } from "react";
import { toast } from 'react-toastify'

function PickUpCekPage() {
  const locationState = useLocation().state;
  const { listSampah, listBarang, userData } = locationState || {};
  const navigate = useNavigate();
  // Kalo belum login suruh login dulu dan kalo userData kosong mbalik ke pick-up
  useEffect(() => {
    if (!sessionStorage.getItem('jwttoken')) {
      navigate("/login");
    }
    if (userData == undefined || userData == null || listSampah == undefined ) {
      navigate("/pick-up");
    }
  }, [navigate, userData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = sessionStorage.getItem("jwttoken");
      const formData = new FormData();

      formData.append("listSampah", JSON.stringify(listSampah));
      formData.append("listBarang", JSON.stringify(listBarang));

      listBarang.forEach((barang, index) => {
        if (barang.previewImage) {
          formData.append(`barangImage_${index}`, barang.previewImage);
        }
      });

      const response = await axios.post(
        "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/pickup/make-order",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Order berhasil dibuat:", response.data);
      console.log("Order berhasil dibuat:", response.data);
      if (response.data.status = "success") {
        navigate("/pick-up/sukses");
      }
    } catch (error) {
      let err = error.response.data.message;
      toast.error(`Terjadi kesalahan saat membuat order: ${err}`);
      console.error("Terjadi kesalahan saat membuat order:", error.response.data.message);
      // Tambahkan notifikasi kesalahan kepada pengguna di sini jika diperlukan
    }
  };

  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white md:w-1/2 md:m-auto">
      {userData && (
        <div>
          <TitleComponent path={"/pick-up"} title={"Pick Up"}></TitleComponent>
          <div className="px-5">
            <div className="bg-t-black h-[3px] w-full rounded"></div>
          </div>
          <div>
            <div className="w-full px-5">
              <div className="p-2 flex gap-1">
                <img
                  src={LogoAlamat}
                  alt="logo alamat"
                  className="w-[16px] h-[22px]"
                />
                <div className="flex flex-col gap-0 px-1 w-full">
                  <h1 className="font-semibold text-t-black text-lg">
                    Alamat Penjemputan
                  </h1>
                  <div className="flex gap-3 font-normal text-t-black text-base">
                    <h2>{userData.fullName}</h2>
                    <h2>{userData.noHP}</h2>
                  </div>
                  <p className="font-normal text-t-black text-bas">
                    {userData.alamat == null
                      ? "Alamat tidak ada "
                      : userData.alamat}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5">
              <div className="bg-t-black h-[3px] w-full rounded"></div>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <main className="px-5 flex flex-col gap-2 h-full pb-5">
          <div id="List-Sampah" className="flex flex-col gap-0">
            <h1 className="font-bold text-lg text-t-black">
              Total Barang : {listSampah.length} Barang
            </h1>
            {listSampah.map((sampah) => (
              <section key={sampah.id} className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <img src={LogoDaurUlang} className="w-[65px] h-[65px]" />
                    <div className="w-full flex flex-col gap-1">
                      <div className="px-2 py-1 bg-sadar-secondary-color rounded-lg flex justify-between items-center">
                        <h1 className="text-sadar-second-black font-bold text-[15px]">
                          {sampah.kategori}
                        </h1>
                        {/* <mark className="bg-sadar-primary-color rounded-full w-7 h-7 text-center flex justify-center items-center -rotate-90">
                          <img src={ArrowButton} className="h-3/5" />
                        </mark> */}
                      </div>
                      <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                        {sampah.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div id="List-Barang" className="flex flex-col gap-0">
            <h1 className="font-bold text-lg text-t-black">List Barang Bekas</h1>
            {listBarang.length == 0 ?
              // Kalo gak ada data
              <h1 className="font-bold text-base text-t-black">Tidak ada Barang Bekas</h1>
              :
              // Kalo ada data
              listBarang.map((barang, index) => (
                <section key={index} className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <div className="w-[90px] ">
                        <label htmlFor={`upload-${index}`}>
                          <img
                            src={barang.previewImage}
                            className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer"
                          />
                        </label>
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <div>
                          <h1 className="font-semibold text-base text-sadar-second-black">
                            Nama Barang
                          </h1>
                          <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                            {barang.namaBarang}
                          </p>
                        </div>
                        <div>
                          <h1 className="font-semibold text-base text-sadar-second-black">
                            Harga Jual
                          </h1>
                          <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                            Rp. {barang.hargaBarang}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-base text-sadar-second-black">
                        Deskripsi Barang
                      </h1>
                      <p className="w-full p-2 rounded-lg border border-sadar-secondary-color focus:outline-none focus:border-sadar-secondary-color font-semibold text-xs ">
                        {barang.deskripsi}
                      </p>
                    </div>
                  </div>
                </section>
              ))

            }
          </div>
          <button
            className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center"
            type="submit"
          >
            Lanjut
          </button>
        </main>
      </form>
    </div>
  );
}

export default PickUpCekPage;
