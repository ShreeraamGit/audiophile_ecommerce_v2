import React from "react";
import { Fragment } from "react";
import HeroImageDesktop from "../../assets/home/desktop/image-hero.jpg";
import Button from "../Button/Button";

const DesktopHeroSectionImage = () => {
  return (
    <div className="relative">
      <div className="hero-section-image">
        <img src={HeroImageDesktop} alt="HeroImage"></img>
      </div>
      <div className="text-white flex flex-col gap-5 w-[42%] absolute top-[32%] left-[6%]">
        <span className="text-[14px] leading-[19px] tracking-[10px]">
          NEW PRODUCT
        </span>
        <h2 className="text-[56px] leading-[58px] tracking-[2px] font-bold">
          XX99 MARK II HEADPHONES
        </h2>
        <p className="text-[15px] leading-[25px] font-medium w-[65%]">
          Experience natural, lifelike audio and exceptional build quality made
          fort he passionate music enthusiast.
        </p>
        <div className="">
          <Button type={"buttonOrange"}></Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeroSectionImage;
