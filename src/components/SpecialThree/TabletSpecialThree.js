import React from "react";
import Button from "../Button/Button";
import HeadphoneimageTablet from "../../assets/home/tablet/image-earphones-yx1.jpg";

const TabletSpecialThree = () => {
  return (
    <div className="relative flex gap-7 h-[20rem] w-full">
      <img
        className="rounded-xl w-[50%]"
        src={HeadphoneimageTablet}
        alt="headphoneimage"
      ></img>
      <div className="border rounded-xl h-full w-full pt-10 pb-10 p-5 bg-[#F1F1F1] flex flex-col justify-center items-center gap-7">
        <h3 className="font-bold text-[28px] tracking-[1.15px]">
          YX1 EARPHONES
        </h3>
        <Button type={""}></Button>
      </div>
    </div>
  );
};

export default TabletSpecialThree;

/*<img
        className="rounded-xl "
        src={Headphoneimage}
        alt="headphoneimage"
      ></img>
      <div className="border  rounded-xl h-fit pt-10 pb-10 p-5 bg-[#F1F1F1] flex flex-col justify-start items-start gap-7">
        <h3 className="font-bold text-[28px] tracking-[1.15px]">
          YX1 EARPHONES
        </h3>
        <Button type={""}></Button>
      </div>*/
