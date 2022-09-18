import AddtoCartCountIncrease from "../addToCartCountIncreaseComponent/addToCartCountIncreaseComponent";

function CartItemsComponent(props) {
  const { items } = props;
  return (
    <div className="flex justify-between items-center gap-4">
      <img
        className="rounded-full h-[5rem] w-[5rem]"
        src={items.image.cart}
        alt={items.name}
      />
      <div className="mr-auto flex flex-col justify-center items-center space-y-3">
        <h1 className="text-[1rem] font-bold mr-auto">
          {items.name.substring(0, items.name.indexOf(" "))}
        </h1>
        <h1 className="mr-auto text-sm">
          {" "}
          {items.price.toLocaleString("en-US", {
            style: "currency",
            currency: "EUR",
          })}
        </h1>
      </div>
      <AddtoCartCountIncrease items={items}></AddtoCartCountIncrease>
    </div>
  );
}

export default CartItemsComponent;
