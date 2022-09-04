import { ReactComponent as Circle } from "../../assets/home/desktop/pattern-circles.svg";
import SpecialProductSpeakerImage from "../../assets/home/desktop/image-speaker-zx9.png";
import { Button } from "@mui/material";

function SpecialProductsDisplayOne() {
  return (
    <div className="border relative rounded-xl bg-[#D87D4A] mb-12 h-[38rem]">
      <Circle className="translate-x-[-10rem]"></Circle>
      <img
        className="absolute bottom-0 left-[8rem] h-[29rem] w-[24rem]"
        src={SpecialProductSpeakerImage}
        alt="HeroImage"
      />
      <div className="text-6xl space-y-5 text-white font-extrabold absolute top-[28%] right-[10%] w-[20rem]">
        <div className="tracking-widest">
          <h1 className="">ZX9</h1>
          <h1 className="">SPEAKER</h1>
        </div>
        <p className="text-lg tracking-wider font-medium">
          Upgrade to premium speakers that are phenomenally built to deleiver
          truly remarkable sound
        </p>
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
  );
}

export default SpecialProductsDisplayOne;
