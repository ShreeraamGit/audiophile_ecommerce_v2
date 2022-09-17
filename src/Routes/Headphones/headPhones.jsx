import { useLocation, Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";
import About from "../../components/About/About";
import ProductsPreview from "../../components/ProductsPreview/productsPreview";
import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";

function Headphones(props) {
  const { pageStatus, setPageStatus } = useContext(HerosectionContext);
  const { products } = props;
  const location = useLocation();

  useEffect(() => {
    setPageStatus(location.pathname.slice(1));
  });

  const filteredProducts = products.filter(
    (items) => items.category === pageStatus
  );

  return (
    <div className="h-fit pr-5 pl-5">
      <div className="mt-44 mb-60 h-fit flex flex-col gap-44">
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

export default Headphones;
