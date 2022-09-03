import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import HeroBanner from "../../components/HeroBanner/heroBanner";

function Navigation() {
  return (
    <Fragment>
      <div className="nav-bar border bg-[#191919]">
        <div className="mr-32 ml-32 nav-items mt-7 border-b border-[#FBAF85] text-white flex justify-between items-center">
          <div className="text-3xl font-extrabold mb-5">audiophile</div>
          <div className="nav-links flex gap-24 font-extrabold mb-5">
            <Link to="/headphones">
              <div className="">HEADPHONES</div>
            </Link>
            <div className="">SPEAKERS</div>
            <div className="">EARPHONES</div>
          </div>
          <Cart className="h-6 w-6 mb-5"></Cart>
        </div>
        <HeroBanner></HeroBanner>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default Navigation;
