function Username({ value, onChange }) {
  return (
    <div className="mt-4">
      <label
        htmlFor="username-input"
        className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 "
      >
        Username
      </label>
      <input
        type="text"
        id="username-input"
        className="py-3 px-4 w-full border-[#79747E] border rounded-[4px] text-base"
        placeholder="Masukkan Username Anda"
        name="username"
        value={value}
        onChange={e => onChange(e.target.value)}
      ></input>
    </div>
  );
}

export default Username;
