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
          src={HomeHeroImageTablet}
          alt="HeroImage"
        />
      );
    } else if (width < 1024) {
      return (
        <img className="h-full w-full" src={HomeHeroImage} alt="HeroImage" />
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
        <div className="w-full gap-7 flex flex-col justify-center items-center absolute top-1/2 left-1/2 text-white transform -translate-x-1/2 -translate-y-1/2">
          <h5 className="tracking-[1rem] text-xl">NEW PRODUCT</h5>
          <h1 className="text-5xl font-extrabold tracking-wider text-center">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-center leading-8 text-lg font-light tracking-widest">
            Experence natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast
          </p>
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
  );
}

export default HeroBanner;
