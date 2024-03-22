import ShowPassword from "../assets/ShowPassword.svg";
import CoverPassword from "../assets/CoverPassword.svg";
import "../css/index.css";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, [])

  // const ProsesLogin = async (e) => {
  //   e.preventDefault();
  //   if (validasi()) {
  //     // console.log('proses');

  //     let inputObj = {
  //       "username": username,
  //       "password": password
  //     }
  //     // console.log(inputObj)
  //     fetch("https://kelompok4-dot-personal-website-415207.et.r.appspot.com/login", {
  //       method: 'POST',
  //       headers: { 'content-type': 'application/json' },
  //       body: JSON.stringify(inputObj)
  //     }).then((res) => {
  //       return res.json();
  //     }).then((resp) => {
  //       console.log(resp)
  //       // if (Object.keys(resp).length === 0) {
  //       //   toast.error('Login failed, invalid credentials');
  //       // } else {
  //       //   toast.success('Success');
  //       //   sessionStorage.setItem('username', username);
  //       //   sessionStorage.setItem('jwttoken', resp.jwtToken);
  //       //   useNavigate('/')
  //       // }
  //       if (Object.keys(resp).length === 0) {
  //         toast.error('Please Enter valid username');
  //       } else {
  //         if (resp.password === password) {
  //           toast.success('Success');
  //           sessionStorage.setItem('username', username);
  //           useNavigate('/')
  //         } else {
  //           toast.error('Please Enter valid credentials');
  //         }
  //       }
  //     }).catch((err) => {
  //       toast.error('Login Failed due to :' + err.message);
  //     });
  //   }
  // }

  const ProceedLoginusingAPI = async (e) => {
    e.preventDefault();
    if (validasi()) {
      ///implentation
      // console.log('proceed');
      let inputobj = {
        "loginUser": username,
        "password": password
      };
      console.log(inputobj);
      await fetch("https://kelompok4-dot-personal-website-415207.et.r.appspot.com/login", {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(inputobj)
      }).then((res) => {
        return res.json();
      }).then((resp) => {
        console.log(resp)
        if (resp.status == "Error") {
          toast.error(resp.message);
        } else {
          toast.success('Success');
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('jwttoken', resp.token);
          navigate('/')
        }
        // if (Object.keys(resp).length === 0) {
        //     toast.error('Please Enter valid username');
        // } else {
        //     if (resp.password === password) {
        //         toast.success('Success');
        //         sessionStorage.setItem('username',username);
        //         usenavigate('/')
        //     }else{
        //         toast.error('Please Enter valid credentials');
        //     }
        // }
      }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
      });
    }
  }

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
    <div className="p-8 grid gap-y-4">
      <h1 className="font-semibold text-4xl pointer-events-none">Login</h1>
      <div className="text-[#202020] pointer-events-none">
        Login untuk mengakses akun <span className="text-sadar text-[#3D9970]">Sadar</span> anda
      </div>

      <form onSubmit={ProceedLoginusingAPI}>
        <div className="pt-7 grid gap-y-4">
          <div className="mt-4">
            <label
              htmlFor="input-label"
              className="block w-max text-sm ml-3 px-1 bg-white text-[#1C1B1F] relative top-3 "
            >
              Username
            </label>
            <input
              type="text"
              id="input-label"
              className="py-3 px-4 w-full border-[#79747E] border rounded-[4px] text-base"
              placeholder="Masukkan Username Anda"
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
          </div>

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
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img src={ShowPassword} className="h-full" alt="Kembali" />
                ) : (
                  <img src={CoverPassword} className="h-full" alt="Kembali" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-5 grid gap-y-10">
          <div className="flex items-center justify-between">
            <label className="flex items-center font-medium text-gray-500">
              <input
                type="checkbox"
                className="leading-loose text-[#112211] mr-2"
              />
              <span className="text-base text-[#112211] leading-snug">
                Remember me
              </span>
            </label>
          </div>

          <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[4px] font-semibold border-[#4CAF50] bg-[#8DD3BB] text-white text-sm hover:bg-[#396a59]" type="submit"
          >
            Login
          </button>

          <span className="flex justify-center font-medium text-sm -mt-4">
            Tidak punya akun?
            <Link to="/register" className="font-semibold text-[#EB5757] px-1 cursor-pointer">
              Sign Up
            </Link>
          </span>
          <div className="flex items-center justify-center">
            <span className="w-16 border border-[#8DD3BB]"></span>
            <span className="px-4 w-fit text-[#8DD3BB] text-sm">
              Atau Login dengan
            </span>
            <span className="w-16 border border-[#8DD3BB]"></span>
          </div>
          <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-[4px] font-medium border-[#8DD3BB] relative hover:bg-[#e5e5e5]">
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
          <button
            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 font-medium relative hover:bg-[#e5e5e5] text-sm"
          >
            Login Sebagai Tamu
          </button>
        </div>
      </form >
    </div >

  );
}

export default LoginPage;
