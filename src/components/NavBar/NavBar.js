import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-bar flex p-4 border-b justify-between items-center">
      <Icon color="white" w={35} h={35} as={BiMenuAltRight}></Icon>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <Icon color="white" w={35} h={35} as={BsCart4}></Icon>
    </nav>
  );
};

export default NavBar;
