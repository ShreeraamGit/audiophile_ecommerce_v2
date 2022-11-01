import React from "react";

const InTheBox = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col gap-7">
      <h3 className="text-[32px] leading-[38px] tracking-[1.15px] font-medium w-[70%]">
        IN THE BOX
      </h3>
      <div className="flex flex-col gap-4">
        {product.includes.map((items) => (
          <div
            key={items.item}
            className="flex justify-start items-center gap-10"
          >
            <span className="text-[#D87D4A] text-[18px] font-bold">
              {items.quantity}x
            </span>
            <p className="text-[15px] leading-[25px] text-justify font-medium text-[#000000]">
              {items.item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InTheBox;
