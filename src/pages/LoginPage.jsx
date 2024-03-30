import Username from "../components/Username";
import Password from "../components/Password";
import LoginChoice from "../components/LoginChoice";
import "../css/index.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

function LoginPage() {
  // useState data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // untuk navigate
  const navigate = useNavigate();

  // Pertama kali code dilakukan
  useEffect(() => {
    sessionStorage.clear();
  }, [])


  // Buat ngambil Username, dari component lain
  const handleUsername = (value) => {
    setUsername(value)
  }

  // Buat ngambil Password, dari component lain
  const handlePassword = (value) => {
    setPassword(value)
  }

  // Proses Login Pake API
  const prosesLoginAPI = async (e) => {
    e.preventDefault();
    if (validasi()) {
      ///implentation
      // console.log('proceed');
      await axios({
        method: "post",
        url: "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/login",
        headers: { 'content-type': 'application/json' },
        data: {
          loginUser: username,
          password: password
        }
      }).then((res) => {
        console.log(res.data)
        if (res.status == "Error") {
          toast.error(res.message);
        } else {
          toast.success('Berhasil Login');
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('jwttoken', res.token);
          navigate('/')
        }
      }).catch((err) => {
        toast.error('Gagal Login karena : ' + err.message);
      });
    }
  }

  // Validasi kalo box input gak diisi
  const validasi = () => {
    let valid = true;
    if (username === '' || username === null) {
      valid = false;
      toast.warning("Isi username")
    }
    if (password === '' || password == null) {
      valid = false;
      toast.warning("Isi password")
    }
    return valid;
  }

  return (
    <div className="p-7 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-4xl pointer-events-none">Login</h1>
        <div className="text-t-black pointer-events-none">
          Login untuk mengakses akun <span className="text-sadar-thrid-black font-medium text-base">Sadar</span> anda
        </div>
      </div>

      <div>
        <form onSubmit={prosesLoginAPI}>
          <div className="pt-7 grid gap-y-4">
            <Username value={username} onChange={handleUsername} />
            <Password value={password} onChange={handlePassword} />

            <LoginChoice />
          </div>
        </form >
      </div>
    </div >

  );
}

export default LoginPage;
