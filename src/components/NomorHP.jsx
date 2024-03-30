function NomorHP({ value, onChange }) {
  return (
    <>
      <div className="-mt-4">
        <label
          htmlFor="input-nomerHP"
          className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 "
        >
          Nomor HP
        </label>
        <input
          type="text"
          id="input-nomerHP"
          className="py-3 px-4 w-full border border-[#79747E] rounded-[4px] text-base"
          placeholder="Masukkan Nomor HP Anda"
          value={value}
          onChange={e => onChange(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default NomorHP;
