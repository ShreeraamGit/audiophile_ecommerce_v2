import React from "react";
import HeroSectionImage from "../HeroSectionImage/HeroSectionImage";
import { useLocation } from "react-router-dom";
import PageName from "../PageName/PageName";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { pathname } = useLocation();
  const { pageName } = useSelector((state) => state.pageName);

  const renderHeroSection = () => {
    if (pathname === "/") {
      return (
        <div className="hero-section relative h-fit bg-[#101010]">
          <HeroSectionImage></HeroSectionImage>
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

export default HeroSection;
