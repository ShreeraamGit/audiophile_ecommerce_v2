import { ReactComponent as Circle } from "../../assets/home/desktop/pattern-circles.svg";
import SpecialProductSpeakerImage from "../../assets/home/desktop/image-speaker-zx9.png";

import { Button } from "@mui/material";

function SpecialProductsDisplayOne() {
  return (
    <div className="border xl:justify-evenly w-full md:w-full relative rounded-xl bg-[#D87D4A] flex flex-col xl:flex-row justify-center items-center gap-10">
      <Circle className="absolute top-0 left-0 md:bottom-[10rem] md:right-[5rem] overflow-auto z-0"></Circle>
      <img
        className="mt-20 xl:mt-20 xl:h-[22rem] xl:w-[20rem] h-[12rem] w-[10rem]"
        src={SpecialProductSpeakerImage}
        alt="HeroImage"
      />
      <div className="z-10 xl:mt-20 p-5 flex flex-col xl:w-[45%] block mb-10 xl:mb-0 justify-center text-white items-center gap-7">
        <div className="text-center text-4xl md:text-5xl font-extrabold tracking-widest xl:mr-auto xl:text-left">
          <h1 className="">ZX9</h1>
          <h1 className="">SPEAKER</h1>
        </div>
        <p className="text-center font-light text-lg md:text-xl xl:text-lg xl:mr-auto xl:text-left md:tracking-[0.2rem] md:w-[70%] xl:w-full tracking-wide">
          Upgrade to premium speakers that are phenomenally built to deleiver
          truly remarkable sound
        </p>
        <div className="xl:mr-auto">
          <Button
            style={{
              backgroundColor: "#000000",
              borderRadius: "0px",
            }}
            variant="contained"
            size="large"
          >
            SEE PRODUCT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SpecialProductsDisplayOne;
