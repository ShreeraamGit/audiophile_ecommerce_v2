import React from "react";
import TabletProductSummary from "../ProductSummary/TabletProductSummary";
import Features from "../Features/Features";
import TabletInTheBox from "../InTheBox/TabletInTheBox";
import TabletProductGalley from "../ProductGallery/TabletProductGalley";
import TabletYouMayAlsoLike from "../YouMayAlsoLike/TabletYouMayAlsoLike";

const TabletProductDetailsCard = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col gap-24">
      <div className="flex gap-10 justify-center items-center">
        <img
          className="rounded-xl w-[42%]"
          src={product.image.tablet}
          alt={product.name}
        ></img>
        <TabletProductSummary product={product}></TabletProductSummary>
      </div>
      <Features product={product}></Features>
      <TabletInTheBox product={product}></TabletInTheBox>
      <TabletProductGalley product={product}></TabletProductGalley>
      <TabletYouMayAlsoLike product={product}></TabletYouMayAlsoLike>
    </div>
  );
};

export default TabletProductDetailsCard;
