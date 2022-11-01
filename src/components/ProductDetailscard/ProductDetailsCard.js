import React from "react";
import ProductSummary from "../ProductSummary/ProductSummary";
import AddToCart from "../AddToCart/AddToCart";
import Features from "../Features/Features";
import InTheBox from "../InTheBox/InTheBox";
import ProductGallery from "../ProductGallery/ProductGallery";

const ProductDetailsCard = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col gap-24">
      <img
        className="rounded-xl"
        src={product.image.mobile}
        alt={product.name}
      ></img>
      <ProductSummary product={product}></ProductSummary>
      <Features product={product}></Features>
      <InTheBox product={product}></InTheBox>
      <ProductGallery product={product}></ProductGallery>
    </div>
  );
};

export default ProductDetailsCard;
