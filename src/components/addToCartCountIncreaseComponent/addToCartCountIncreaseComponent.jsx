function AddtoCartCountIncrease(props) {
  const { cartItems } = props;
  return (
    <div className="flex bg-[#F1F1F1] h-[3.35rem]">
      <button className="pr-4 pl-4 pt-1 pb-1 text-xl flex justify-center items-center">
        <span>-</span>
      </button>
      <span className="pr-4 pl-4 pt-1 pb-1  text-xl flex justify-center items-center">
        {cartItems.quantity}
      </span>
      <button className="pr-4 pl-4 pt-1 pb-1 text-xl  flex justify-center items-center">
        +
      </button>
    </div>
  );
}

export default AddtoCartCountIncrease;
