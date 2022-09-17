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
      </div>
    </div>
  );
}

export default HeroBanner;
