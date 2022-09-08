import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AddtoCartCountIncrease from "../addToCartCountIncreaseComponent/addToCartCountIncreaseComponent";

function ProductBuyingComponent(props) {
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
          <p className="font-light tracking-wider">{products.description}</p>
          <p className="font-semibold tracking-widest text-xl">
            {" "}
            {products.price.toLocaleString("en-US", {
              style: "currency",
              currency: "EUR",
            })}
          </p>
          <div className="flex gap-10">
            <AddtoCartCountIncrease></AddtoCartCountIncrease>
            <Button
              style={{
                backgroundColor: "#D87D4A",
                borderRadius: "0px",
              }}
              variant="contained"
              size="large"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBuyingComponent;
