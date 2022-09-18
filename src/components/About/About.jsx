import AboutImage from "../../assets/shared/desktop/image-best-gear.jpg";
import AboutImageTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import { WindowSizeContext } from "../../context/windowSizeContext";
import { useContext, useEffect } from "react";

function About() {
  const RenderAboutImage = () => {
    const { useWindowSize, updateSize } = useContext(WindowSizeContext);
    const [width, height] = useWindowSize();

    if (width < 640) {
      return (
        <img
          className="h-full w-full rounded-xl"
          src={AboutImage}
          alt="HeroImage"
        />
      );
    } else if (width < 768) {
      return (
        <img
          className="h-full w-full rounded-xl"
          src={AboutImageTablet}
          alt="HeroImage"
        />
      );
    } else if (width < 1024) {
      return (
        <img
          className="h-full w-full rounded-xl"
          src={AboutImageTablet}
          alt="HeroImage"
        />
      );
    }
    return (
      <img
        className="h-full w-full rounded-xl"
        src={AboutImage}
        alt="HeroImage"
      />
    );
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-10 mb-32 justify-center items-center">
      <div className="w-full">
        <div className="w-full text-center space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-[2.1rem] font-bold tracking-wide xl:text-left">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-[#101010] tracking-wide xl:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers an audio
            accessories.We have a large showroom and luxury demonstration rooms
            avaliable for you to browse and experience a wide range of out
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment
          </p>
        </div>
      </div>
      <div className="w-full md:w-full">
        <RenderAboutImage></RenderAboutImage>
      </div>
    </div>
  );
}

export default About;
