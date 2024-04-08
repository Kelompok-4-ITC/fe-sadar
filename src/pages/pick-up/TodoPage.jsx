import React, { useState } from 'react';
import LogoDaurUlang from "../../img/Logo Daur Ulang.png"
import ArrowButton from "../../assets/ArrowButton.svg";

function YourComponent() {
  const [open, setOpen] = useState(false);
  const [sampah, setSampah] = useState("");

  const toggleOpen = () => {
    setOpen(!open);
  };

  const sampahHandle = (value) => {
    setOpen(!open)
    setSampah(value)
  }

  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    setDivs([...divs, <YourDiv key={divs.length} addDiv={addDiv} />]);
  };

  return (
    <div>

      <button onClick={addDiv}>Tambah Lagi</button>

      <div className="flex flex-col gap-1">
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
          onClick={addDiv}>Tambah Lagi
        </button>
      </div>

      {/* INI buat nambahin */}
      {divs.map((div, index) => (
        <div key={index}>
          {div}
        </div>
      ))}

    </div>
  );
}

function YourDiv({ addDiv }) {
  const [open, setOpen] = useState(false);
  const [sampah, setSampah] = useState("");

  const [innerDivs, setInnerDivs] = useState([]);

  const addInnerDiv = () => {
    setInnerDivs([...innerDivs, <YourDiv key={innerDivs.length} addDiv={addInnerDiv} />]);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const sampahHandle = (value) => {
    setOpen(!open)
    setSampah(value)
  }
  // Isi div Anda di sini
  return (
    <div className="flex flex-col gap-1">
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
      {/* INI buat nambahin */}
      {
        innerDivs.map((div, index) => (
          <div key={index}>{div}</div>
        ))
      }
    </div>
  );
}

export default YourComponent;