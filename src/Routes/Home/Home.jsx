import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";
import SpecialProductsDisplayOne from "../../components/specialProducts/specialProductsComponent";

function Home() {
  return (
    <div className="h-fit mr-32 ml-32">
      <CategoryDisplay></CategoryDisplay>
      <SpecialProductsDisplayOne></SpecialProductsDisplayOne>
    </div>
  );
}

export default Home;
