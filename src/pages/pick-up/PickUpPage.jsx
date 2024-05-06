import { Link, useNavigate } from "react-router-dom"
import LogoDaurUlang from "../../img/Logo Daur Ulang.png"
import UploadFoto from "../../img/Input Logo.png"
import ArrowButton from "../../assets/ArrowButton.svg";
import { useState } from "react";
import { toast } from 'react-toastify'

import TitleComponent from "../../components/TitleComponent"
import JenisSampah from "./JenisSampah";
import BarangBekas from "./BarangBekas";
// MASIH ADA ERROR INI SEBENARNYA --- SAYA MENYERAH BINGUNG MAIN STATENYA

function PickUpPage() {
  // untuk main PickUp
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };

  // Data Sampah
  const [sampah, setSampah] = useState("");
  const [deskripsiSampah, setDeskripsiSampah] = useState("");

  const sampahHandle = (value) => {
    setOpen(!open)
    setSampah(value)
  }

  // Preview Gambar upload
  const [previewSource, setPreviewSource] = useState(UploadFoto);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };


  // ~~~~~~ SAMPAH BEKAS ~~~~~~~
  // ini buat ngurus boxSampah biar bisa di klik dan tambah  // State untuk kategori sampah
  const [boxSampah, setBoxSampah] = useState([]);

  // Fungsi untuk menambah kategori sampah
  const addJenisSampah = () => {
    setBoxSampah([...boxSampah, <JenisSampah key={boxSampah.length} />]);
  };

  // Fungsi untuk menggandakan kategori sampah
  const handleDuplicateSampah = (index) => {
    const newBoxSampah = [...boxSampah];
    newBoxSampah.splice(index + 1, 0, <JenisSampah key={boxSampah.length} />);
    setBoxSampah(newBoxSampah);
  };

  // Fungsi untuk menghapus kategori sampah
  const handleRemoveSampah = (index) => {
    const newBoxSampah = boxSampah.filter((_, i) => i !== index);
    setBoxSampah(newBoxSampah);
  };

  // ~~~~~~ BARANG BEKAS ~~~~~~~
  // ini buat ngurus boxBarangBekas biar bisa di klik dan tambah
  const [boxBarangBekas, setBoxBarangBekas] = useState([]);
  const addBarangBekas = () => {
    setBoxBarangBekas([...boxBarangBekas, <BarangBekas key={boxBarangBekas.length} />]);
  };

  const handleDuplicateBarang = (index) => {
    const newTodos = [...boxBarangBekas];
    newTodos.splice(index + 1, 0, boxBarangBekas[index]); // Duplicate the todo at index+1 position
    console.log(boxBarangBekas)
    setBoxBarangBekas(newTodos);
  }

  const handleRemoveBarang = (index) => {
    console.log(index)
    const updatedBoxBarangBekas = boxBarangBekas.filter((box, i) => i !== index);
    console.log(boxBarangBekas)
    console.log(boxBarangBekas)
    setBoxBarangBekas(updatedBoxBarangBekas);
  };


  // Data sampahnya --> Ngambil datanya dari sini
  const dataSampah = {
    listSampah: [
      {
        id: 1,
        kategori: sampah,
        deksripsi: deskripsiSampah
      },
    ],
    listBarang: [{
      namaBarang: "string",
      deskripsi: "string",
      hargaBarang: 0
    }]
  }

  // console.log(dataSampah)


  const validasi = () => {
    let valid = true;
    if (sampah == '' && deskripsiSampah == '') {
      valid = false;
      toast.warning("Input data sampahnya dulu");
    }
    return valid;
  }

  const navigate = useNavigate();
  const keHalamanCek = (e) => {
    e.preventDefault();
    if (validasi()) {
      navigate('/pick-up/cek', {
        state: dataSampah
      })
    }
  }

  // const [dataSampah, setDataSampah] = useState({
  //   listSampah: [],
  //   listBarang: []
  // });


  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white">
      <div>
        <TitleComponent path={"/"} title={"Pick Up"}></TitleComponent>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>
      <main className="px-5 flex flex-col gap-2 h-full">
        {/* Kategori Sampah - List */}
        <div id="List-Sampah" className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-lg text-t-black">List Sampah Daur Ulang</h1>
            <h2 className="font-medium text-base text-t-black" >Silahkan berikan detail Sampahmu!</h2>
          </div>
          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
          <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
            <div className="flex flex-col gap-1" >
              <div className="flex gap-2">
                <img src={LogoDaurUlang} className="w-[65px] h-[65px]" />
                <div className="w-full flex flex-col gap-1">

                  <div className=" px-2 py-1 bg-sadar-secondary-color rounded-lg flex justify-between items-center">
                    <h1 className="text-sadar-second-black font-bold text-[15px]">{!sampah ? "Pilih Kategori Sampah" : sampah}</h1>
                    <button className={`bg-sadar-primary-color rounded-full hover:bg-sadar-fourth-black w-7 h-7 text-center flex justify-center items-center ${open ? 'rotate-90' : '-rotate-90'}`} onClick={toggleOpen}>
                      <img src={ArrowButton} className="h-3/5" />
                    </button>
                  </div>

                  <div className={`p-2 flex flex-col gap-1 rounded-lg bg-sadar-secondary-color  ${open ? 'hidden' : 'block'}`}>
                    <h1 className="font-semibold  text-xs text-sadar-second-black">Kategori Sampah</h1>
                    <div className="flex flex-wrap gap-1">
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Plastik")}>Plastik</div>
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Kaca")}>Kaca</div>
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Plastik")}>Plastik</div>
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Kaleng")}>Kaleng</div>
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Kardus")}>Kardus</div>
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Barang Elektronik")}>Barang Elektronik</div>
                      <div className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium" onClick={() => sampahHandle("Lain-lain")}>Lain-lain</div>
                    </div>
                  </div>

                  <textarea
                    type="text"
                    value={deskripsiSampah}
                    onChange={(e) => setDeskripsiSampah(e.target.value)}
                    className="w-full px-2 py-1 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                    placeholder="Catatan Detail Sampah mu ..." />
                </div>
              </div>
              <button
                className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
                onClick={addJenisSampah}>Tambah Lagi
              </button>
            </div>
          </section>

          {/* INI buat nambahin */}
          {boxSampah.map((div, index) => (
            <article key={index} id={index} className="p-2 bg-t-white rounded-lg drop-shadow-lg " >
              <div className="flex flex-col gap-1" >
                {div}
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
                  onClick={() => handleDuplicateSampah(index)}
                >Tambah Lagi - {index}
                </button>
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600"
                  onClick={() => handleRemoveSampah(index)}
                >Hapus - {index}
                </button>
              </div>
            </article>
          ))}

        </div>

        {/* List Barang Bekas  */}
        <div id="List-Barang" className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-lg text-t-black">List Barang Bekas</h1>
            <h2 className="font-medium text-base text-t-black" >Silahkan berikan detail Barang Bekasmu!</h2>
          </div>

          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
          <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
            <div className="flex flex-col gap-1" >
              <div className="flex gap-2">
                <div className="w-[90px] ">
                  <label htmlFor="upload">
                    {previewSource && (<img src={previewSource} className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer" />)}
                  </label>
                  <input type="file" id="upload" accept="image/*" className="hidden" onChange={handleFileInputChange} />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div>
                    <h1 className="font-semibold text-base text-sadar-second-black">Nama Barang</h1>
                    <input
                      type="text"
                      className="w-full px-2 py-2 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                      placeholder="Masukan Nama Barang" />
                  </div>
                  <div>
                    <h1 className="font-semibold text-base text-sadar-second-black">Harga Jual</h1>
                    <input
                      type="text"
                      className="w-full px-2 py-2 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                      placeholder="Masukan Harga Jual" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold text-base text-sadar-second-black">Deskripsi Barang</h1>
                <textarea
                  type="text"
                  className="w-full px-2 py-1 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                  placeholder="Masukan Deskripsi Barang" />
              </div>

              <button
                className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
                onClick={addBarangBekas}>Tambah Lagi
              </button>
            </div>
          </section>
          {/* INI buat nambahin */}
          {boxBarangBekas.map((div, index) => (
            <article key={index} id={index} className="p-2 bg-t-white rounded-lg drop-shadow-lg " >
              <div className="flex flex-col gap-1" >
                {div}
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
                  onClick={() => handleDuplicateBarang(index)}
                >Tambah Lagi - {index}
                </button>
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600"
                  onClick={() => handleRemoveBarang(index)}
                >Hapus - {index}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Button Lanjut */}
        <button
          className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center"
          onClick={(e) => keHalamanCek(e)}
        >Lanjut
        </button>
      </main >
    </div >
  )
}

export default PickUpPage