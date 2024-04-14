import { Link } from "react-router-dom"
import TitleComponent from "../../components/TitleComponent"
import UploadFoto from "../../img/Input Logo.png"
import { useState } from "react";

function PickUpPage() {
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

  // ini buat ngurus boxBarangBekas biar bisa di klik dan tambah
  const [boxBarangBekas, setBoxBarangBekas] = useState([]);
  const addBarangBekas = () => {
    setBoxBarangBekas([...boxBarangBekas, <BarangBekas key={boxBarangBekas.length} addBarangBekas={addBarangBekas} removeDiv={removeInnerBarangBekas} handleDelete={handleDelete} />]);
  };


  const handleDuplicate = (index) => {
    const newTodos = [...boxBarangBekas];
    newTodos.splice(index + 1, 0, boxBarangBekas[index]);

    setBoxBarangBekas(newTodos);
  }

  const handleRemove = (index) => {
    const updatedBoxBarangBekas = boxBarangBekas.filter((box, i) => i !== index);
    setBoxBarangBekas(updatedBoxBarangBekas);
  };

  const removeInnerBarangBekas = (index) => {
    const updatedBoxBarangBekas = [...boxBarangBekas];
    updatedBoxBarangBekas.splice(index, 1);
    setBoxBarangBekas(updatedBoxBarangBekas);
  };

  const handleDelete = (e) => {
    console.log("even bubbling terjasi")
    e.stopPropagation()
    removeInnerBarangBekas()
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
        {/* List Barang Bekas  */}
        <div id="List-Barang" className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-lg text-t-black">List Barang Bekas</h1>
            <h2 className="font-medium text-base text-t-black" >Silahkan berikan detail Barang Bekasmu!</h2>
          </div>
          {/* NOTE : Nanti dibikin perulangan jika buttun diklik tambah lagi */}
          <section className="p-2 bg-t-white rounded-lg drop-shadow-lg ">
            <div className="flex flex-col gap-1" >
              <div className="flex flex-col gap-2">
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
                  onClick={() => handleDuplicate(index)}
                >Tambah Lagi - {index}
                </button>
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[8px] font-semibold bg-red-500 text-white text-sm hover:bg-red-600"
                  onClick={() => handleRemove(index)}
                >Hapus - {index}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Button Lanjut */}
        <Link to={"/sadar/cek"} className="px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center">Lanjut</Link>
      </main >
    </div >
  )
}

function BarangBekas({ id }) {
  // const [innerDivs, setInnerDivs] = useState([]);
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
    <div id={id} className="flex gap-2">
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

export default PickUpPage