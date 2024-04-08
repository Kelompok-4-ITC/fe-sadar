import { Link } from "react-router-dom"
import TitleComponent from "../../components/TitleComponent"
import LogoDaurUlang from "../../img/Logo Daur Ulang.png"
import UploadFoto from "../../img/Input Logo.png"
import ArrowButton from "../../assets/ArrowButton.svg";
import { useState } from "react";

function PickUpPage() {
  // untuk main PickUp
  const [open, setOpen] = useState(true);
  const [sampah, setSampah] = useState("");

  const toggleOpen = () => {
    setOpen(!open);
  };

  const sampahHandle = (value) => {
    setOpen(!open)
    setSampah(value)
  }

  // ini buat ngurus boxSampah biar bisa di klik dan tambah
  const [boxSampah, setBoxSampah] = useState([]);
  const addJenisSampah = () => {
    setBoxSampah([...boxSampah, <JenisSampah key={boxSampah.length} addJenisSampah={addJenisSampah} removeDiv={removeInnerDiv} />]);
  };

  const removeInnerDiv = (index) => {
    const updatedBoxSampah = [...boxSampah];
    updatedBoxSampah.splice(index, 1);
    setBoxSampah(updatedBoxSampah);
  };

  // ini buat ngurus boxBarangBekas biar bisa di klik dan tambah
  const [boxBarangBekas, setBoxBarangBekas] = useState([]);
  const addBarangBekas = () => {
    setBoxBarangBekas([...boxBarangBekas, <BarangBekas key={boxBarangBekas.length} addBarangBekas={addBarangBekas} removeDiv={removeInnerBarangBekas} />]);
  };

  const removeInnerBarangBekas = (index) => {
    const updatedBoxBarangBekas = [...boxBarangBekas];
    updatedBoxBarangBekas.splice(index, 1);
    setBoxBarangBekas(updatedBoxBarangBekas);
  };

  function test() {
    console.log("test")
  }

  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white">
      <div>
        <TitleComponent path={"/pick-up"} title={"Pick Up"}></TitleComponent>
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
            <div key={index}>
              {div}
            </div>
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
                  <label htmlFor="upload"><img src={UploadFoto} className="w-full cursor-pointer" /></label>
                  <input type="file" id="upload" accept="image/*" className="hidden" />
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
            <div key={index}>
              {div}
            </div>
          ))}
        </div>

        {/* Button Lanjut */}
        <Link to={"/sadar/cek"} className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center">Lanjut</Link>
      </main >
    </div >
  )
}

function JenisSampah({ addJenisSampah, removeDiv }) {
  const [open, setOpen] = useState(true);
  const [sampah, setSampah] = useState("");

  const toggleOpen = () => {
    setOpen(!open);
  };

  const sampahHandle = (value) => {
    setOpen(!open);
    setSampah(value);
  }

  const [innerDivs, setInnerDivs] = useState([]);

  const addInnerDiv = () => {
    setInnerDivs([...innerDivs, <JenisSampah key={innerDivs.length} addJenisSampah={addInnerDiv} removeDiv={removeInnerDiv} />]);
  };

  const removeInnerDiv = (index) => {
    const updatedInnerDivs = innerDivs.filter((_, i) => i !== index);
    setInnerDivs(updatedInnerDivs);
  };

  const handleRemoveSelf = () => {
    removeDiv();
  };

  return (
    <div id="List-Sampah" className="flex flex-col gap-3">

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
                <h1 className="font-semibold text-xs text-sadar-second-black">Kategori Sampah</h1>
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
                className="w-full px-2 py-1 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                placeholder="Catatan Detail Sampah mu ..." />
            </div>
          </div>
          <button
            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
            onClick={addInnerDiv}>Tambah Lagi
          </button>
          <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600" onClick={handleRemoveSelf}>Hapus</button>
        </div>
      </section>

      {/* INI buat nambahin */}
      {
        innerDivs.map((div, index) => (
          <div key={index}>{div}</div>
        ))
      }

    </div>
  );
}

function BarangBekas({ addBarangBekas, removeDiv }) {
  const [innerDivs, setInnerDivs] = useState([]);

  const addInnerDiv = () => {
    setInnerDivs([...innerDivs, <BarangBekas key={innerDivs.length} addBarangBekas={addInnerDiv} removeDiv={removeInnerDiv} />]);
  };

  const removeInnerDiv = (index) => {
    const updatedInnerDivs = innerDivs.filter((_, i) => i !== index);
    setInnerDivs(updatedInnerDivs);
  };

  const handleRemoveSelf = () => {
    removeDiv();
  };

  return (
    <div id="List-Sampah" className="flex flex-col gap-3">

      {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
      <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
        <div className="flex flex-col gap-1" >
          <div className="flex gap-2">
            <div className="w-[90px]">
              <label htmlFor="upload"><img src={UploadFoto} className="w-full" /></label>
              <input type="file" id="upload" accept="image/*" className="hidden" />
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
            onClick={addInnerDiv}>Tambah Lagi
          </button>
          <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600" onClick={handleRemoveSelf}>Hapus</button>
        </div>
      </section>
      {/* INI buat nambahin */}
      {
        innerDivs.map((div, index) => (
          <div key={index}>{div}</div>
        ))
      }

    </div>
  );
}

export default PickUpPage