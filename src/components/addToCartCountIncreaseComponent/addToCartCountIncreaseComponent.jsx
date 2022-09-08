import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

function AddtoCartCountIncrease(props) {
  const { items } = props;
  const { cartItems, handleClickIncrement, handleClickDecrement } =
    useContext(CartContext);
  console.log(cartItems);
  ///console.log(items);

  return (
    <div className="flex bg-[#F1F1F1] h-[3.35rem]">
      <button
        onClick={() => handleClickDecrement(cartItems, items.id)}
        className="pr-4 pl-4 pt-1 pb-1 text-xl flex justify-center items-center"
      >
        <span>-</span>
      </button>
      <span className="pr-4 pl-4 pt-1 pb-1  text-xl flex justify-center items-center">
        {items.quantity}
      </span>
      <button
        onClick={() => handleClickIncrement(cartItems, items.id)}
        className="pr-4 pl-4 pt-1 pb-1 text-xl  flex justify-center items-center"
      >
        +
      </button>
    </div>
  );
}

export default AddtoCartCountIncrease;
