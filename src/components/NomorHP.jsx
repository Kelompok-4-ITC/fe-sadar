function NomorHP() {
  return (
    <>
      <div className="-mt-4">
        <label
          for="input-label"
          class="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3  dark:text-white"
        >
          Nomor HP
        </label>
        <input
          type="email"
          id="input-label"
          class="py-3 px-4 w-full border border-[#79747E] rounded-[4px] text-base"
          placeholder="Masukkan Nomor HP Anda"
        ></input>
      </div>
    </>
  );
}

export default NomorHP;
