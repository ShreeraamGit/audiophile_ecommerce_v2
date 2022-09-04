import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookLogo } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as TwitterLogo } from "../../assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <div className="h-[25rem] gap-32 bg-[#101010] text-white flex">
      <div className="ml-32 w-1/2 flex flex-col space-y-10 justify-center">
        <Logo></Logo>
        <p className="tracking-wider">
          Audiophile is an all in one stop to fulfil your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <h3>Copyright ® 2022. All Rights Reserved </h3>
      </div>
      <div className="mr-32 w-1/2 flex flex-col justify-center space-y-48">
        <div className="flex gap-5 justify-end font-bold tracking-widest">
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
        </div>
        <div className="flex justify-end gap-5">
          <FacebookLogo className=""></FacebookLogo>
          <TwitterLogo></TwitterLogo>
          <InstagramLogo></InstagramLogo>
        </div>
      </div>
    </div>
  );
}

export default Footer;
