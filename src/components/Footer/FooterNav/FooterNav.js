import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="text-white text-[18px] lg:flex-row tracking-[1.3px] font-semibold flex flex-col justify-center items-center gap-6">
      <Link to="/">
        <h6 className="">HOME</h6>
      </Link>
      <Link to="speakers">
        <h6 className="">SPEAKERS</h6>
      </Link>
      <Link to="headphones">
        {" "}
        <h6 className="">HEADPHONES</h6>
      </Link>
      <Link to="earphones">
        <h6 className="">EARPHONES</h6>
      </Link>
    </div>
  );
};

export default FooterNav;
