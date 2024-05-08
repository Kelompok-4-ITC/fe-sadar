import { Link, useNavigate } from "react-router-dom"
import TitleComponent from "../../components/TitleComponent"
import LogoAlamat from "../../img/icon-location.png"
import { useState } from "react"
import { toast } from 'react-toastify'

function DropOffLokasiPage() {
  // Data ambil dari DB nanti
  const data = [
    {
      id: 1,
      nama: "Pak Jhon",
      jalan: "Jln. Babarsari",
      jalanLengkap: "Jalan Babarsari, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
      link: "https://maps.app.goo.gl/PGTTr88Azjboi3dw8"
    }, {
      id: 2,
      nama: "Pak Stevan",
      jalan: "Jln. Antah Brantah",
      jalanLengkap: "Jalan Antah Beratah, Gak tau pokoknya ini contoh alamat",
      link: "https://maps.app.goo.gl/wPfk4grdmu4kvX127"
    }, {
      id: 3,
      nama: "Pak Kuro",
      jalan: "Jln. Soekarno Hatta",
      jalanLengkap: "Jalan Soekarno Hatta, Indonesia Raya",
      link: "https://maps.app.goo.gl/62wCRDNwdMktsYJA7"
    }
  ]

  const [ditekanIndex, setDitekanIndex] = useState(-1);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleDitekan = (index) => {
    setDitekanIndex(index === ditekanIndex ? -1 : index);
    setSelectedLocation(data[index]);
  };

  const validasi = () => {
    let valid = true;
    if (selectedLocation === null) {
      valid = false;
      toast.warning("Pilih Salah Satu Alamat")
    }
    return valid;
  }


  const navigate = useNavigate();
  function keCekPage(e) {
    e.preventDefault()
    if (validasi()) {
      // NOTE : Nanti ngirim ID Driver aja, biar nanti tinggal ngefetch lagi

      // Menuju halaman selanjutnya dengan bawa data
      navigate('/drop-off/cek', {
        state: {
          id: selectedLocation.id,
          nama: selectedLocation.nama,
          jalanLengkap: selectedLocation.jalanLengkap
        }
      });
    }
  }


  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white md:m-auto md:w-1/2">
      <div>
        <TitleComponent path={"/"} title={"Drop Off"}></TitleComponent>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>

      <main className="px-5 flex flex-col gap-2 h-full pb-2">
        {/* Judul */}
        <div className="flex flex-col gap-0">
          <h1 className="font-bold text-lg text-t-black">Pilih Alamat Tujuan</h1>
          <h2 className="font-medium text-base text-t-black" >Silahkan pilih alamat yang akan dituju!</h2>
        </div>

        {/* Alamat diperulang */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-2 flex gap-1 drop-shadow-lg rounded-md ${index === ditekanIndex ? "bg-sadar-fifth-white drop-shadow-none" : "bg-t-white "
              } border-b-2 border-b-sadar-primary-color`}
            onClick={() => handleDitekan(index)}
          >
            <img src={LogoAlamat} alt="logo alamat" className="w-[16px] h-[22px]" />
            <div className="flex flex-col gap-1 px-1 w-full">
              <h1 className="font-semibold text-t-black text-lg">
                {item.nama} - {item.jalan}
              </h1>
              <p className="font-normal text-t-black text-base leading-tight">
                {item.jalanLengkap}
              </p>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sadar-second-black text-[13px] w-auto"
                >
                  Link Google Maps
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Button Lanjut */}
        <button
          className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center"
          onClick={(e) => keCekPage(e)}
        >Lanjut
        </button>
      </main >
    </div >
  )
}

export default DropOffLokasiPage