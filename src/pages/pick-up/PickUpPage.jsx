import { Link } from "react-router-dom"
import TitleComponent from "../../components/TitleComponent"
import LogoDaurUlang from "../../img/Logo Daur Ulang.png"
import ArrowButton from "../../assets/ArrowButton.svg";
import { useState } from "react";

function PickUpPage() {
  // INI DATA LAMA YA
  const [open, setOpen] = useState(true);
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
    setDivs([...divs, <JenisSampah key={divs.length} addDiv={addDiv} />]);
  };

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
          </section>

          {/* INI buat nambahin */}
          {divs.map((div, index) => (
            <div key={index}>
              {div}
            </div>
          ))}

        </div>
        {/* List Barang Bekas  */}
        <div id="List-Barang">
          <div>
            <h1 className="font-bold text-lg text-t-black">List Barang Bekas</h1>
            <h2 className="font-medium text-base text-t-black" >Silahkan berikan detail Barang Bekasmu!</h2>
          </div>
          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}


        </div>

        {/* Button Lanjut */}
        <Link to={"/sadar/cek"} className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center">Lanjut</Link>
      </main >
    </div >
  )
}

function JenisSampah({ addDiv }) {
  const [open, setOpen] = useState(true);
  const [sampah, setSampah] = useState("");
  const toggleOpen = () => {
    setOpen(!open);
  };

  const sampahHandle = (value) => {
    setOpen(!open)
    setSampah(value)
  }

  // Ini untuk agar div dibawah bisa nambahin div baru juga
  const [innerDivs, setInnerDivs] = useState([]);
  const addInnerDiv = () => {
    setInnerDivs([...innerDivs, <JenisSampah key={innerDivs.length} addDiv={addInnerDiv} />]);
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