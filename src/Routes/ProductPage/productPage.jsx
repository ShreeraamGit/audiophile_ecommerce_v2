import { useParams, useLocation } from "react-router-dom";

function ProductPage() {
  let params = useParams();

  return (
    <h1 className="text-7xl text-center">
      I am the product page of {params.productId}
    </h1>
  );
}

export default ProductPage;
