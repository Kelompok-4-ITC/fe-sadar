import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { toast } from 'react-toastify';
import IconInfo from "../../img/profile-icon-info.png";
import IconProfile from "../../img/profile-icon-profile.png";
import IconEmail from "../../img/profile-icon-email.png";
import IconAlamat from "../../img/profile-icon-alamat.png";
import IconMale from "../../img/profile-icon-male.png";

const ProfileEditInfo = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    alamat: "",
    tanggalLahir: "",
    jenisKelamin: "",
  });
  const [originalEmail, setOriginalEmail] = useState("");

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
        const { email, fullName, alamat, tanggalLahir, jenisKelamin } = response.data.loggedUser;
        setUserData({ email, fullName, alamat, tanggalLahir, jenisKelamin });
        setOriginalEmail(email);
      } catch (error) {
        console.error("Error fetching user data", error);
        toast.error("Gagal mengambil data pengguna");
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("jwttoken");
      const dataToUpdate = {
        fullName: userData.fullName,
        alamat: userData.alamat,
        tanggalLahir: userData.tanggalLahir,
        jenisKelamin: userData.jenisKelamin,
      };
  
      if (userData.email !== originalEmail) {
        dataToUpdate.email = userData.email;
      }
  
      const response = await axios.put(
        "https://kelompok4-dot-personal-website-415207.et.r.appspot.com/user/edit-user",
        dataToUpdate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response.status === 200) {
        const updatedUserData = {
          fullName: userData.fullName,
          email: userData.email,
          noHP: userData.noHP,
          alamatLengkap: userData.alamat,
          jenisKelamin: userData.jenisKelamin,
          tanggalLahir: userData.tanggalLahir,
        };
        toast.success("Info profile berhasil diupdate");
        navigate("/profile/info");
      }
    } catch (error) {
      let err = error.response?.data?.message || "Terjadi kesalahan saat mengupdate info profile";
      toast.error(err);
      console.error("Terjadi kesalahan saat mengupdate info profile:", error);
    }
  };
  

  return (
    <div className="md:w-1/2 md:mx-auto p-4 bg-white">
      <div className="flex items-center py-[10px] gap-5">
        <BackButton path="/profile/info" />
        <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
          <h1 className="font-semibold text-t-black text-base">
            Edit Info Personal
          </h1>
          <img src={IconInfo} alt="icon info" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <img src={IconProfile} alt="Icon" className="w-6 h-6 mr-2" />
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
            />
          </div>
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <img src={IconEmail} alt="Icon" className="w-6 h-6 mr-2" />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
            />
          </div>
        </div>
        {/* Alamat */}
        <div className="mb-4">
          <label className="block text-gray-700">Alamat</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <img src={IconAlamat} alt="Icon" className="w-6 h-6 mr-2" />
            <input
              type="text"
              name="alamat"
              value={userData.alamat}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
            />
          </div>
        </div>
        {/* Jenis Kelamin */}
        <div className="mb-4">
          <label className="block text-gray-700">Jenis Kelamin</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <img src={IconMale} alt="Icon" className="w-6 h-6 mr-2" />
            <select
              name="jenisKelamin"
              value={userData.jenisKelamin}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Pria">Pria</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>
        {/* Tanggal Lahir */}
        <div className="mb-4">
          <label className="block text-gray-700">Tanggal Lahir</label>
          <div className="flex items-center border-b border-gray-300 py-2">
            <input
              type="date"
              name="tanggalLahir"
              value={userData.tanggalLahir}
              onChange={handleChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-sadar-primary-color hover:bg-sadar-fourth-black rounded-lg font-semibold text-lg text-t-white text-center"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileEditInfo;
