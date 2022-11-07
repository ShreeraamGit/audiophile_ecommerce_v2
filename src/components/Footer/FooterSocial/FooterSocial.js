import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

const FooterSocial = () => {
  return (
    <div className="text-white flex lg:flex-row lg:justify-between flex-col gap-4 justify-center items-center w-full">
      <p className="text-[15px]">Copyright 2022. All Rights Reserved</p>
      <div className="flex gap-4">
        <Icon w={35} h={35} as={AiFillFacebook}></Icon>
        <Icon w={35} h={35} as={AiOutlineTwitter}></Icon>
        <Icon w={35} h={35} as={AiOutlineInstagram}></Icon>
      </div>
    </div>
  );
};

export default FooterSocial;
