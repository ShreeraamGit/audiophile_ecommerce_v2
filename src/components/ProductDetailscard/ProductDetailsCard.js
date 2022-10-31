import React from "react";
import ProductSummary from "../ProductSummary/ProductSummary";
import AddToCart from "../AddToCart/AddToCart";
import Features from "../Features/Features";

const ProductDetailsCard = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col gap-7">
      <img
        className="rounded-xl"
        src={product.image.mobile}
        alt={product.name}
      ></img>
      <ProductSummary product={product}></ProductSummary>
      <AddToCart></AddToCart>
      <Features product={product}></Features>
    </div>
  );
};

export default ProductDetailsCard;
