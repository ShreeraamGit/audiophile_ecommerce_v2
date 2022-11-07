import React from "react";
import Button from "../Button/Button";
import HeadphoneimageTablet from "../../assets/home/desktop/image-earphones-yx1.jpg";

const DesktopSpecailThree = () => {
  return (
    <div className="relative flex gap-7 h-[20rem] w-full">
      <img
        className="rounded-xl w-[50%]"
        src={HeadphoneimageTablet}
        alt="headphoneimage"
      ></img>
      <div className="border w-[50%] rounded-xl h-full w-full pt-10 pb-10 p-5 bg-[#F1F1F1] flex flex-col justify-center items-center gap-7">
        <h3 className="font-bold text-[28px] tracking-[1.15px]">
          YX1 EARPHONES
        </h3>
        <Button type={""}></Button>
      </div>
    </div>
  );
};

export default DesktopSpecailThree;
