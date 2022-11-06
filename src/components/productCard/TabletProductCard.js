import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const TabletProductCard = (props) => {
  const { productsList } = props;
  return (
    <div className="p-10 mt-12 flex flex-col justify-center items-center gap-10">
      <img
        className="rounded-xl"
        alt={productsList.name}
        src={productsList.categoryImage.tablet}
      ></img>
      <div className="flex flex-col justify-center items-center gap-7">
        <span className="text-[14px] tracking-[10px] text-[#D87D4A]">
          {productsList.new ? "NEW PRODUCT" : null}
        </span>
        <h3 className="text-[40px] leading-[44px] tracking-[1.15px] font-bold w-[50%] text-center">
          {productsList.name.toLocaleUpperCase()}
        </h3>
        <p className="text-center w-[75%] text-[15px] leading-[25px] font-[300] text-[#000000]">
          {productsList.description}
        </p>
        <Link to={`${productsList.slug}`}>
          <Button type={"buttonOrange"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default TabletProductCard;
