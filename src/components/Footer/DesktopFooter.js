import React from "react";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import FooterNav from "./FooterNav/FooterNav";
import FooterAbout from "./FooterAbout/FooterAbout";
import FooterSocial from "./FooterSocial/FooterSocial";

const DesktopFooter = () => {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-between items-center">
        <Logo></Logo>
        <FooterNav></FooterNav>
      </div>
      <FooterAbout></FooterAbout>
      <FooterSocial></FooterSocial>
    </div>
  );
};

export default DesktopFooter;
