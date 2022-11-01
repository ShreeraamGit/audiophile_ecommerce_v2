import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = (props) => {
  const { productsList } = props;
  return (
    <div className="p-6 mt-12 flex flex-col justify-center items-center gap-10">
      <img
        className="rounded-xl"
        alt={productsList.name}
        src={productsList.image.mobile}
      ></img>
      <div className="flex flex-col justify-center items-center gap-7">
        <span className="text-[14px] tracking-[10px] text-[#D87D4A]">
          {productsList.new ? "NEW PRODUCT" : null}
        </span>
        <h3 className="text-[32px] leading-[38px] tracking-[1.15px] font-medium w-[70%] text-center">
          {productsList.name.toLocaleUpperCase()}
        </h3>
        <p className="text-center text-[15px] leading-[25px] font-[300] text-[#000000]">
          {productsList.description}
        </p>
        <Link to={`${productsList.slug}`}>
          <Button type={"buttonOrange"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
