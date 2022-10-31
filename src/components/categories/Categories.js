import React, { Fragment } from "react";
import CategorySpeaker from "../CategorySpeaker/CategorySpeaker";
import CategoryHeadphone from "../CatergoryHeadphones/CategoryHeadphone";
import CategoryEarphones from "../CategoryEarphones/CategoryEarphones";

const Categories = () => {
  return (
    <Fragment>
      <CategorySpeaker></CategorySpeaker>
      <CategoryHeadphone></CategoryHeadphone>
      <CategoryEarphones></CategoryEarphones>
    </Fragment>
  );
};

export default Categories;
