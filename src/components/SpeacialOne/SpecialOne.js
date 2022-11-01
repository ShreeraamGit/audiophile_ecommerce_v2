import React from "react";
import MobileCircle from "../../assets/home/desktop/pattern-circles.svg";
import SpeakerImageMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import Button from "../Button/Button";

const SpecialOne = () => {
  return (
    <div className="h-fit relative border rounded-xl bg-[#D87D4A] bg-circle-pattern">
      <img className="" src={MobileCircle} alt="background circle"></img>
      <div className="">
        <div className="absolute top-0 md:-top-[10%] left-1/2 transform -translate-x-1/2 translate-y-24 md:h-[15rem] md:w-[15rem] h-[10rem] w-[10rem]">
          <img src={SpeakerImageMobile} alt="speakerImage"></img>
        </div>
        <div className="md:flex md:flex-col md:justify-center md:items-center md:text-center md:absolute md:top-[35%] md:left-1/2 md:transform md:-translate-x-1/2 md:translate-y-24 flex flex-col gap-8 md:gap-5 justify-center items-center mb-16">
          <h2 className="text-[#FFFFFF] font-bold text-[44px] md:text-[54px] tracking-[1.5px] w-[60%] text-center">
            ZX9 SPEAKER
          </h2>
          <p className="text-[#FFFFFF] text-center font-medium leading-[25px] text-[15px] tracking-[1.3px]">
            Upgrade to premium speakers that are phenomenally built to deleiver
            truly remarkable sound
          </p>
          <Button type={"buttonBlack"}></Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOne;
