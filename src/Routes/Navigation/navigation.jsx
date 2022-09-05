import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroBanner from "../../components/HeroBanner/heroBanner";
import Navbarwithlogo from "../../components/NavBarLogo/navbarLogo";
import { Outlet } from "react-router-dom";
import { HerosectionContext } from "../../context/heroSectionContext";
import { useContext } from "react";
import Footer from "../../components/Footer/footer";

function Navigation() {
  const { pageStatus, setPageStatus } = useContext(HerosectionContext);
  const location = useLocation();

  useEffect(() => {
    setPageStatus(location.pathname);
  }, [location]);

  const renderSwitch = (param) => {
    switch (param) {
      case "speakers":
        return (
          <h1 className="text-white p-20 text-4xl text-center font-extrabold">
            SPEAKERS
          </h1>
        );
      case "headphones":
        return (
          <h1 className="text-white p-20 text-4xl text-center font-extrabold">
            HEADPHONES
          </h1>
        );
      case "earphones":
        return (
          <h1 className="text-white p-20 text-4xl text-center font-extrabold">
            EARPHONES
          </h1>
        );
      case "/":
        return <HeroBanner></HeroBanner>;
      default:
        return (
          <h1 className="text-white p-20 text-4xl text-center font-extrabold">
            PRODUCT PREVIEW
          </h1>
        );
    }
  };

  return (
    <Fragment>
      <div className="nav-bar h-fit bg-[#191919]">
        <Navbarwithlogo></Navbarwithlogo>
        {renderSwitch(pageStatus)}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
}

export default Navigation;
