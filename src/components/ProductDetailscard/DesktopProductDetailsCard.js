import React from "react";
import TabletProductSummary from "../ProductSummary/TabletProductSummary";
import Features from "../Features/Features";
import DekstopInTheBox from "../InTheBox/DekstopInTheBox";
import DesktopProductGallery from "../ProductGallery/DesktopProductGallery";
import DesktopYouMayAlsoLike from "../YouMayAlsoLike/DesktopYouMayAlsoLike";

const DesktopProductDetailsCard = (props) => {
  const { product } = props;

  return (
    <div className="flex flex-col gap-24">
      <div className="flex gap-32 justify-center items-center">
        <img
          className="rounded-xl h-[29rem] w-[29rem]"
          src={product.image.desktop}
          alt={product.name}
        ></img>
        <TabletProductSummary product={product}></TabletProductSummary>
      </div>
      <div className="flex justify-between">
        <div className="w-[65%]">
          {" "}
          <Features product={product}></Features>
        </div>
        <div className="">
          <DekstopInTheBox product={product}></DekstopInTheBox>
        </div>
      </div>
      <DesktopProductGallery product={product}></DesktopProductGallery>
      <DesktopYouMayAlsoLike product={product}></DesktopYouMayAlsoLike>
    </div>
  );
};

export default DesktopProductDetailsCard;
