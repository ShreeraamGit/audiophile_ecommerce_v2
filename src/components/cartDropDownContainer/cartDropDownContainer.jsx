import CartItemsComponent from "../cartItemsComponent/cartItemsComponent";
import Button from "@mui/material/Button";

function CartDropDownContainer() {
  return (
    <div className="pr-10 pl-10 z-50 text-[#101010] bg-[#FFFFFF] rounded-lg absolute top-[14%] right-[5%] h-fit w-[30.5rem]">
      <div className="flex justify-between mt-10">
        <h1 className="text-3xl font-bold">CART (3)</h1>
        <button className="text-xl tracking-wide underline decoration-solid underline-offset-8 text-[#101010]">
          Remove all
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-7">
        <CartItemsComponent></CartItemsComponent>
        <CartItemsComponent></CartItemsComponent>
        <CartItemsComponent></CartItemsComponent>
      </div>
      <div className="mt-10 mb-10 flex justify-between">
        <h1 className="text-xl tracking-widest">TOTAL</h1>
        <h1 className="text-2xl font-bold tracking-widest">$ 5,396</h1>
      </div>
      <div className="mt-10 mb-10">
        <Button
          style={{
            backgroundColor: "#D87D4A",
            borderRadius: "0px",
            width: "100%",
          }}
          variant="contained"
          size="large"
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
}

export default CartDropDownContainer;
