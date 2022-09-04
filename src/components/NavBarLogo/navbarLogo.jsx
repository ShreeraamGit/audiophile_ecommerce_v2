import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { useContext } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";

function Navbarwithlogo() {
  return (
    <div className="flex justify-between items-center mr-32 ml-32 nav-items border-b border-[#FBAF85] text-white ">
      <Logo className="h-6"></Logo>
      <div className="nav-link flex gap-10 font-extrabold mb-5 mt-7">
        <Link to="/">
          <div className="">HOME</div>
        </Link>
        <Link to="/headphones">
          <div className="">HEADPHONES</div>
        </Link>
        <Link to="/speakers">
          <div className="">SPEAKERS</div>
        </Link>
        <Link to="/earphones">
          <div className="">EARPHONES</div>
        </Link>
      </div>
      <Cart className="h-6 w-6 mb-5 mt-7"></Cart>
    </div>
  );
}

export default Navbarwithlogo;
