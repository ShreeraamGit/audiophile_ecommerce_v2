import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";
import SpecialProductsDisplayOne from "../../components/specialProducts/specialProductsComponentOne";
import SpecialProductsDisplayTwo from "../../components/specialProducts/specialProductsComponentTwo";
function Home() {
  return (
    <div className="h-fit mr-32 ml-32">
      <CategoryDisplay></CategoryDisplay>
      <SpecialProductsDisplayOne></SpecialProductsDisplayOne>
      <SpecialProductsDisplayTwo></SpecialProductsDisplayTwo>
    </div>
  );
}

export default Home;
