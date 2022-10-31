import React from "react";
import SpeakerImage from "../../assets/home/mobile/image-speaker-zx7.jpg";
import Button from "../Button/Button";
const SpecialTwo = () => {
  return (
    <div className="h-fit relative">
      <img className="rounded-xl" src={SpeakerImage} alt="speakerimage"></img>
      <div className="absolute top-[25%] left-5 flex flex-col gap-9">
        <h3 className="font-bold text-[28px] tracking-[1.5px]">ZX7 SPEAKER</h3>
        <Button type={""}></Button>
      </div>
    </div>
  );
};

export default SpecialTwo;
