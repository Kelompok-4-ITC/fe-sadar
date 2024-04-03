
import BackButton from "../components/BackButton";
import BtnDefault from "../components/BtnDefault";
import "../css/index.css";
import NomerHP from "../components/auth/NomerHP";

import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

function RegisterPageLanjut() {
  // useState Data
  const [NomerHp, setNomerHp] = useState('');


  // untuk navigate
  const navigate = useNavigate();

  // mengambil data dari halaman sebelumnya
  const location = useLocation();
  const data = location.state;

  // Pertama kali di cek
  useEffect(() => {
    sessionStorage.clear();
  }, [])

  // Handling
  const handleNomerHp = (value) => {
    setNomerHp(value)
  }

  // Validasi kalo box input gak diisi
  const validasi = () => {
    let valid = true;
    if (NomerHp === '' || NomerHp === null) {
      valid = false;
      toast.warning("Isi NomerHp")
    }
    return valid;
  }

  const inputForm = {
    userName: data.userName,
    email: data.email,
    password: data.password,
    role: "Customer",
    fullName: "Testing",
    tanggalLahir: "2004-09-09",
    noHP: NomerHp
  }

  // Proses registerasi
  const prosesRegisterAPI = async (e) => {
    e.preventDefault();
    if (validasi()) {
      // console.log("proses")
      console.log(inputForm);

      // Note : Nanti cek dulu data sebelumnya, baru nanti taruh di data ddisitu

      // await axios({
      //   method: "post",
      //   url: "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/register",
      //   headers: { 'content-type': 'application/json' },
      //   data: {
      //     userName: username,
      //     email: email,
      //     password: password,
      //     noHP: noHp,
      //     // Yang data bawah ini nanti ganti test
      //     role: "Customer",
      //     fullName: "Testing",
      //     tanggalLahir: "2004-09-09"
      //   }
      // }).then((res) => {
      //   console.log(res.data)
      //   if (res.status == "Error") {
      //     toast.error(res.message);
      //   } else {
      //     toast.success('Berhasil Mendaftar');
      //     sessionStorage.setItem('username', username);
      //     sessionStorage.setItem('jwttoken', res.token);
      //     navigate('/')
      //   }
      // }).catch((err) => {
      //   toast.error(`Gagal Login Karena : ${err.message} `);
      // });
    }
  }


  return (
    <main className="p-8 flex flex-col gap-5">
      <header className="flex flex-col gap-3">
        <BackButton path={"/register"} />
        <h1 className="font-semibold text-4xl pointer-events-none">Register</h1>
        <div className="text-t-black pointer-events-none text-lg font-medium">
          Silahkan isi data diri anda
        </div>
      </header>

      <form onSubmit={prosesRegisterAPI} className="flex flex-col gap-7">
        {/* Bagian Form */}
        <div className="flex flex-col gap-4">
          <NomerHP value={NomerHp} onChange={handleNomerHp} ></NomerHP>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center font-medium">
            <input
              type="checkbox"
              className="form-checkbox h-4 text-2xl mr-2 transform scale-150 checked:accent-sadar-primary-color"
            />
            <span className="text-xs text-t-black leading-snug">
              Saya setuju dengan <span className="text-sadar-thrid-black cursor-pointer">Syarat</span> dan <span className="text-sadar-thrid-black cursor-pointer">Ketentuan</span>
            </span>
          </label>
        </div>

        <div className="flex flex-col gap-7">
          <BtnDefault
            text={"Daftar"}
            style={"flex items-center justify-center px-4 py-[15px] rounded-lg font-semibold bg-sadar-primary-color text-t-white text-lg hover:bg-sadar-fourth-black"}
          />
        </div>

      </form>
    </main >
  );
}

export default RegisterPageLanjut;
