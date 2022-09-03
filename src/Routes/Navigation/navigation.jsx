import { Fragment } from "react";
import HeroBanner from "../../components/HeroBanner/heroBanner";
import Navbarwithlogo from "../../components/NavBarLogo/navbarLogo";
import { Outlet } from "react-router-dom";
import { HerosectionContext } from "../../context/heroSectionContext";
import { useContext } from "react";

function Navigation() {
  const { pageStatus } = useContext(HerosectionContext);

  const renderSwitch = (param) => {
    switch (param) {
      case "speakers":
        return (
          <h1 className="text-white p-10 text-4xl text-center font-extrabold">
            Speakers
          </h1>
        );
      case "headphones":
        return (
          <h1 className="text-white p-10 text-4xl text-center font-extrabold">
            Headphones
          </h1>
        );
      case "earphones":
        return (
          <h1 className="text-white p-10 text-4xl text-center font-extrabold">
            Earphones
          </h1>
        );
      default:
        return <HeroBanner></HeroBanner>;
    }
  };

  return (
    <Fragment>
      <div className="nav-bar h-fit bg-[#191919]">
        <Navbarwithlogo></Navbarwithlogo>
        {renderSwitch(pageStatus)}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
}

export default Navigation;
