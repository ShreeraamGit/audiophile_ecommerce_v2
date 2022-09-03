import { Link } from "react-router-dom";
import CategoryHeadphoneImage from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import CategorySpeakerImage from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import CategoryEarphoneImage from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import CategoryShop from "../categoryShopComponent/categoryShopCopmponent";

function CategoryDisplay() {
  return (
    <div className="mt-48 mb-40 flex justify-between gap-8">
      <div className="categorybox relative bg-[#F1F1F1] rounded-md w-[23rem] h-[15rem] flex flex-col justify-center items-center">
        <img
          className="absolute top-0 left-1/5 translate-y-[-4rem] h-[15rem] w-[15rem]"
          src={CategoryHeadphoneImage}
          alt="HeroImage"
        />
        <div className="flex flex-col justify-center translate-y-14 items-center">
          <h1 className="font-extrabold tracking-widest text-xl">HEADPHONES</h1>
          <Link to="/headphones">
            <CategoryShop></CategoryShop>
          </Link>
        </div>
      </div>
      <div className="categorybox relative bg-[#F1F1F1] rounded-md w-[23rem] h-[15rem] flex flex-col justify-center items-center">
        <img
          className="absolute top-0 left-1/5 translate-y-[-4rem] h-[15rem] w-[15rem]"
          src={CategorySpeakerImage}
          alt="HeroImage"
        />
        <div className="flex flex-col justify-center translate-y-14 items-center">
          <h1 className="font-extrabold tracking-widest text-xl">SPEAKERS</h1>
          <Link to="/speakers">
            <CategoryShop></CategoryShop>
          </Link>
        </div>
      </div>
      <div className="categorybox relative bg-[#F1F1F1] rounded-md w-[23rem] h-[15rem] flex flex-col justify-center items-center">
        <img
          className="absolute top-0 left-1/5 translate-y-[-4rem] h-[14rem] w-[15rem]"
          src={CategoryEarphoneImage}
          alt="HeroImage"
        />
        <div className="flex flex-col justify-center translate-y-14 items-center">
          <h1 className="font-extrabold tracking-widest text-xl">EARPHONES</h1>
          <Link to="/earphones">
            <CategoryShop></CategoryShop>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryDisplay;
