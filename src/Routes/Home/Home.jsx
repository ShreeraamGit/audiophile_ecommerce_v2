import CategoryDisplay from "../../components/categoryDisplay/categoryDisplay";
import SpecialProductsDisplayOne from "../../components/specialProducts/specialProductsComponentOne";
import SpecialProductsDisplayTwo from "../../components/specialProducts/specialProductsComponentTwo";
import SpecialProductsDisplayThree from "../../components/specialProducts/specialProductsComponentThree";
import About from "../../components/About/About";

function Home() {
  return (
    <div className="h-fit mr-5 ml-5 md:mr-10 md:ml-10 xl:mr-32 xl:ml-32">
      <CategoryDisplay></CategoryDisplay>
      <div className="flex flex-col gap-10 mb-44 xl:mb-40 md:gap-6 h-full">
        <SpecialProductsDisplayOne></SpecialProductsDisplayOne>
        <SpecialProductsDisplayTwo></SpecialProductsDisplayTwo>
        <SpecialProductsDisplayThree></SpecialProductsDisplayThree>
      </div>
      <About></About>
    </div>
  );
}

export default Home;
