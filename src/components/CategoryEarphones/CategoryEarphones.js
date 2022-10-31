import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import HomeEarphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";

const CategoryEarphones = () => {
  return (
    <div className="bg-[#F1F1F1] relative w-full h-[13rem] flex justify-center items-end rounded-xl">
      <div className="flex flex-col gap-3 justify-center items-center p-5">
        <h6 className="font-bold text-[18px] tracking-[1.7px]">Earphones</h6>
        <Link to="earphones">
          <button className="text-[#101010] tracking-widest text-[18px]">
            {" "}
            SHOP{" "}
            <span className="">
              <Icon color="orange" as={AiOutlineRight}></Icon>
            </span>
          </button>
        </Link>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <img className="" src={HomeEarphones} alt="Categoryspeaker"></img>
      </div>
    </div>
  );
};

export default CategoryEarphones;
