import React from "react";
import AboutImage from "../../assets/shared/desktop/image-best-gear.jpg";

const DesktopAbout = () => {
  return (
    <div className="flex flex-row-reverse gap-10">
      <img className="rounded-xl" src={AboutImage} alt="aboutimage"></img>
      <div className="flex flex-col gap-9 justify-center items-start">
        <h2 className="text-[40px] tracking-[1.5px] leading-[44px] font-bold">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-[16px] md:w-[80%] text-gray-700 leading-[25px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment
        </p>
      </div>
    </div>
  );
};

export default DesktopAbout;
