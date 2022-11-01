import React, { useEffect } from "react";
import PageName from "../../components/PageName/PageName.js";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { getPageName } from "../../features/pageName/pageNameSlice";
import ProductCard from "../../components/productCard/ProductCard.js";

const Earphones = () => {
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

  return (
    <div className="text-5xl">
      <Outlet></Outlet>
      <section className="">
        {productsList.map((items) => (
          <ProductCard
            pageName={pageName}
            key={items.id}
            productsList={items}
          ></ProductCard>
        ))}
      </section>
    </div>
  );
};

export default Earphones;
