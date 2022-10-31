import React from "react";
import { Fragment } from "react";
import HeroImageMobile from "../../assets/home/mobile/image-header.jpg";
import Button from "../Button/Button";

const HeroSectionImage = () => {
  return (
    <Fragment>
      <div className="hero-section-image">
        <img src={HeroImageMobile} alt="HeroImage"></img>
      </div>
      <div className="text-[#FFFFFF] flex flex-col justify-center items-center gap-7 w-full h-fit absolute top-[42.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <h5 className="text-[13px] text-[#F1F1F1] font-light tracking-[12px]">
          NEW PRODUCT
        </h5>
        <h1 className="text-[40px] text-center leading-[44px] font-semibold tracking-wider">
          XX99 MARK II HEADPHONES
        </h1>
        <p className=" text-[15px] leading-[25px] text-center font-medium tracking-[1.5px]">
          Experience natural, lifelike audio and exceptional build quality made
          fort he passionate music enthusiast
        </p>
        <Button type={"buttonOrange"}></Button>
      </div>
    </Fragment>
  );
};

export default HeroSectionImage;
