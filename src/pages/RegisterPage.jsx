import BackButton from "../components/BackButton";
import Password from "../components/Password";
import Username from "../components/Username";
import Email from "../components/Email";
import NomorHP from "../components/NomorHP";
import RegistChoice from "../components/RegistChoice";
import "../css/index.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

function RegisterPage() {
  // useState Data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noHp, setNoHp] = useState('');

  // untuk navigate
  const navigate = useNavigate();

  // Pertama kali di cek
  useEffect(() => {
    sessionStorage.clear();
  }, [])

  // Handling
  const handleUsername = (value) => {
    setUsername(value)
  }
  const handleEmail = (value) => {
    setEmail(value)
  }
  const handlePassword = (value) => {
    setPassword(value)
  }
  const handleNoHp = (value) => {
    setNoHp(value)
  }

  // Validasi kalo box input gak diisi
  const validasi = () => {
    let valid = true;
    if (username === '' || username === null) {
      valid = false;
      toast.warning("Isi username")
    }
    if (email === '' || email == null) {
      valid = false;
      toast.warning("Isi email")
    }
    if (password === '' || password == null) {
      valid = false;
      toast.warning("Isi password")
    }
    if (noHp === '' || noHp == null) {
      valid = false;
      toast.warning("Isi noHp")
    }
    return valid;
  }

  const inputForm = {
    userName: username,
    email: email,
    password: password,
    role: "Customer",
    fullName: "Testing",
    tanggalLahir: "2004-09-09",
    noHP: noHp
  }

  // Proses registerasi
  const prosesRegisterAPI = async (e) => {
    e.preventDefault();
    if (validasi()) {
      // console.log("proses")
      console.log(inputForm);
      await axios({
        method: "post",
        url: "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/register",
        headers: { 'content-type': 'application/json' },
        data: {
          userName: username,
          email: email,
          password: password,
          noHP: noHp,
          // Yang data bawah ini nanti ganti test
          role: "Customer",
          fullName: "Testing",
          tanggalLahir: "2004-09-09"
        }
      }).then((res) => {
        console.log(res.data)
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
    <div className="p-8 grid gap-y-4">
      <BackButton path={"/login"} />
      <h1 className="font-semibold text-4xl pointer-events-none">Register</h1>
      <div className="text-[#202020] pointer-events-none">
        Buat akun <span className="text-sadar text-[#3D9970]">Sadar</span> anda
      </div>

      <form onSubmit={prosesRegisterAPI}>
        <div className="pt-7 grid gap-y-4">

          <Username value={username} onChange={handleUsername} />
          <Email value={email} onChange={handleEmail} />
          <Password value={password} onChange={handlePassword} />
          <NomorHP value={noHp} onChange={handleNoHp} />

        </div>

        <RegistChoice />
      </form>
    </div>
  );
}

export default RegisterPage;
