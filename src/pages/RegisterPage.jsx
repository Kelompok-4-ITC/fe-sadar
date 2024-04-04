import Password from "../components/auth/Password";
import Username from "../components/auth/Username";
import Email from "../components/auth/Email";

import BackButton from "../components/BackButton";
import BtnDefault from "../components/BtnDefault";
import "../css/index.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

function RegisterPage() {
  // useState Data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    return valid;
  }

  // Proses registerasi
  const prosesRegisterAPI = async (e) => {
    e.preventDefault();
    if (validasi()) {
      // console.log("proses")
      // console.log(inputForm);

      // Note : ngambil datanya, lalu umpan datanya ke halaman berikutnya, baru registernya disitu
      navigate('/register-data', {
        state: {
          userName: username,
          email,
          password
        }
      });

    }
  }
  
  return (
    <main className="p-8 flex flex-col gap-5">
      <header className="flex flex-col gap-3">
        <BackButton path={"/login"} />
        <h1 className="font-semibold text-4xl pointer-events-none">Register</h1>
        <div className="text-t-black pointer-events-none text-lg font-medium">
          Buat akun <span className="text-sadar-thrid-black">
            Sadar</span> anda
        </div>
      </header>

      <form onSubmit={prosesRegisterAPI} className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <Username value={username} onChange={handleUsername} />
          <Email value={email} onChange={handleEmail} />
          <Password value={password} onChange={handlePassword} />
        </div>

        <div className="flex flex-col gap-7">
          <BtnDefault
            text={"Lanjut"}
            style={"flex items-center justify-center px-4 py-[15px] rounded-lg font-semibold bg-sadar-primary-color text-t-white text-lg hover:bg-sadar-fourth-black"}
          />
          <div className="flex justify-center font-medium text-sm -mt-4">
            Sudah punya akun?
            <Link to="/login" className="font-semibold text-[#EB5757] px-1 cursor-pointer">
              Log in
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <span className="w-16 border border-sadar-primary-color"></span>
          <span className="px-4 w-fit text-sadar-primary-color text-sm">
            Atau Login dengan
          </span>
          <span className="w-16 border border-sadar-primary-color"></span>
        </div>

        <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-md font-medium border-sadar-primary-color relative hover:bg-[#e5e5e5]">
          <span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#EA4335 "
                d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
              />
              <path
                fill="#34A853"
                d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
              />
              <path
                fill="#4A90E2"
                d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
              />
              <path
                fill="#FBBC05"
                d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
              />
            </svg>
          </span>
        </button>

      </form>
    </main >
  );
}

export default RegisterPage;
