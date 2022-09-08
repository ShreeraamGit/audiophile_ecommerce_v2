function ProductDescription(props) {
  const { selectedproducts } = props;
  return (
    <div className="mt-36 flex gap-20">
      <div className="w-[80%] mr-auto space-y-7">
        <h1 className="text-4xl font-semibold tracking-wide">FEATURES</h1>
        <p className="tracking-wide text-justify">
          {selectedproducts.features}
        </p>
      </div>
      <div className="w-[40%] space-y-6">
        <h1 className="text-4xl font-semibold tracking-wide">IN THE BOX</h1>
        {selectedproducts.includes.map((items) => (
          <div key={items.item} className="flex gap-10">
            <p className="text-[#D87D4A] text-xl font-bold">
              {items.quantity}x
            </p>
            <p className="text-lg tracking-widest">{items.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDescription;
