import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const DesktopProductCard = (props) => {
  const { productsList, index } = props;
  return (
    <div
      className={
        (index + 1) % 2 === 0
          ? "p-6 mt-12 flex flex-row-reverse justify-center items-center gap-28"
          : "p-6 mt-12 flex justify-center items-center gap-28"
      }
    >
      <img
        className="rounded-xl h-[25rem] w-[40%]"
        alt={productsList.name}
        src={productsList.categoryImage.desktop}
      ></img>
      <div className="flex flex-col gap-9 w-[45%]">
        <span className="text-[14px] tracking-[10px] text-[#D87D4A]">
          {productsList.new ? "NEW PRODUCT" : null}
        </span>
        <h3 className="text-[40px] leading-[38px] tracking-[1.15px] font-bold ">
          {productsList.name.toLocaleUpperCase()}
        </h3>
        <p className="text-[15px] leading-[25px] font-[300] text-[#000000]">
          {productsList.description}
        </p>
        <Link to={`${productsList.slug}`}>
          <Button type={"buttonOrange"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default DesktopProductCard;
