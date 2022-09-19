import HomeHeroImage from "../../assets/home/desktop/image-hero.jpg";
import HomeHeroImageMobile from "../../assets/home/mobile/image-header.jpg";
import HomeHeroImageTablet from "../../assets/home/tablet/image-header.jpg";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { WindowSizeContext } from "../../context/windowSizeContext";
import { useContext, useEffect } from "react";

function HeroBanner() {
  const { useWindowSize, updateSize } = useContext(WindowSizeContext);
  const [width, height] = useWindowSize();

  const RenderHeroImage = () => {
    if (width < 640) {
      return (
        <img
          className="h-full w-full"
          src={HomeHeroImageMobile}
          alt="HeroImage"
        />
      );
    } else if (width < 768) {
      return (
        <img
          className="h-full w-full"
          src={HomeHeroImageMobile}
          alt="HeroImage"
        />
      );
    } else if (width < 1024) {
      return (
        <img
          className="h-full w-full"
          src={HomeHeroImageMobile}
          alt="HeroImage"
        />
      );
    }
    return (
      <img className="h-full w-full" src={HomeHeroImage} alt="HeroImage" />
    );
  };

  return (
    <div className="relative w-screen h-fit">
      <div className="">
        <RenderHeroImage></RenderHeroImage>
        <div className="xl:w-[45%] p-6 md:w-[90%] w-[95%] gap-5 xl:gap-7 md:gap-10 flex flex-col justify-center items-center absolute top-1/2 left-1/2 lg:left-[32%] text-white transform -translate-x-1/2 -translate-y-1/2">
          <h5 className="lg:text-left tracking-[0.8rem] text-center w-full md:tracking-[1.2rem] text-lg xl:text-sm md:text-2xl text-[#D87D4A]">
            NEW PRODUCT
          </h5>
          <h1 className="text-4xl md:text-6xl w-full font-extrabold tracking-wider text-center xl:text-left">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-center lg:w-[82%] lg:mr-auto xl:text-left leading-8 text-lg xl:text-sm md:text-xl font-light tracking-widest md:tracking-[0.2rem]">
            Experence natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast
          </p>
          <div className="xl:mr-auto">
            <Button
              style={{
                backgroundColor: "#D87D4A",
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
    </div>
  );
}

export default HeroBanner;
