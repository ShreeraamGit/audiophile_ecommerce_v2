import React from "react";
import CategorySpeaker from "../CategorySpeaker/CategorySpeaker";
import CategoryHeadphone from "../CatergoryHeadphones/CategoryHeadphone";
import CategoryEarphones from "../CategoryEarphones/CategoryEarphones";

const Categories = () => {
  return (
    <div className="flex flex-col gap-20">
      <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold text-center">
        CATEGORIES
      </h3>
      <div className="flex flex-col gap-20 md:flex-row md:gap-3">
        <CategorySpeaker></CategorySpeaker>
        <CategoryHeadphone></CategoryHeadphone>
        <CategoryEarphones></CategoryEarphones>
      </div>
    </div>
  );
};

export default Categories;
