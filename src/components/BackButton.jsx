import { useState } from "react";
import btnBack from "../assets/BackButton.svg";
import "../css/BackButton.css";

function BackButton() {
    const [count, setCount] = useState(0);
  
    return (
      <>
          <div class="backRound rounded-full w-11 h-11 text-center flex justify-center border hover:border-lime-800 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <img src={btnBack} className="" alt="Kembali"/>
          </div>
      </>
    );
  }
  
  export default BackButton;