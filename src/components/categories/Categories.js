import React, { Fragment } from "react";
import CategorySpeaker from "../CategorySpeaker/CategorySpeaker";
import CategoryHeadphone from "../CatergoryHeadphones/CategoryHeadphone";
import CategoryEarphones from "../CategoryEarphones/CategoryEarphones";

const Categories = () => {
  return (
    <div className="mt-32 flex flex-col gap-20">
      <CategorySpeaker></CategorySpeaker>
      <CategoryHeadphone></CategoryHeadphone>
      <CategoryEarphones></CategoryEarphones>
    </div>
  );
};

export default Categories;
