function ProductDescription(props) {
  const { products } = props;
  return (
    <div className="mt-36 flex gap-20">
      <div className="w-[80%] mr-auto space-y-7">
        <h1 className="text-4xl font-semibold tracking-wide">FEATURES</h1>
        <p className="tracking-wide text-justify">{products.features}</p>
      </div>
      <div className="w-[40%]">
        <h1 className="text-4xl font-semibold tracking-wide">IN THE BOX</h1>
      </div>
    </div>
  );
}

export default ProductDescription;
