import React from "react";
import ProductDetailsCard from "../../components/ProductDetailscard/ProductDetailsCard";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductBuyingPage = () => {
  const { data } = useSelector((state) => state.data);
  const { productName } = useParams();
  const selectedProduct = data.filter((items) => items.slug === productName);

  return (
    <div className="">
      <button className=" mt-7 p-6">Go Back</button>
      <section className="mt-1 p-6 flex flex-col justify-center items-center gap-">
        {selectedProduct.map((items) => (
          <ProductDetailsCard
            key={items.id}
            product={items}
          ></ProductDetailsCard>
        ))}
      </section>
    </div>
  );
};

export default ProductBuyingPage;
