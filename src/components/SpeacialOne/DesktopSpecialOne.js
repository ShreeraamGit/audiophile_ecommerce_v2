import React from "react";
import MobileCircle from "../../assets/home/desktop/pattern-circles.svg";
import SpeakerImageMobile from "../../assets/home/desktop/image-speaker-zx9.png";
import Button from "../Button/Button";

const DesktopSpecialOne = () => {
  return (
    <div className="h-fit relative border rounded-xl bg-[#D87D4A] bg-circle-pattern">
      <img
        className="absolute top-0 z-auto right-[18%] h-[100%] w-[100%]"
        src={MobileCircle}
        alt="background circle"
      ></img>
      <div className="flex relative justify-around items-start mt-20 gap-24 pr-20 pl-20">
        <div className="">
          <img className="" src={SpeakerImageMobile} alt="speakerImage"></img>
        </div>
        <div className="flex flex-col gap-10 w-[70%] mt-10">
          <h2 className="text-[#FFFFFF] font-bold text-[56px] leading-[58px] tracking-[2px] w-[60%]">
            ZX9 SPEAKER
          </h2>
          <p className="text-[#FFFFFF] font-medium leading-[25px] text-[15px] tracking-[1.3px]">
            Upgrade to premium speakers that are phenomenally built to deleiver
            truly remarkable sound
          </p>
          <div className="">
            <Button type={"buttonBlack"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSpecialOne;
