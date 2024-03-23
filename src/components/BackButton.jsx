import { Link } from "react-router-dom";
import btnBack from "../assets/BackButton.svg";

function BackButton() {
  return (
    <>
      <Link to="/login">
        <button className="backRound bg-[#3D9970] rounded-full hover:bg-[#1d4a36] w-11 h-11 text-center flex justify-center disabled:opacity-50">
          <img src={btnBack} className="h-full" alt="Kembali" />
        </button>
      </Link>
    </>
  );
}

export default BackButton;