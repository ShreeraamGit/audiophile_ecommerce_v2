import React from "react";
import SpeakerImageTablet from "../../assets/home/desktop/image-speaker-zx7.jpg";
import Button from "../Button/Button";

const DesktopSpecialTwo = () => {
  return (
    <div className="relative h-[10%] w-[100%]">
      <img
        className="rounded-xl w-[100%]"
        src={SpeakerImageTablet}
        alt="speakerimage"
      ></img>
      <div className="absolute top-[30%] left-[8%] flex flex-col gap-9">
        <h3 className="font-bold text-[28px] tracking-[1.5px]">ZX7 SPEAKER</h3>
        <Button type={""}></Button>
      </div>
    </div>
  );
};

export default DesktopSpecialTwo;
