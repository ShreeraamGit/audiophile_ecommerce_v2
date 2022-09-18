import { ReactComponent as Goggle } from "../../assets/google-icon.svg";
import { ReactComponent as Apple } from "../../assets/apple.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { SignInContext } from "../../context/signInContext";
import { useContext } from "react";
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  SignOutUserGoogle,
} from "../../utils/firebase/firebaseUtils.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { setIsSignedIn, setUserName } = useContext(SignInContext);
  const nav = useNavigate();

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      setIsSignedIn(true);
      setUserName(
        response.user.displayName.charAt(0).toUpperCase() +
          response.user.displayName.slice(1)
      );
      nav("/");
    }
  };

  const logFacebookUser = async () => {
    const response = await signInWithFacebookPopup();
    if (response) {
      setIsSignedIn(true);
      setUserName(
        response.user.displayName.charAt(0).toUpperCase() +
          response.user.displayName.slice(1)
      );
      nav("/");
    }
  };

  return (
    <div className="h-[88vh] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">Sign In....</h1>
      </div>
      <div className="mt-[10%] flex flex-col gap-7">
        <button
          onClick={logGoogleUser}
          className="border tracking-wider cursor-pointer rounded-lg border-black p-4 h-fit w-[19rem] text-xl flex items-center"
        >
          <Goggle className="h-9 w-9 mr-auto"></Goggle>
          <span className="mr-auto font-bold">GOOGLE </span>
        </button>
        <button className="border tracking-wider  cursor-pointer rounded-lg border-black p-4 h-fit w-[19rem] text-xl flex items-center">
          <Apple className="h-9 w-9 mr-auto"></Apple>
          <span className="mr-auto font-bold">APPLE</span>
        </button>
        <button
          onClick={logFacebookUser}
          className="border tracking-wider cursor-pointer rounded-lg border-black p-4 h-fit w-[19rem] text-xl flex items-center"
        >
          <Facebook className="h-9 w-9 mr-auto"></Facebook>
          <span className="mr-auto font-bold">FACEBOOK</span>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
