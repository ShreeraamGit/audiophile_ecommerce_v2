import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AddtoCartCountIncrease from "../addToCartCountIncreaseComponent/addToCartCountIncreaseComponent";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/productContext";

function ProductBuyingComponent(props) {
  const { addItemToCart } = useContext(CartContext);
  const { selectedproducts } = props;

  const addProductToCart = () => addItemToCart(selectedproducts);

  return (
    <div className="flex gap-28">
      <div className="w-[48%] h-[30rem]">
        <img
          className="border rounded-lg h-full w-full"
          src={selectedproducts.image.desktop}
          alt="HeroImage"
        />
      </div>
      <div className="w-1/2">
        <div className="w-full h-full flex flex-col gap-7 justify-center">
          {selectedproducts.new ? (
            <h4 className="tracking-[0.8rem] text-[#D87D4A]">NEW PRODUCT</h4>
          ) : (
            ""
          )}
          <h1 className="text-5xl font-semibold">
            {selectedproducts.name.toUpperCase()}
          </h1>
          <p className="font-light tracking-wider">
            {selectedproducts.description}
          </p>
          <p className="font-semibold tracking-widest text-xl">
            {" "}
            {selectedproducts.price.toLocaleString("en-US", {
              style: "currency",
              currency: "EUR",
            })}
          </p>
          <div className="flex gap-10">
            <Button
              onClick={addProductToCart}
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
