import React from 'react'

function TanggalLahir({ value, onChangeTanggalLahir }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChangeTanggalLahir(newValue);
  };

  return (
    <div className="-mt-4">
      <label
        htmlFor="date-input"
        className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 z-50"
      >
        Tanggal Lahir
      </label>
      <div className="relative">
        <input
          type="date"
          id="date-input"
          className="py-3 px-4 w-full border border-[#79747E] rounded-[4px] text-base"
          placeholder="Masukkan Tanggal Lahir Anda"
          name="tgl-lahir"
          value={value || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TanggalLahir