import { useContext, useEffect } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";
import { useLocation, useParams } from "react-router-dom";

function ProductPage() {
  const { setPageStatus } = useContext(HerosectionContext);
  const location = useLocation();
  const product = useParams();
  console.log(product);

  useEffect(() => {
    setPageStatus(location.pathname.slice(1));
  }, [location]);

  return <h1 className="text-7xl text-center">I am the product page</h1>;
}

export default ProductPage;
