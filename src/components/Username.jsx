function Username() {
  return (
    <div className="-mt-4">
      <label
        for="input-label"
        class="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3"
      >
        Username
      </label>
      <input
        type="text"
        id="input-label"
        class="py-3 px-4 w-full border-[#79747E] border rounded-[4px] text-base"
        placeholder="Masukkan Username Anda"
      ></input>
    </div>
  );
}

export default Username;
