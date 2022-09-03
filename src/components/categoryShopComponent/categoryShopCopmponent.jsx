import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../assets/rightarrow.svg";

function CategoryShop() {
  return (
    <Fragment>
      <div className="flex justify-center items-center space-x-2">
        <span className="text-sm tracking-widest">SHOP</span>
        <RightArrow className="h-3 w-3"></RightArrow>
      </div>
    </Fragment>
  );
}

export default CategoryShop;
