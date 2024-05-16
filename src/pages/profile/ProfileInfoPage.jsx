import React, { useState, useEffect } from "react";
import BackButton from "../../components/BackButton";
import IconInfo from "../../img/profile-icon-info.png";
import IconProfile from "../../img/profile-icon-profile.png";
import IconEmail from "../../img/profile-icon-email.png";
import IconPhone from "../../img/profile-icon-phone.png";
import IconAlamat from "../../img/profile-icon-alamat.png";
import IconMale from "../../img/profile-icon-male.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileInfoPage() {
  const [data, setData] = useState({
    nama: "",
    username: "",
    email: "",
    noHP: "",
    alamatLengkap: "",
    jenisKelamin: "",
    tanggalLahir: "",
    role: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("jwttoken");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/user/fetch-user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const result = response.data;
          const userData = {
            nama: result.loggedUser.fullName,
            username: result.loggedUser.userName,
            email: result.loggedUser.email,
            noHP: result.loggedUser.noHP,
            alamatLengkap: result.loggedUser.alamat,
            jenisKelamin: result.loggedUser.jenisKelamin,
            tanggalLahir: result.loggedUser.tanggalLahir,
            role: result.loggedUser.role.namaRole,
          };
          setData(userData);
          sessionStorage.setItem("userData", JSON.stringify(userData));
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetchUserData();
    }
  }, [navigate]);

  // Format phone number
  const pemecahnoHp = (noHP) => {
    if (!noHP) return "";
    return noHP.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  // Format date of birth
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const [tanggal, bulan, tahun] = data.tanggalLahir
    ? [
        data.tanggalLahir.split("-")[2],
        namaBulan[parseInt(data.tanggalLahir.split("-")[1], 10) - 1],
        data.tanggalLahir.split("-")[0],
      ]
    : ["", "", ""];

  const keEditInfo = (e) => {
    e.preventDefault();
    navigate("/profile/info/edit", {
      state: data,
    });
  };
  return (
    <>
      <div className="flex flex-col gap-[16px] py-[10px] bg-sadar-second-white md:mx-auto md:w-1/2">
        {/* Bagian Atas */}
        <section className="flex py-[10px] gap-5 justify-between">
          <BackButton path={"/profile"} />
          <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
            <h1 className="font-semibold text-t-black text-base">
              Info Personal
            </h1>
            <img src={IconInfo} alt="icon info" />
          </div>
        </section>
        {/* Bagian Info */}
        <main className="flex flex-col gap-[22px] py-5 px-[13px]">
          {/* Nama */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Nama</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconProfile} alt="icon profile" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">{data.nama}</h2>
            </div>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Username</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconProfile} alt="icon profile" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">
                {data.username}
              </h2>
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Role</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconProfile} alt="icon profile" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">{data.role}</h2>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Alamat Email</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconEmail} alt="icon email" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">{data.email}</h2>
            </div>
          </div>

          {/* Nomer Telpon */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Nomor Telepon</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconPhone} alt="icon phone" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">
                {pemecahnoHp(data.noHP)}
              </h2>
            </div>
          </div>

          {/* Alamat Lengkap */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Alamat Lengkap</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconAlamat} alt="icon alamat" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">
                {data.alamatLengkap}
              </h2>
            </div>
          </div>

          {/* Jenis Kelamin */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Jenis Kelamin</h1>
            <div className="flex w-full border-b-2 border-t-black gap-[16px] pb-[10px]">
              <img src={IconMale} alt="icon male" className="w-6 h-6" />
              <h2 className="text-sm font-medium text-t-black">
                {data.jenisKelamin}
              </h2>
            </div>
          </div>

          {/* Tanggal Lahir */}
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-sm font-normal text-t-black">Tanggal Lahir</h1>
            <div className="flex w-full justify-between">
              <h1 className="text-sm font-medium text-t-black px-8 border-b-2 border-t-black pb-[10px]">
                {tanggal}
              </h1>
              <h1 className="text-sm font-medium text-t-black px-8 border-b-2 border-t-black pb-[10px]">
                {bulan}
              </h1>
              <h1 className="text-sm font-medium text-t-black px-8 border-b-2 border-t-black pb-[10px]">
                {tahun}
              </h1>
            </div>
          </div>
        </main>
        <button
          className="w-full mx-[10px] px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center"
          onClick={keEditInfo}
          type="button"
        >
          Edit Info Profile
        </button>
      </div>
    </>
  );
}

export default ProfileInfoPage;
