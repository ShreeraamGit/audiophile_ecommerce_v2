import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

const FooterSocial = () => {
  return (
    <div className="text-white mt-10 flex gap-4">
      <Icon w={35} h={35} as={AiFillFacebook}></Icon>
      <Icon w={35} h={35} as={AiOutlineTwitter}></Icon>
      <Icon w={35} h={35} as={AiOutlineInstagram}></Icon>
    </div>
  );
};

export default FooterSocial;
