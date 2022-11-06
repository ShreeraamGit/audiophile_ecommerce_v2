import React from "react";
import TabletCategorySpeaker from "../CategorySpeaker/CategorySpeaker";
import TabletCategoryHeadphones from "../CatergoryHeadphones/CategoryHeadphone";
import TabletCategoryEarphones from "../CategoryEarphones/CategoryEarphones";

const TabletCategories = () => {
  return (
    <div className="flex flex-col gap-20">
      <h3 className="text-[24px] leading-[38px] tracking-[2px] font-bold text-center">
        CATEGORIES
      </h3>
      <div className="flex flex-col gap-20 md:flex-row md:gap-3">
        <TabletCategoryHeadphones></TabletCategoryHeadphones>
        <TabletCategorySpeaker></TabletCategorySpeaker>
        <TabletCategoryEarphones></TabletCategoryEarphones>
      </div>
    </div>
  );
};

export default TabletCategories;
