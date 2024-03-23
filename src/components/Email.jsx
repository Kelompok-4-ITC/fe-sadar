function Email({ value, onChange }) {
  return (
    <>
      <div className="-mt-4">
        <label
          htmlFor="email-input"
          className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 "
        >
          Email
        </label>
        <input
          type="email"
          id="email-input"
          className="py-3 px-4 w-full border border-[#79747E] rounded-[4px] text-base"
          placeholder="Masukkan Email Anda"
          value={value}
          onChange={e => onChange(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default Email;
