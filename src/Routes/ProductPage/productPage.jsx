import { useParams } from "react-router-dom";
import ProductBuyingComponent from "../../components/productBuyingComponent/productBuyingComponent";
import ProductDescription from "../../components/productDecriptionComponent/productDescriptionComponent";
import Gallery from "../../components/gallery/gallery";
import MayAlsoLikeComponent from "../../components/mayalsolikecomponent/mayAlsoLikeComponent";

function ProductPage(props) {
  const { products } = props;
  const { productId } = useParams();

  const seletedProduct = products.find(
    (items) => items.id === Number(productId)
  );

  return (
    <div className="mt-0">
      <ProductBuyingComponent
        selectedproducts={seletedProduct}
      ></ProductBuyingComponent>
      <ProductDescription
        selectedproducts={seletedProduct}
      ></ProductDescription>
      <Gallery selectedproducts={seletedProduct}></Gallery>
      <MayAlsoLikeComponent
        selectedproducts={seletedProduct}
      ></MayAlsoLikeComponent>
    </div>
  );
}

export default ProductPage;
