import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ProductsPreview(props) {
  const { products, index } = props;

  return (
    <div
      className={
        (index + 1) % 2 === 0
          ? "flex flex-col xl:flex-row-reverse xl:gap-16"
          : "flex flex-col xl:flex-row xl:gap-16 justify-center items-center"
      }
    >
      <div className="w-full h-[24rem] xl:h-full mb-14 xl:mb-0">
        <img
          className="border rounded-lg h-full w-full"
          src={products.image.desktop}
          alt="HeroImage"
        />
      </div>
      <div className="w-full text-center">
        <div className="w-full h-full flex flex-col gap-7 xl:gap-10 justify-center xl:text-left">
          {products.new ? (
            <h4 className="tracking-[0.8rem] text-[#D87D4A]">NEW PRODUCT</h4>
          ) : (
            ""
          )}
          <h1 className="text-5xl font-semibold">
            {products.name.toUpperCase()}
          </h1>
          <p className="font-light tracking-wide xl">{products.description}</p>
          <Link to={`${products.id}`}>
            <Button
              style={{
                backgroundColor: "#D87D4A",
                borderRadius: "0px",
                width: "50%",
                padding: "0.9rem",
              }}
              variant="contained"
              size="large"
            >
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsPreview;
