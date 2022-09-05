import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ProductsPreview(props) {
  const { products } = props;
  ///console.log(products);
  return (
    <div className="flex gap-28">
      <div className="w-[48%] h-[30rem]">
        <img
          className="border rounded-lg h-full w-full"
          src={products.image.desktop}
          alt="HeroImage"
        />
      </div>
      <div className="w-1/2">
        <div className="w-full h-full flex flex-col gap-7 justify-center">
          {products.new ? (
            <h4 className="tracking-[0.8rem] text-[#D87D4A]">NEW PRODUCT</h4>
          ) : (
            ""
          )}
          <h1 className="text-5xl font-semibold">
            {products.name.toUpperCase()}
          </h1>
          <p className="font-light tracking-wide">{products.description}</p>
          <Link to={`${products.id}`}>
            <Button
              style={{
                backgroundColor: "#D87D4A",
                borderRadius: "0px",
                width: "36%",
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
