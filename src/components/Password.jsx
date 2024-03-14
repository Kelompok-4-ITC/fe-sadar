import React, { useState } from "react";
import ShowPassword from "../assets/ShowPassword.svg";
import CoverPassword from "../assets/CoverPassword.svg";


function Password() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="-mt-4">
      <label
        htmlFor="password-input"
        className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 z-50"
      >
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password-input"
          className="py-3 px-4 w-full border border-[#79747E] rounded-[4px] text-base"
          placeholder="Masukkan Password Anda"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 focus:outline-none"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <img src={ShowPassword} className="h-full" alt="Kembali"/>
          ) : (
            <img src={CoverPassword} className="h-full" alt="Kembali"/>
          )}
        </button>
      </div>
    </div>
  );
}

export default Password;
