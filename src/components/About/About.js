import React from "react";
import AboutImage from "../../assets/shared/mobile/image-best-gear.jpg";
const About = () => {
  return (
    <div className="flex flex-col gap-10">
      <img className="rounded-xl" src={AboutImage} alt="aboutimage"></img>
      <div className="flex flex-col gap-9">
        <h2 className="text-[32px] text-center tracking-[1.5px] leading-[40px] font-medium">
          BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-[16px] text-gray-700 leading-[25px] text-center">
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

export default About;
