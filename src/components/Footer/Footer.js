import React from "react";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import FooterNav from "./FooterNav/FooterNav";
import FooterAbout from "./FooterAbout/FooterAbout";
import FooterSocial from "./FooterSocial/FooterSocial";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Logo></Logo>
      <FooterNav></FooterNav>
      <FooterAbout></FooterAbout>
      <FooterSocial></FooterSocial>
    </div>
  );
};

export default Footer;
