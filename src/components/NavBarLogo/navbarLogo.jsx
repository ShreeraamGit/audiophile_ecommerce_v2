import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Logo } from "../../assets/shared/desktop/logo.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { SignInContext } from "../../context/signInContext";
import CartDropDownContainer from "../cartDropDownContainer/cartDropDownContainer";

function Navbarwithlogo() {
  const { currentIconState, cartIconHandler } = useContext(CartContext);
  const { isSignedIn, userName, signOutHandler } = useContext(SignInContext);

  return (
    <div className="flex justify-between items-center mr-32 ml-32 nav-items border-b border-[#FBAF85] text-white ">
      <Link to="/">
        <Logo className="h-6"></Logo>
      </Link>
      <div className="nav-link text-lg flex gap-5 font-normal tracking-widest">
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
      <div className="font-bold underline underline-offset-8 text-md">
        {isSignedIn ? (
          <span onClick={signOutHandler} className="cursor-pointer">
            Hello {userName.split(" ")[0]} 👋🏻
          </span>
        ) : (
          <Link to="signin">
            <span>Hello SignIn</span>
          </Link>
        )}
      </div>
      <div className="relative w-[5rem] flex justify-center items-center">
        <Cart
          onClick={cartIconHandler}
          className="h-8 w-10 mb-5 mt-7 cursor-pointer"
        ></Cart>
        {currentIconState && <CartDropDownContainer></CartDropDownContainer>}
      </div>
    </div>
  );
}

export default Navbarwithlogo;
