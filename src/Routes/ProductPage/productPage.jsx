import { useParams } from "react-router-dom";
import ProductBuyingComponent from "../../components/productBuyingComponent/productBuyingComponent";
import ProductDescription from "../../components/productDecriptionComponent/productDescriptionComponent";

function ProductPage(props) {
  const { products } = props;
  const { productId } = useParams();

  const seletedProduct = products.find(
    (items) => items.id === Number(productId)
  );

  return (
    <div className="mt-28">
      <ProductBuyingComponent
        products={seletedProduct}
      ></ProductBuyingComponent>
      <ProductDescription products={seletedProduct}></ProductDescription>
    </div>
  );
}

export default ProductPage;
