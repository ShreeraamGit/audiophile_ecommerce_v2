import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { Fragment, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { SignInContext } from "../../context/signInContext";
import CartDropDownContainer from "../cartDropDownContainer/cartDropDownContainer";
import { signOutUserGoogle } from "../../utils/firebase/firebaseUtils.js";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { useState, useRef } from "react";

function Navbarwithlogo() {
  const { currentIconState, cartIconHandler, cartItems, useOutsideAlerter } =
    useContext(CartContext);
  const { isSignedIn, userName, userPhoto } = useContext(SignInContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className="xl:mr-32 xl:ml-32 pt-7 xl:pr-0 xl:pl-0 pr-5 pl-5 md:pr-12 md:pl-12 border-b border-[#D87D4A]">
      <nav className="flex justify-between items-center mb-5">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-10 w-10 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex tracking-[0.6rem] text-white flex-col items-center justify-between gap-20 underline underline-offset-8 md:text-2xl">
              <Link onClick={() => setIsNavOpen(false)} to="/headphones">
                <div className="">HEADPHONES</div>
              </Link>
              <Link onClick={() => setIsNavOpen(false)} to="/speakers">
                <div className="">SPEAKERS</div>
              </Link>
              <Link onClick={() => setIsNavOpen(false)} to="/earphones">
                <div className="">EARPHONES</div>
              </Link>
              {isSignedIn ? (
                <span className="cursor-pointer">
                  Hello {userName.split(" ")[0]} 👋🏻
                </span>
              ) : (
                <Link onClick={() => setIsNavOpen(false)} to="signin">
                  <span className="text-[#D87D4A] font-extrabold">
                    Hello SIGN-IN
                  </span>
                </Link>
              )}
            </ul>
          </div>
        </section>
        <div>
          <Link to="/">
            <Logo className="h-6"></Logo>
          </Link>
        </div>
        <div className="justify-center items-center text-white lg:flex lg:flex-row gap-10 hidden font-extrabold underline underline-offset-4">
          <Link onClick={() => setIsNavOpen(false)} to="/headphones">
            <div className="">HEADPHONES</div>
          </Link>
          <Link onClick={() => setIsNavOpen(false)} to="/speakers">
            <div className="">SPEAKERS</div>
          </Link>
          <Link onClick={() => setIsNavOpen(false)} to="/earphones">
            <div className="">EARPHONES</div>
          </Link>
          {isSignedIn ? (
            <Fragment>
              <span className="cursor-pointer">
                Hello {userName.split(" ")[0]} 👋🏻
              </span>
              <div className="border h-9 w-9 rounded-full">
                <img
                  className="h-full w-full rounded-full"
                  src={userPhoto}
                  alt="HeroImage"
                />
              </div>
            </Fragment>
          ) : (
            <Link onClick={() => setIsNavOpen(false)} to="signin">
              <span className="text-[#D87D4A]">Hello SIGN-IN</span>
            </Link>
          )}
        </div>
        <div
          ref={wrapperRef}
          className="h-14 relative flex justify-center items-center"
        >
          <Cart
            onClick={cartIconHandler}
            className="h-8 w-8 cursor-pointer"
          ></Cart>
          {currentIconState && <CartDropDownContainer></CartDropDownContainer>}
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #191919;
      }
    `}</style>
    </div>
  );
}

export default Navbarwithlogo;
