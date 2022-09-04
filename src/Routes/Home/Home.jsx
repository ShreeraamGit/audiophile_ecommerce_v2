import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";
import SpecialProductsDisplayOne from "../../components/specialProducts/specialProductsComponentOne";
import SpecialProductsDisplayTwo from "../../components/specialProducts/specialProductsComponentTwo";
import SpecialProductsDisplayThree from "../../components/specialProducts/specialProductsComponentThree";
import About from "../../components/About/About";

function Home() {
  return (
    <div className="h-fit mr-32 ml-32">
      <CategoryDisplay></CategoryDisplay>
      <SpecialProductsDisplayOne></SpecialProductsDisplayOne>
      <SpecialProductsDisplayTwo></SpecialProductsDisplayTwo>
      <SpecialProductsDisplayThree></SpecialProductsDisplayThree>
      <About></About>
    </div>
  );
}

export default Home;
