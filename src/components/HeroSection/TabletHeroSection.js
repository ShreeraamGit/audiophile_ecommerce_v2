import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import TabletHerosectionImage from "../HeroSectionImage/TabletHerosectionImage";
import PageName from "../PageName/PageName";

const TabletHeroSection = () => {
  const { pathname } = useLocation();
  const { pageName } = useSelector((state) => state.pageName);

  const renderHeroSection = () => {
    if (pathname === "/") {
      return (
        <div className="hero-section relative h-fit bg-[#101010]">
          <TabletHerosectionImage></TabletHerosectionImage>
        </div>
      );
    } else if (
      pathname === "/speakers" ||
      pathname === "/headphones" ||
      pathname === "/earphones"
    ) {
      return (
        <div className="hero-section relative h-fit bg-[#101010] ">
          <PageName pageName={pageName}></PageName>
        </div>
      );
    }
    return null;
  };
  return renderHeroSection();
};

export default TabletHeroSection;
