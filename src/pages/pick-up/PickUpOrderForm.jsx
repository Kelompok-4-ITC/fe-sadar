import React, { useState } from "react";
import axios from "axios";
import LogoDaurUlang from "../../img/Logo Daur Ulang.png";
import ArrowButton from "../../assets/ArrowButton.svg";
import UploadFoto from "../../img/Input Logo.png"
import TitleComponent from "../../components/TitleComponent";
import { useNavigate } from "react-router-dom";

function PickupOrderForm() {
  const [listSampah, setListSampah] = useState([
    { kategori: "", deskripsi: "" },
  ]);
  const [listBarang, setListBarang] = useState([
    { namaBarang: "", deskripsi: "", hargaBarang: 0, previewImage: null },
  ]);
  const [open, setOpen] = useState(false);
  const [previewSource, setPreviewSource] = useState(UploadFoto);
  const [toggleStates, setToggleStates] = useState(
    Array(listSampah.length).fill(false)
  );

  const toggleOpen = (index) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  const handleAddSampah = () => {
    setListSampah([...listSampah, { kategori: "", deskripsi: "" }]);
  };

  const handleAddBarang = () => {
    setListBarang([
      ...listBarang,
      { namaBarang: "", deskripsi: "", hargaBarang: 0, previewImage: null },
    ]);
  };

  const handleRemoveSampah = (index) => {
    const newList = [...listSampah];
    newList.splice(index, 1);
    setListSampah(newList);
  };

  const handleRemoveBarang = (index) => {
    const newList = [...listBarang];
    newList.splice(index, 1);
    setListBarang(newList);
  };

  const handleSampahChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...listSampah];
    newList[index][name] = value;
    setListSampah(newList);
    
    // Tutup toggle ketika kategori dipilih
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = true;
    setToggleStates(newToggleStates);
  };

  const handleBarangChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...listBarang];
    newList[index][name] = value;
    setListBarang(newList);
  };

  const handleImageInputChange = (index, e) => {
    const file = e.target.files[0];
    previewImage(index, file);
  };

  const previewImage = (index, file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const newBarangList = [...listBarang];
      newBarangList[index].previewImage = reader.result;
      setListBarang(newBarangList);
    };
  };

  const dataSampah = {
    listSampah: listSampah,
    listBarang: listBarang,
  };
  console.log(dataSampah);

  const validasi = () => {
    let valid = true;
    if (listSampah == '') {
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

  return (
    <div className="flex flex-col gap-2 h-screen bg-sadar-second-white md:w-1/2 md:m-auto">
      <div>
        <TitleComponent path={"/"} title={"Pick Up"}></TitleComponent>
        <div className="px-5">
          <div className="bg-t-black h-[3px] w-full rounded"></div>
        </div>
      </div>
      <main className="px-5 flex flex-col gap-2 h-full">
        <div id="List-Sampah" className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-lg text-t-black">
              List Sampah Daur Ulang
            </h1>
            <h2 className="font-medium text-base text-t-black">
              Silahkan berikan detail Sampahmu!
            </h2>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {listSampah.map((sampah, index) => (
            <div key={index}>
              <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <img src={LogoDaurUlang} className="w-[65px] h-[65px]" />
                    <div className="w-full flex flex-col gap-1">
                      <div className=" px-2 py-1 bg-sadar-secondary-color rounded-lg flex justify-between items-center">
                        <h1 className="text-sadar-second-black font-bold text-[15px]">
                          {sampah.kategori
                            ? sampah.kategori
                            : "Pilih Kategori Sampah"}
                        </h1>
                        <button
                          className={`bg-sadar-primary-color rounded-full hover:bg-sadar-fourth-black w-7 h-7 text-center flex justify-center items-center ${
                            toggleStates[index] ? "rotate-90" : "-rotate-90"
                          }`}
                          onClick={() => toggleOpen(index)}
                        >
                          <img src={ArrowButton} className="h-3/5" />
                        </button>
                      </div>

                      <div
                        className={`p-2 flex flex-col gap-1 rounded-lg bg-sadar-secondary-color ${
                          toggleStates[index] ? "hidden" : "block"
                        }`}
                      >
                        <h1 className="font-semibold text-xs text-sadar-second-black">
                          Kategori Sampah
                        </h1>
                        <div className="flex flex-wrap gap-1">
                          {[
                            "Plastik",
                            "Kaca",
                            "Kertas",
                            "Kardus",
                            "Logam",
                            "Lain-lain",
                          ].map((kategori) => (
                            <div
                              key={kategori}
                              className="rounded-lg text-[10px] text-sadar-second-black border border-sadar-second-black py-1 px-2 hover:bg-sadar-primary-color font-medium"
                              onClick={() =>
                                handleSampahChange(index, {
                                  target: { name: "kategori", value: kategori },
                                })
                              }
                            >
                              {kategori}
                            </div>
                          ))}
                        </div>
                      </div>

                      <textarea
                        type="text"
                        name="deskripsi"
                        value={sampah.deskripsi}
                        onChange={(e) => handleSampahChange(index, e)}
                        className="w-full px-2 py-1 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                        placeholder="Catatan Detail Sampah mu ..."
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center flex-none px-3 py-2 w-full md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600"
                  onClick={() => handleRemoveSampah(index)}
                >
                  Hapus
                </button>
              </section>
            </div>
          ))}

          <button
            type="button"
            className="flex w-full items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
            onClick={handleAddSampah}
          >
            Tambah Sampah
          </button>

          <div id="List-Barang" className="flex flex-col gap-0">
            <div>
              <h1 className="font-bold text-lg text-t-black">
                List Barang Bekas
              </h1>
              <h2 className="font-medium text-base text-t-black">
                Silahkan berikan detail Barang Bekasmu!
              </h2>
            </div>

            {listBarang.map((barang, index) => (
              <div key={index}>
                <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <div className="w-[90px] ">
                        <label htmlFor={`uploadImage-${index}`}>
                          {barang.previewImage ? (
                            <img
                              src={barang.previewImage}
                              className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer"
                            />
                          ) : (
                            <div className="w-full border border-sadar-secondary-color rounded-lg cursor-pointer flex justify-center items-center">
                              <img src={previewSource}/>
                            </div>
                          )}
                        </label>
                        <input
                          type="file"
                          id={`uploadImage-${index}`}
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageInputChange(index, e)}
                        />
                      </div>

                      <div className="flex flex-col gap-1 w-full">
                        <div>
                          <h1 className="font-semibold text-base text-sadar-second-black">
                            Nama Barang
                          </h1>
                          <input
                            type="text"
                            className="w-full px-2 py-2 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                            placeholder="Masukan Nama Barang"
                            value={barang.namaBarang}
                            onChange={(e) => handleBarangChange(index, e)}
                            name="namaBarang"
                          />
                        </div>
                        <div>
                          <h1 className="font-semibold text-base text-sadar-second-black">
                            Harga Jual
                          </h1>
                          <input
                            type="number"
                            className="w-full px-2 py-2 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                            placeholder="Masukan Harga Jual"
                            value={barang.hargaBarang}
                            onChange={(e) => handleBarangChange(index, e)}
                            name="hargaBarang"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h1 className="font-semibold text-base text-sadar-second-black">
                        Deskripsi Barang
                      </h1>
                      <textarea
                        type="text"
                        className="w-full px-2 py-1 rounded-lg border border-sadar-secondary-color focus:outline-none  focus:border-sadar-secondary-color font-semibold text-xs "
                        placeholder="Masukan Deskripsi Barang"
                        value={barang.deskripsi}
                        onChange={(e) => handleBarangChange(index, e)}
                        name="deskripsi"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center flex-none px-3 py-2 w-full md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600"
                    onClick={() => handleRemoveBarang(index)}
                  >
                    Hapus
                  </button>
                </section>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-sadar-primary-color text-t-white text-sm hover:bg-sadar-fourth-black"
            onClick={handleAddBarang}
          >
            Tambah Barang
          </button>

          <button className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center"
          onClick={(e) => keHalamanCek(e)} type="submit">Lanjut</button>
        </form>
      </main>
    </div>
  );
}

export default PickupOrderForm;
