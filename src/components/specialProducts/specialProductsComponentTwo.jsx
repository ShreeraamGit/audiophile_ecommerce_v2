import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import SpeakerImageMobile from "../../assets/home/mobile/image-speaker-zx7.jpg";
import SpeakerImageTablet from "../../assets/home/tablet/image-speaker-zx7.jpg";
import SpeakerImageDesktop from "../../assets/home/desktop/image-speaker-zx7.jpg";
import { WindowSizeContext } from "../../context/windowSizeContext";

function SpecialProductsDisplayTwo() {
  const { useWindowSize, updateSize } = useContext(WindowSizeContext);
  const [width, height] = useWindowSize();

  const RenderSpeakerImage = () => {
    if (width < 640) {
      return (
        <img
          className="h-full w-full rounded-xl"
          src={SpeakerImageMobile}
          alt="HeroImage"
        />
      );
    } else if (width < 768) {
      return (
        <img
          className="h-full w-full rounded-xl"
          src={SpeakerImageTablet}
          alt="HeroImage"
        />
      );
    } else if (width < 1024) {
      return (
        <img
          className="h-full w-full rounded-xl"
          src={SpeakerImageTablet}
          alt="HeroImage"
        />
      );
    }
    return (
      <img
        className="h-full w-full"
        src={SpeakerImageDesktop}
        alt="HeroImage"
      />
    );
  };
  return (
    <div className="border z-50 relative rounded-xl h-[18rem] mb-12 md:mb-0 bg-[#F1F1F1]">
      <RenderSpeakerImage></RenderSpeakerImage>
      <div className="absolute top-[29%] left-[4%] xl:top-[33%] xl:left-[8%]  flex flex-col gap-5">
        <h1 className="text-3xl font-bold tracking-[0.20rem]">ZX7 SPEAKER</h1>
        <Button
          style={{
            backgroundColor: "transparent",
            borderRadius: "0px",
            width: "70%",
            borderColor: "black",
            color: "black",
          }}
          variant="contained"
          size="large"
          sx={{ border: 1 }}
        >
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
}

export default SpecialProductsDisplayTwo;
