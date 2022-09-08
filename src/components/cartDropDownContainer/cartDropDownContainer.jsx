import CartItemsComponent from "../cartItemsComponent/cartItemsComponent";
import Button from "@mui/material/Button";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

function CartDropDownContainer() {
  const { cartItems, removeItemsFromCart, total } = useContext(CartContext);

  ///console.log(cartItems);

  return (
    <div className="pr-10 pl-10 z-50 text-[#101010] bg-[#FFFFFF] rounded-lg absolute top-[14%] right-[5%] h-fit w-[30.5rem]">
      <div className="flex justify-between mt-10">
        <h1 className="text-2xl font-bold">CART ({cartItems.length})</h1>
        <button
          onClick={() => {
            removeItemsFromCart();
          }}
          className="text-xl tracking-wide underline decoration-solid underline-offset-4 text-[#101010]"
        >
          <span>Remove all</span>
        </button>
      </div>
      <div className="mt-10 flex flex-col gap-7">
        {cartItems.map((items) => (
          <CartItemsComponent key={items.id} items={items}></CartItemsComponent>
        ))}
      </div>
      <div className="mt-10 mb-10 flex justify-between">
        <h1 className="text-xl tracking-widest">TOTAL</h1>
        <h1 className="text-2xl font-bold tracking-widest">
          {" "}
          {total.toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          })}
        </h1>
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
