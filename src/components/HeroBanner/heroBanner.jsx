import HomeHeroImage from "../../assets/home/desktop/image-hero.jpg";
import Button from "@mui/material/Button";

function HeroBanner() {
  return (
    <div className="relative">
      <img className="h-full w-full" src={HomeHeroImage} alt="HeroImage" />;
      <div className="absolute space-y-5 text-white bottom-1/4 mr-32 ml-32 w-[27rem]">
        <h3 className="tracking-[.8rem] text-[#F1F1F1]">NEW PRODUCT</h3>
        <h1 className="text-6xl tracking-[.2rem] font-extrabold">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-[#F1F1F1] text-lg tracking-[.05rem]">
          Expreience natural, lifelike audio and exceptional build quality made
          fir the passionate enthusiast
        </p>
        <Button className="" size="large" color="success" variant="contained">
          SEE PRODUCT
        </Button>
      </div>
    </div>
  );
}

export default HeroBanner;
