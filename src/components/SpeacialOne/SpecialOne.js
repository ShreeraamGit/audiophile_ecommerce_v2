import React from "react";
import MobileCircle from "../../assets/home/desktop/pattern-circles.svg";
import SpeakerImageMobile from "../../assets/home/mobile/image-speaker-zx9.png";
import Button from "../Button/Button";

const SpecialOne = () => {
  return (
    <div className="h-fit relative border rounded-xl bg-[#D87D4A] bg-circle-pattern">
      <img className="" src={MobileCircle} alt="background circle"></img>
      <div className="">
        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 translate-y-24 ">
          <img src={SpeakerImageMobile} alt="speakerImage"></img>
        </div>
        <div className="flex flex-col gap-8 md:gap-5 justify-center items-center mb-16">
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
