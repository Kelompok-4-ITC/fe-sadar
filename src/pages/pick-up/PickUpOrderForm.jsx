import React, { useState } from "react";
import axios from "axios";

function PickupOrderForm() {
  const [listSampah, setListSampah] = useState([
    { kategori: "", deskripsi: "" },
  ]);
  const [listBarang, setListBarang] = useState([
    { namaBarang: "", deskripsi: "", hargaBarang: 0 },
  ]);

  const handleAddSampah = () => {
    setListSampah([...listSampah, { kategori: "", deskripsi: "" }]);
  };

  const handleAddBarang = () => {
    setListBarang([
      ...listBarang,
      { namaBarang: "", deskripsi: "", hargaBarang: 0 },
    ]);
  };

  const handleSampahChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...listSampah];
    newList[index][name] = value;
    setListSampah(newList);
  };

  const handleBarangChange = (index, event) => {
    const { name, value } = event.target;
    const newList = [...listBarang];
    newList[index][name] = value;
    setListBarang(newList);
  };

  
  const data = {
    listSampah: listSampah,
    listBarang: listBarang,
  };
  console.log(data);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = sessionStorage.getItem("jwttoken");
      const response = await axios.post(
        "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/pickup/make-order",
        { listSampah, listBarang },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Order berhasil dibuat:", response.data);
    } catch (error) {
      console.error("Terjadi kesalahan saat membuat order:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Formulir Order Pick Up</h2>
      <form onSubmit={handleSubmit}>
        <h3>Sampah</h3>
        {listSampah.map((sampah, index) => (
          <div key={index}>
            <select
              name="kategori"
              value={sampah.kategori}
              onChange={(e) => handleSampahChange(index, e)}
            >
              <option value="">Pilih Kategori Sampah</option>
              <option value="Plastik">Plastik</option>
              <option value="Kaca">Kaca</option>
              <option value="Kertas">Kertas</option>
              <option value="Logam">Logam</option>
              <option value="Kardus">Kardus</option>
              <option value="Lain-lain">Lain-lain</option>
            </select>
            <input
              type="text"
              name="deskripsi"
              value={sampah.deskripsi}
              onChange={(e) => handleSampahChange(index, e)}
              placeholder="Deskripsi Sampah"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSampah}>
          Tambah Sampah
        </button>

        <h3>Barang</h3>
        {listBarang.map((barang, index) => (
          <div key={index}>
            <input
              type="text"
              name="namaBarang"
              value={barang.namaBarang}
              onChange={(e) => handleBarangChange(index, e)}
              placeholder="Nama Barang"
            />
            <input
              type="text"
              name="deskripsi"
              value={barang.deskripsi}
              onChange={(e) => handleBarangChange(index, e)}
              placeholder="Deskripsi Barang"
            />
            <input
              type="number"
              name="hargaBarang"
              value={barang.hargaBarang}
              onChange={(e) => handleBarangChange(index, e)}
              placeholder="Harga Barang"
            />
          </div>
        ))}
        <button type="button" onClick={handleAddBarang}>
          Tambah Barang
        </button>

        <button type="submit">Buat Order</button>
      </form>
    </div>
  );
}

export default PickupOrderForm;
