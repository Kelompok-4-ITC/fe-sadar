import BackButton from "../components/BackButton";
import Password from "../components/Password";
import Username from "../components/Username";
import Email from "../components/Email";
import NomorHP from "../components/NomorHP";
import RegistChoice from "../components/RegistChoice";
import "../css/index.css";

function RegisterPage() {
  return (
    <div className="p-8 grid gap-y-4">
      <BackButton />
      <h1 className="font-semibold text-4xl pointer-events-none">Register</h1>
      <div className="text-[#202020] pointer-events-none">
        Buat akun <a className="text-sadar text-[#3D9970]">Sadar</a> anda
      </div>

      {/* Username */}
      <Username />

      {/* Email */}
      <Email />

      {/* Password */}
      <Password />

      {/* Nomor HP */}
      <NomorHP />

      {/* RegistChoice */}
      <RegistChoice />
    </div>
  );
}

export default RegisterPage;
