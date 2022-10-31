import React from "react";

const ProductSummary = (props) => {
  const { product } = props;

  return (
    <div className=" flex flex-col gap-7">
      <h3 className="text-[32px] leading-[38px] tracking-[1.15px] font-medium w-[70%]">
        {product.name.toLocaleUpperCase()}
      </h3>
      <p className="text-[15px] leading-[25px] text-justify font-[300] text-[#000000]">
        {product.description}
      </p>
      <h5 className="text-[24px] font-bold tracking-[1.7px] ">
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "EUR",
        })}
      </h5>
    </div>
  );
};

export default ProductSummary;
