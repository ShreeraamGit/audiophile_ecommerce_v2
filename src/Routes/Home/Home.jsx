import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";
import SpecialProductsDisplayOne from "../../components/specialProducts/specialProductsComponentOne";
import SpecialProductsDisplayTwo from "../../components/specialProducts/specialProductsComponentTwo";
import SpecialProductsDisplayThree from "../../components/specialProducts/specialProductsComponentThree";
import About from "../../components/About/About";

function Home() {
  return (
    <div className="h-fit mr-5 ml-5 xl:mr-32 xl:ml-32">
      <CategoryDisplay></CategoryDisplay>
      <div className="flex flex-col gap-8 mb-40 h-full">
        <SpecialProductsDisplayOne></SpecialProductsDisplayOne>
        <SpecialProductsDisplayTwo></SpecialProductsDisplayTwo>
        <SpecialProductsDisplayThree></SpecialProductsDisplayThree>
      </div>
      <About></About>
    </div>
  );
}

export default Home;
