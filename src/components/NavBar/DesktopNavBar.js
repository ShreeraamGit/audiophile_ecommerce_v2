import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const DesktopNavBar = () => {
  return (
    <nav className="nav-bar flex p-4 border-b justify-between items-center pr-24 pl-24">
      <Link to="/">
        <Logo className=""></Logo>
      </Link>
      <div className="nav-items text-white flex gap-14">
        <div className="">HOME</div>
        <div className="">HEADPHONES</div>
        <div className="">SPEAKERS</div>
        <div className="">EARPHONES</div>
      </div>
      <Icon color="white" w={35} h={35} as={BsCart4}></Icon>
    </nav>
  );
};

export default DesktopNavBar;
