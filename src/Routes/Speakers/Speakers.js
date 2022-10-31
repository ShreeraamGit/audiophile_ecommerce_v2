import React, { useEffect } from "react";
import PageName from "../../components/PageName/PageName.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, Outlet } from "react-router-dom";
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
      <Outlet></Outlet>
      <section className="mt-10 p-6 flex flex-col justify-center items-center gap-32">
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

export default Speakers;
