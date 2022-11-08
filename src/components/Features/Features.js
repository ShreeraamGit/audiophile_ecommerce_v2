import React, { Fragment } from "react";

const Features = (props) => {
  const { product } = props;
  const [firstLine, ...rest] = product.features.split("\n");
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold">
        FEATURES
      </h3>
      <p className="text-[15px] leading-[25px] text-justify font-[300] text-[#000000]">
        {firstLine}
        {rest.map((items) => (
          <Fragment>
            <br />
            {items}
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default Features;
