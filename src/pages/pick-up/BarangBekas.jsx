import React, { useState } from "react";
import UploadFoto from "../../img/Input Logo.png"

function BarangBekas({ id }) {
  const [innerDivs, setInnerDivs] = useState([])
  const [previewSourceInner, setPreviewSourceInner] = useState(UploadFoto);

  // ini untuk tampilin foto jika diinput
  const handleFileInputChangeSelf = (e) => {
    const file = e.target.files[0];
    previewFileSelf(file);
  };

  const previewFileSelf = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSourceInner(reader.result);
    };
  };


  return (
    <div id={id} className="flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="w-[90px] ">
          <label htmlFor={`upload_${innerDivs.length}`}>
            {previewSourceInner && (<img src={previewSourceInner} className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer" />)}
          </label>
          <input type="file" id={`upload_${innerDivs.length}`} accept="image/*" className="hidden" onChange={handleFileInputChangeSelf} />
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
    </div>
  );
}

export default BarangBekas