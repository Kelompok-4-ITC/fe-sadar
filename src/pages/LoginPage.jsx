import Password from "../components/Password";
import Username from "../components/Username";
import LoginChoice from "../components/LoginChoice";
import "../css/index.css";

function LoginPage() {
  return (
    <div className="p-8 grid gap-y-4">
      <h1 className="font-semibold text-4xl pointer-events-none">Login</h1>
      <div className="text-[#202020] pointer-events-none">
        Login untuk mengakses akun
        <a className="text-sadar text-[#3D9970]"> Sadar</a> anda
      </div>

      <div class="pt-7 grid gap-y-4">
        {/* Username */}
        <Username />

        {/* Password */}
        <Password />
      </div>

      {/* LoginChoice */}
      <LoginChoice/>
    </div>
  );
}

export default LoginPage;
