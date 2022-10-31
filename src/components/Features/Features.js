import React from "react";

const Features = (props) => {
  const { product } = props;

  return (
    <div className="mt-20 flex flex-col gap-5">
      <h3 className="text-[32px] leading-[38px] tracking-[1.15px] font-medium w-[70%]">
        FEATURES
      </h3>
      <p className="text-[15px] leading-[25px] text-justify font-[300] text-[#000000]">
        {product.features}
      </p>
    </div>
  );
};

export default Features;
