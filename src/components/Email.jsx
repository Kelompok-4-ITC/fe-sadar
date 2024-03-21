function Email() {
  return (
    <>
      <div className="-mt-4">
        <label
          for="input-label"
          class="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 "
        >
          Email
        </label>
        <input
          type="email"
          id="input-label"
          class="py-3 px-4 w-full border border-[#79747E] rounded-[4px] text-base"
          placeholder="Masukkan Email Anda"
        ></input>
      </div>
    </>
  );
}

export default Email;
