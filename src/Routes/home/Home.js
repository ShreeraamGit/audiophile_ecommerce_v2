import React, { Fragment } from "react";
import MobileView from "../../views/Mobile/MobileView";
import TabletView from "../../views/Tablet/TabletView";
import LaptopView from "../../views/Laptop/LaptopView";
import DesktopView from "../../views/Desktop/DesktopView";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 1280px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const isDesktop = useMediaQuery({
    query: "(max-width: 1536px)",
  });

  const renderView = () => {
    if (isMobile) {
      return <MobileView></MobileView>;
    } else if (isTablet) {
      return <TabletView></TabletView>;
    } else if (isLaptop) {
      return <LaptopView></LaptopView>;
    } else if (isDesktop) {
      return <DesktopView></DesktopView>;
    } else {
      return <h1 className="">IS LArge</h1>;
    }
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default Home;
