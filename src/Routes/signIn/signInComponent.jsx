import { ReactComponent as Goggle } from "../../assets/google-icon.svg";
import { ReactComponent as Apple } from "../../assets/apple.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { SignInContext } from "../../context/signInContext";
import { useContext } from "react";
import { async } from "@firebase/util";
import { signInWithGooglePopup } from "../../utils/firebase/firebaseUtils.js";
import App from "../../App.js";

function SignIn() {
  const { setIsSignedIn, setUserName } = useContext(SignInContext);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      setIsSignedIn(true);
      setUserName(response.user.displayName.toUpperCase());
    }
  };

  return (
    <div className="h-[88vh] mr-32 ml-32 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl">Sign In....</h1>
      </div>
      <div className="mt-[5%] flex flex-col gap-10">
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
        <button className="border tracking-wider cursor-pointer rounded-lg border-black p-4 h-fit w-[19rem] text-xl flex items-center">
          <Facebook className="h-9 w-9 mr-auto"></Facebook>
          <span className="mr-auto font-bold">FACEBOOK</span>
        </button>
      </div>
    </div>
  );
}

export default SignIn;
