import CategoryHeadphoneImage from "../../assets/cart/image-xx59-headphones.jpg";
import AddtoCartCountIncrease from "../addToCartCountIncreaseComponent/addToCartCountIncreaseComponent";

function CartItemsComponent(props) {
  const { cartItems } = props;
  return (
    <div className="flex justify-between items-center gap-7">
      <img
        className="rounded-lg h-[5rem] w-[5rem]"
        src={cartItems.image.cart}
        alt={cartItems.name}
      />
      <div className="mr-auto flex flex-col justify-center items-center space-y-3">
        <h1 className="text-[1.45rem] font-bold">
          {cartItems.name.substring(0, cartItems.name.indexOf(" "))}
        </h1>
        <h1 className="mr-auto text-lg">$ {cartItems.price}</h1>
      </div>
      <AddtoCartCountIncrease cartItems={cartItems}></AddtoCartCountIncrease>
    </div>
  );
}

export default CartItemsComponent;
