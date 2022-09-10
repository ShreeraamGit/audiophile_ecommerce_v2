import { createContext, useState } from "react";

export const SignInContext = createContext({
  isSignedIn: "",
  setIsSignedIn: () => {},
});

export const SignInProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const value = { isSignedIn, setIsSignedIn };
  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};
