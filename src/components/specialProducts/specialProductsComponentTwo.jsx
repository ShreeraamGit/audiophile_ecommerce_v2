import SpecialProductSpeakerImage from "../../assets/home/desktop/image-speaker-zx7.jpg";
import { Button } from "@mui/material";

function SpecialProductsDisplayTwo() {
  return (
    <div className="border relative rounded-lg h-[19rem] mb-12 bg-[#F1F1F1]">
      <img
        className="h-full w-full rounded-lg"
        src={SpecialProductSpeakerImage}
        alt="HeroImage"
      />
      <div className="absolute top-[29%] left-[9%] flex flex-col gap-5">
        <h1 className="text-3xl font-bold tracking-[0.27rem]">ZX7 SPEAKER</h1>
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
