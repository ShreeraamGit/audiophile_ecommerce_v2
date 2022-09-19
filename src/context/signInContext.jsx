import { createContext, useState } from "react";

export const SignInContext = createContext({
  isSignedIn: "",
  setIsSignedIn: () => {},
  userName: "",
  setUserName: () => {},
  userPhoto: "",
  setUserPhoto: () => {},
});

export const SignInProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  const value = {
    isSignedIn,
    setIsSignedIn,
    userName,
    setUserName,
    userPhoto,
    setUserPhoto,
  };
  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};
