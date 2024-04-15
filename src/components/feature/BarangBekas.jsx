import { useState } from "react";
import UploadFoto from "../../img/Input Logo.png"

function BarangBekas({ addBarangBekas, removeDiv }) {
  const [innerDivs, setInnerDivs] = useState([]);
  const [previewSourceInner, setPreviewSourceInner] = useState(UploadFoto);

  const addInnerDiv = () => {
    setInnerDivs([...innerDivs, <BarangBekas key={innerDivs.length} addBarangBekas={addInnerDiv} removeDiv={removeInnerDiv} />]);
  };

  const removeInnerDiv = (index) => {
    const updatedInnerDivs = innerDivs.filter((_, i) => i !== index);
    setInnerDivs(updatedInnerDivs);
  }

  const handleRemoveSelf = () => {
    removeDiv();
  };

  const handleFileInputChangeSelf = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSourceInner(reader.result);
    };
  };


  return (
    // Add Barang Bekas Baru
    <div className="flex flex-col gap-3">

      {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
      <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
        <div className="flex flex-col gap-1" >
          <div className="flex gap-2">

            <div className="w-[90px] ">
              <label htmlFor="upload">
                {previewSourceInner && (<img src={previewSourceInner} className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer" />)}
              </label>
              <input type="file" id="upload" accept="image/*" className="hidden" onChange={handleFileInputChangeSelf} />
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

export default BarangBekas