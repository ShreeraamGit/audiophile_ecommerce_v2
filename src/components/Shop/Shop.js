import React, { Fragment } from "react";
import Categories from "../categories/Categories";
import SpecialProducts from "../SpecialProducts/SpecialProducts";
import About from "../About/About";

const Shop = () => {
  return (
    <Fragment>
      <section className="h-fit w-full p-6 flex flex-col gap-7">
        <SpecialProducts></SpecialProducts>
      </section>
    </Fragment>
  );
};

export default Shop;
