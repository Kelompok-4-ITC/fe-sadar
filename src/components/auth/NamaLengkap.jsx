import React from 'react'

function NamaLengkap({ value, onChange }) {
  return (
    <div className="-mt-4">
      <label
        htmlFor="nama-input"
        className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 rounded-sm "
      >
        Nama Lengkap
      </label>
      <input
        type="text"
        id="nama-input"
        className="py-3 px-4 w-full border-[#79747E] border rounded-[4px] text-base"
        placeholder="Masukkan Nama Anda"
        name="nama"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    </div>
  )
}

export default NamaLengkap