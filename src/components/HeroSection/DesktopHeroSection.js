import React from "react";
import DesktopHeroSectionImage from "../HeroSectionImage/DesktopHeroSectionImage";
import { useLocation } from "react-router-dom";
import PageName from "../PageName/PageName";
import { useSelector } from "react-redux";

const DesktopHeroSection = () => {
  const { pathname } = useLocation();
  const { pageName } = useSelector((state) => state.pageName);

  const renderHeroSection = () => {
    if (pathname === "/") {
      return (
        <div className="hero-section relative h-fit bg-[#101010]">
          <DesktopHeroSectionImage></DesktopHeroSectionImage>
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

export default DesktopHeroSection;
