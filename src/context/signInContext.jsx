import { createContext, useState } from "react";

export const SignInContext = createContext({
  isSignedIn: "",
  setIsSignedIn: () => {},
  userName: "",
  setUserName: () => {},
});

export const SignInProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const signOutHandler = () => {
    setIsSignedIn(false);
  };

  const value = {
    isSignedIn,
    setIsSignedIn,
    userName,
    setUserName,
    signOutHandler,
  };
  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};
