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

  const value = {
    isSignedIn,
    setIsSignedIn,
    userName,
    setUserName,
  };
  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};
