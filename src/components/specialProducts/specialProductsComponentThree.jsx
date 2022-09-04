import SpecialProductEarphoneImage from "../../assets/home/desktop/image-earphones-yx1.jpg";
import { Button } from "@mui/material";

function SpecialProductsDisplayThree() {
  return (
    <div className="mb-40 h-[19rem] flex gap-10">
      <div className="h-full w-1/2">
        <img
          className="h-full w-full border rounded-xl"
          src={SpecialProductEarphoneImage}
          alt="HeroImage"
        />
      </div>
      <div className="h-full w-1/2 border rounded-lg bg-[#F1F1F1] flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold tracking-[0.27rem]">
            YX1 EARPHONES
          </h1>
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
    </div>
  );
}

export default SpecialProductsDisplayThree;
