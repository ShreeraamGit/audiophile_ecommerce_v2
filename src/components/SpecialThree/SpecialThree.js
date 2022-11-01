import React from "react";
import Button from "../Button/Button";
import Headphoneimage from "../../assets/home/mobile/image-earphones-yx1.jpg";

const SpecialThree = () => {
  return (
    <div className="h-fit relative flex flex-col  gap-7">
      <img
        className="rounded-xl"
        src={Headphoneimage}
        alt="headphoneimage"
      ></img>
      <div className="border rounded-xl h-fit pt-10 pb-10 p-5 bg-[#F1F1F1] flex flex-col justify-start items-start gap-7">
        <h3 className="font-bold text-[28px] tracking-[1.15px]">
          YX1 EARPHONES
        </h3>
        <Button type={""}></Button>
      </div>
    </div>
  );
};

export default SpecialThree;
