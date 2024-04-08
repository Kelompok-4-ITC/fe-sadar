import { Link } from "react-router-dom";
import ArrowButton from "../assets/ArrowButton.svg";

function BackButton({ path }) {
  return (
    <>
      <Link to={path}>
        <button className=" bg-sadar-primary-color rounded-full hover:bg-sadar-fourth-black w-7 h-7 text-center flex justify-center
        items-center">
          <img src={ArrowButton} className="h-3/5" />
        </button>
      </Link>
    </>
  );
}

export default BackButton;