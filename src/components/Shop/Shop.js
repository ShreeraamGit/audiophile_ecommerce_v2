import React, { Fragment } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Categories from "../categories/Categories";
import SpecialProducts from "../SpecialProducts/SpecialProducts";

const Shop = () => {
  return (
    <Fragment>
      <section className="categories-section h-fit w-full p-6 flex flex-col gap-24">
        <Categories></Categories>
      </section>
      <section className="h-fit w-full p-6 flex flex-col gap-7">
        <SpecialProducts></SpecialProducts>
      </section>
    </Fragment>
  );
};

export default Shop;
