import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";
import "../../css/index.css";

import BackButton from "../../components/BackButton";
import BtnDefault from "../../components/BtnDefault";

import NomerHP from "../../components/auth/NomerHP";
import NamaLengkap from "../../components/auth/NamaLengkap";
import TanggalLahir from "../../components/auth/TanggalLahir";
import Role from "../../components/auth/Role";

function RegisterPageLanjut() {
  // useState Data
  const [Nama, setNama] = useState('');
  const [TanggalLahirValue, setTanggalLahirValue] = useState('');
  const [NomerHp, setNomerHp] = useState('');
  const [RoleValue, setRoleValue] = useState('customer');

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
  const handleNama = (value) => {
    setNama(value)
  }
  const handleTanggalLahirValue = (value) => {
    setTanggalLahirValue(value)
  }
  const handleNomerHp = (value) => {
    setNomerHp(value)
  }
  const handleRoleValue = (value) => {
    setRoleValue(value)
  }

  // Validasi kalo box input gak diisi
  const validasi = () => {
    let valid = true;
    if (Nama === '' || Nama === null) {
      valid = false;
      toast.warning("Isi Nama Lengkap")
    }
    if (TanggalLahirValue === '' || TanggalLahirValue == null) {
      valid = false;
      toast.warning("Isi Tanggal Lahir")
    }
    if (NomerHp === '' || NomerHp == null) {
      valid = false;
      toast.warning("Isi NomerHp")
    }
    if (RoleValue === '' || RoleValue == null) {
      valid = false;
      toast.warning("Isi Role")
    }
    return valid;
  }

  // const inputForm = {
  //   userName: data.userName,
  //   email: data.email,
  //   password: data.password,
  //   role: RoleValue,
  //   fullName: Nama,
  //   tanggalLahir: TanggalLahirValue,
  //   noHP: NomerHp
  // }

  // Proses registerasi
  const prosesRegisterAPI = async (e) => {
    e.preventDefault();
    if (validasi()) {
      await axios({
        method: "post",
        url: "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/register",
        headers: { 'content-type': 'application/json' },
        data: {
          userName: data.userName,
          email: data.email,
          password: data.password,
          role: RoleValue,
          fullName: Nama,
          tanggalLahir: TanggalLahirValue,
          noHP: NomerHp
        }
      }).then((res) => {
        // console.log(res.data)
        if (res.status == "Error") {
          toast.error(res.message);
        } else {
          toast.success('Berhasil Mendaftar');
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('jwttoken', res.token);
          navigate('/')
        }
      }).catch((err) => {
        toast.error(`Gagal Login Karena : ${err.message} `);
      });
    }
  }


  return (
    <main className="p-8 flex flex-col gap-5 md:w-1/2 md:m-auto">
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
          <NamaLengkap value={Nama} onChange={handleNama}></NamaLengkap>
          <TanggalLahir value={TanggalLahirValue} onChangeTanggalLahir={handleTanggalLahirValue}></TanggalLahir>
          <NomerHP value={NomerHp} onChange={handleNomerHp} ></NomerHP>
          <Role value={RoleValue} onChangeRole={handleRoleValue} />
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
