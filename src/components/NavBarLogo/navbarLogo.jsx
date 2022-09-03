import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { useContext } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";

function Navbarwithlogo() {
  const { pageStatusHandler } = useContext(HerosectionContext);
  return (
    <div className="flex justify-between items-center mr-32 ml-32 nav-items border-b border-[#FBAF85] text-white ">
      <div className="text-3xl mt-7 font-extrabold mb-5">audiophile</div>
      <div className="nav-link flex gap-10 font-extrabold mb-5 mt-7">
        <Link to="/">
          <div onClick={pageStatusHandler} value="" className="">
            HOME
          </div>
        </Link>
        <Link to="/headphones">
          <div onClick={pageStatusHandler} value="headphones" className="">
            HEADPHONES
          </div>
        </Link>
        <Link to="/speakers">
          <div onClick={pageStatusHandler} value="speakers" className="">
            SPEAKERS
          </div>
        </Link>
        <Link to="/earphones">
          <div onClick={pageStatusHandler} value="earphones" className="">
            EARPHONES
          </div>
        </Link>
      </div>
      <Cart className="h-6 w-6 mb-5 mt-7"></Cart>
    </div>
  );
}

export default Navbarwithlogo;
