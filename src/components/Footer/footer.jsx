import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookLogo } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <div className="h-fit bg-[#101010] text-white flex justify-center">
      <div className="xl:mr-32 xl:ml-32 flex flex-col gap-14 items-center mt-16">
        <Logo className="xl:mr-auto"></Logo>
        <div className="flex flex-col xl:flex-row-reverse xl:justify-start xl:items-start justify-center items-center gap-10 xl:gap-10 justify-end font-bold tracking-widest">
          <Link to="/">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className=""
            >
              HOME
            </div>
          </Link>
          <Link to="/headphones">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className=""
            >
              HEADPHONES
            </div>
          </Link>
          <Link to="/speakers">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className=""
            >
              SPEAKERS
            </div>
          </Link>
          <Link to="/earphones">
            <div
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className=""
            >
              EARPHONES
            </div>
          </Link>
          <div className="flex xl:text-left p-4 xl:p-0 flex-col gap-10 xl:justify-start xl:items-start xl:text-left justify-center items-center">
            <p className="tracking-wider text-center font-light xl:text-left">
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
        <div className="flex xl:ml-auto justify-end gap-5 xl:gap-10 mb-16">
          <FacebookLogo className=""></FacebookLogo>
          <TwitterLogo></TwitterLogo>
          <InstagramLogo></InstagramLogo>
        </div>
      </div>
    </div>
  );
}

export default Footer;
