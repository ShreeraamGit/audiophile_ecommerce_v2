import React from "react";
import ProductDetailsCard from "../../components/ProductDetailscard/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TabletProductDetailsCard from "../../components/ProductDetailscard/TabletProductDetailsCard";
import DesktopProductDetailsCard from "../../components/ProductDetailscard/DesktopProductDetailsCard";
import { Fragment } from "react";

const ProductBuyingPage = () => {
  const { data } = useSelector((state) => state.data);
  const { productName } = useParams();
  const navigate = useNavigate();
  const selectedProduct = data.filter((items) => items.slug === productName);

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

  const renderProductDetailsCard = () => {
    if (isMobile) {
      return (
        <div className="">
          <button onClick={() => navigate(-1)} className=" mt-7 p-6">
            Go Back
          </button>
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
    } else if (isTablet) {
      return (
        <div className="p-10 flex flex-col justify-start items-start gap-14">
          <button onClick={() => navigate(-1)} className="mt-7 text-[1.5rem]">
            Go Back
          </button>
          <section className="mt-1 flex flex-col justify-center items-center gap-">
            {selectedProduct.map((items) => (
              <TabletProductDetailsCard
                key={items.id}
                product={items}
              ></TabletProductDetailsCard>
            ))}
          </section>
        </div>
      );
    } else if (isLaptop) {
      return <h1 className="">IS Laptop</h1>;
    } else if (isDesktop) {
      return (
        <div className="mt-20 flex flex-col justify-start items-start gap-14">
          <button onClick={() => navigate(-1)} className="mt-7 text-[1.5rem]">
            Go Back
          </button>
          <section className="mt-1 flex flex-col justify-center items-center gap-20">
            {selectedProduct.map((items) => (
              <DesktopProductDetailsCard
                key={items.id}
                product={items}
              ></DesktopProductDetailsCard>
            ))}
          </section>
        </div>
      );
    } else {
      return <h1 className="">IS LArge</h1>;
    }
  };

  return <Fragment>{renderProductDetailsCard()}</Fragment>;
};

export default ProductBuyingPage;
