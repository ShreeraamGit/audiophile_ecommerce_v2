import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import { Icon } from "@chakra-ui/react";
import Button from "../Button/Button";

const AddToCart = () => {
  return (
    <div className="">
      <div className="flex justify-between lg:justify-start lg:gap-10">
        <div className="border w-[40%] lg:w-[30%] flex justify-evenly bg-[#F1F1F1] items-center">
          <Icon className="cursor-pointer" as={BiMinus} w={20} h={20}></Icon>
          <span className="text-[18px] font-bold">1</span>
          <Icon className="cursor-pointer" as={GrFormAdd} w={20} h={20}></Icon>
        </div>
        <div className="">
          <Button type={"addToCartButtonOrange"}></Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
