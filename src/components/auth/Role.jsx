import { useState } from "react";

function Role({ value, onChangeRole }) {
  const [dipilih, setDipilih] = useState(value);

  const pick = (e, role) => {
    e.preventDefault();
    setDipilih(role);
    onChangeRole(role);
  };

  return (
    <div className="-mt-4">
      <label
        htmlFor="date-input"
        className="block w-max text-sm ml-3 px-1 rounded-lg bg-white text-t-black relative top-3 z-50"
      >
        Mendaftar Sebagai
      </label>
      <div className='flex w-full h-auto items-center gap-0'>
        <button
          className={`flex justify-center items-center px-4 py-4 border border-t-grey ${dipilih === 'customer' ? 'bg-t-grey text-t-white' : 'border-t-grey text-[#79747E]'} rounded-s-lg h-full w-full`}
          style={{ marginRight: '-1px' }} // Mengatur margin kanan untuk menghapus spasi
          onClick={(e) => pick(e, 'customer')}
        >
          Customer
        </button>
        <button
          className={`flex justify-center items-center px-4 py-4 border border-t-grey ${dipilih === 'driver' ? 'bg-t-grey text-t-white' : 'border-t-grey text-[#79747E]'} rounded-e-lg h-full w-full`}
          onClick={(e) => pick(e, 'driver')}
        >
          Driver
        </button>
      </div>
    </div>
  );
}

export default Role;
