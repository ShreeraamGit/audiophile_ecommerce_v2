import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import HeroImageMobile from "../../assets/home/mobile/image-header.jpg";
import HeroImageTablet from "../../assets/home/tablet/image-header.jpg";
import HeroImageDesktop from "../../assets/home/desktop/image-hero.jpg";
import Button from "../Button/Button";

const HeroSectionImage = () => {
  const { screenSize } = useSelector((state) => state.screenSize);

  const renderHeroImage = () => {
    if (screenSize < 500) {
      return HeroImageMobile;
    } else if (screenSize > 500 && screenSize < 930) {
      return HeroImageTablet;
    } else {
      return HeroImageDesktop;
    }
  };

  return (
    <Fragment>
      <div className="hero-section-image">
        <img src={renderHeroImage()} alt="HeroImage"></img>
      </div>
      <div className="text-[#FFFFFF] flex flex-col justify-center items-center gap-7 w-full h-fit absolute top-[42.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <h5 className="text-[13px] text-[#F1F1F1] font-light tracking-[12px]">
          NEW PRODUCT
        </h5>
        <h1 className="text-[40px] md:text-[56px] md:leading-[58px] text-center leading-[44px] font-semibold tracking-wider">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-[15px] md:w-[50%] leading-[25px] font-[300] text-center">
          Experience natural, lifelike audio and exceptional build quality made
          fort he passionate music enthusiast
        </p>
        <Button type={"buttonOrange"}></Button>
      </div>
    </Fragment>
  );
};

export default HeroSectionImage;
