import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="h-[25rem] border bg-[#101010] text-white flex">
      <div className="border text-white mr-32 ml-32 h-full w-1/2 space-y-5 flex flex-col justify-center">
        <Logo></Logo>
        <p className="tracking-wider">
          Audiophile is an all in one stop to fulfil your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>
        <h3>Copyright ® 2022. All Rights Reserved </h3>
      </div>
      <div className="border h-full w-1/2">
        <div className="flex flex-row justify-items-center border gap-10 font-extrabold">
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
      </div>
    </div>
  );
}

export default Footer;
