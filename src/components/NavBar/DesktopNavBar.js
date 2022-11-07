import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const DesktopNavBar = () => {
  return (
    <nav className="nav-bar flex p-4 border-b justify-between items-center pr-24 pl-24">
      <Logo className=""></Logo>
      <div className="nav-items text-white flex gap-14">
        <Link to="/">
          <div className="">HOME</div>
        </Link>
        <Link to="headphones">
          <div className="">HEADPHONES</div>
        </Link>
        <Link to="speakers">
          <div className="">SPEAKERS</div>
        </Link>
        <Link to="earphones">
          <div className="">EARPHONES</div>
        </Link>
      </div>
      <Icon color="white" w={35} h={35} as={BsCart4}></Icon>
    </nav>
  );
};

export default DesktopNavBar;
