import React, { Fragment } from "react";
import SpecialOne from "../SpeacialOne/SpecialOne";
import SpecialThree from "../SpecialThree/SpecialThree";
import SpecialTwo from "../SpecialTwo/SpecialTwo";
import TabletSpecialOne from "../SpeacialOne/TabletSpecialOne";
import TabletSpecialTwo from "../SpecialTwo/TabletSpecialTwo";
import TabletSpecialThree from "../SpecialThree/TabletSpecialThree";
import { useMediaQuery } from "react-responsive";

const SpecialProducts = () => {
  const isLaptop = useMediaQuery({
    query: "(max-width: 1280px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const isDesktop = useMediaQuery({
    query: "(max-width: 1536px)",
  });

  const renderView = () => {
    if (isMobile) {
      return (
        <Fragment>
          <SpecialOne></SpecialOne>
          <SpecialTwo></SpecialTwo>
          <SpecialThree></SpecialThree>
        </Fragment>
      );
    } else if (isTablet) {
      return (
        <Fragment>
          <TabletSpecialOne></TabletSpecialOne>
          <TabletSpecialTwo></TabletSpecialTwo>
          <TabletSpecialThree></TabletSpecialThree>
        </Fragment>
      );
    } else if (isLaptop) {
      return <h1 className="">Laptop Special Products</h1>;
    } else if (isDesktop) {
      return <h1 className="">Desktop Special Products</h1>;
    } else {
      return <h1 className="">Large Special Products</h1>;
    }
  };

  return <Fragment>{renderView()}</Fragment>;
};

export default SpecialProducts;
