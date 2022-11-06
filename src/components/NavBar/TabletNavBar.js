import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

const TabletNavBar = () => {
  return (
    <nav className="nav-bar flex p-7 border-b justify-between items-center">
      <div className="flex justify-center items-center gap-10">
        <Icon color="white" w={35} h={35} as={BiMenuAltRight}></Icon>
        <Link to="/">
          <Logo className="ml-auto"></Logo>
        </Link>
      </div>
      <Icon color="white" w={35} h={35} as={BsCart4}></Icon>
    </nav>
  );
};

export default TabletNavBar;
