import CategoryHeadphoneImage from "../../assets/cart/image-xx59-headphones.jpg";
import AddtoCartCountIncrease from "../addToCartCountIncreaseComponent/addToCartCountIncreaseComponent";

function CartItemsComponent() {
  return (
    <div className="flex justify-between items-center">
      <img
        className="h-[5rem] w-[5rem] rounded-lg"
        src={CategoryHeadphoneImage}
        alt="HeroImage"
      />
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-xl font-bold">XX99 MK II</h1>
        <h1 className="mr-auto">$ 2,999</h1>
      </div>
      <AddtoCartCountIncrease></AddtoCartCountIncrease>
    </div>
  );
}

export default CartItemsComponent;
