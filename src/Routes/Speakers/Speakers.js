import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import { getPageName } from "../../features/pageName/pageNameSlice";
import ProductCard from "../../components/productCard/ProductCard.js";

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

  return (
    <div className="">
      <section className="flex flex-col justify-center items-center gap-20">
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
};

export default Speakers;
