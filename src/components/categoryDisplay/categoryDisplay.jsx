import { ReactComponent as RightArrow } from "../../assets/rightarrow.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";

function CategoryDisplay() {
  const { pageStatusHandler } = useContext(HerosectionContext);
  return (
    <div className="border mt-32 mb-32 flex justify-between">
      <div className="categorybox bg-[#F1F1F1] space-y-5 border w-[19rem] h-[14rem] flex flex-col justify-center items-center">
        <h1 className="font-extrabold tracking-widest">HEADPHONES</h1>
        <Link to="/headphones">
          <div className="flex justify-center items-center space-x-2">
            <span
              value="headphones"
              onClick={pageStatusHandler}
              className="text-md tracking-widest"
            >
              Shop
            </span>
            <RightArrow className="h-3 w-3"></RightArrow>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryDisplay;
