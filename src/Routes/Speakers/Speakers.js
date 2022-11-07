import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { getPageName } from "../../features/pageName/pageNameSlice";
import ProductCard from "../../components/productCard/ProductCard.js";
import TabletProductCard from "../../components/productCard/TabletProductCard";
import DesktopProductCard from "../../components/productCard/DesktopProductCard";
import { useMediaQuery } from "react-responsive";

const Speakers = () => {
  const { data } = useSelector((state) => state.data);
  const { pageName } = useSelector((state) => state.pageName);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPageName(location.pathname.slice(1)));
  });

  const productsList = data.filter(
    (items) => items.category === location.pathname.slice(1).toLocaleLowerCase()
  );

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

  const renderProductCard = () => {
    if (isMobile) {
      return (
        <div className="">
          <section className="flex flex-col justify-center items-center gap-10">
            {productsList.map((items) => (
              <ProductCard
                pageName={pageName}
                key={items.id}
                productsList={items}
              ></ProductCard>
            ))}
          </section>
          <Outlet></Outlet>
        </div>
      );
    } else if (isTablet) {
      return (
        <div className="">
          <section className="flex flex-col justify-center items-center gap-10">
            {productsList.map((items) => (
              <TabletProductCard
                pageName={pageName}
                key={items.id}
                productsList={items}
              ></TabletProductCard>
            ))}
          </section>
          <Outlet></Outlet>
        </div>
      );
    } else if (isLaptop) {
      return <h1 className="">IS Laptop</h1>;
    } else if (isDesktop) {
      return (
        <div className="">
          <section className="flex flex-col justify-center items-center gap-10">
            {productsList.map((items, index) => (
              <DesktopProductCard
                pageName={pageName}
                key={items.id}
                productsList={items}
                index={index}
              ></DesktopProductCard>
            ))}
          </section>
          <Outlet></Outlet>
        </div>
      );
    } else {
      return <h1 className="">IS LArge</h1>;
    }
  };

  return <div className="">{renderProductCard()}</div>;
};

export default Speakers;

/*<section className="flex flex-col justify-center items-center gap-10">
        {productsList.map((items) => (
          <ProductCard
            pageName={pageName}
            key={items.id}
            productsList={items}
          ></ProductCard>
        ))}
      </section>
      <Outlet></Outlet>*/
