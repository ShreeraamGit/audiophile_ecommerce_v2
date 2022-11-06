import React from "react";
import AboutImageTablet from "../../assets/shared/tablet/image-best-gear.jpg";

const TabletAbout = () => {
  return (
    <div className="flex flex-col gap-10">
      <img className="rounded-xl" src={AboutImageTablet} alt="aboutimage"></img>
      <div className="flex flex-col gap-9 md:justify-center md:items-center">
        <h2 className="text-[32px] md:w-[70%] text-center tracking-[1.5px] leading-[40px] font-bold">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-[16px] md:w-[80%] text-gray-700 leading-[25px] text-center">
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

export default TabletAbout;
