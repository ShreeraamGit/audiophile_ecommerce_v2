import { useEffect, useContext } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { HerosectionContext } from "../../context/heroSectionContext";
import { ProductContext } from "../../context/productContext";
import About from "../../components/About/About";
import ProductsPreview from "../../components/ProductsPreview/productsPreview";
import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";

function Speaker(props) {
  const { products } = props;

  const { pageStatus, setPageStatus } = useContext(HerosectionContext);
  const location = useLocation();

  useEffect(() => {
    setPageStatus(location.pathname.slice(1));
  });

  const filteredProducts = products.filter(
    (items) => items.category === pageStatus
  );

  return (
    <div className="h-fit pr-5 pl-5 xl:mr-32 xl:ml-32">
      <div className="mt-44 mb-60 xl:mt-44 xl:mb-44 h-fit flex flex-col gap-44">
        {filteredProducts.map((items, index) => (
          <ProductsPreview
            key={items.id}
            index={index}
            products={items}
          ></ProductsPreview>
        ))}
        <Outlet></Outlet>
      </div>
      <CategoryDisplay></CategoryDisplay>
      <About></About>
    </div>
  );
}

export default Speaker;
