import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookLogo } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <div className="h-fit bg-[#101010] text-white flex justify-center">
      <div className="flex flex-col gap-14 items-center mt-16">
        <Logo></Logo>
        <div className="flex flex-col justify-center items-center gap-10 justify-end font-bold tracking-widest">
          <Link to="/">
            <div className="">HOME</div>
          </Link>
          <Link to="/headphones">
            <div className="">HEADPHONES</div>
          </Link>
          <Link to="/speakers">
            <div className="">SPEAKERS</div>
          </Link>
          <Link to="/earphones">
            <div className="">EARPHONES</div>
          </Link>
          <div className="flex p-4 flex-col gap-10 justify-center items-center">
            <p className="tracking-wider text-center font-light">
              Audiophile is an all in one stop to fulfil your audio needs. We're
              a small team of music lovers and sound specialists who are devoted
              to helping you get the most out of personal audio. Come and visit
              our demo facility - we're open 7 days a week.
            </p>
            <h3 className="text-center font-light">
              Copyright ® 2022. All Rights Reserved{" "}
            </h3>
          </div>
        </div>
        <div className="flex justify-end gap-5 mb-16">
          <FacebookLogo className=""></FacebookLogo>
          <TwitterLogo></TwitterLogo>
          <InstagramLogo></InstagramLogo>
        </div>
      </div>
    </div>
  );
}

export default Footer;
