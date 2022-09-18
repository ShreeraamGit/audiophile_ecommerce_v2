function ProductDescription(props) {
  const { selectedproducts } = props;
  return (
    <div className="mt-28 flex flex-col xl:flex-row gap-20 xl:gap-32">
      <div className="w-full mr-auto space-y-7 xl:w-full">
        <h1 className="text-4xl font-semibold tracking-wide">FEATURES</h1>
        <p className="tracking-widest leading-7 text-justify">
          {selectedproducts.features}
        </p>
      </div>
      <div className="w-full space-y-6 xl:space-y-8 xl:w-[53%]">
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
