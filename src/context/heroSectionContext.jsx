import { createContext, useState } from "react";

export const HerosectionContext = createContext({
  pageStatus: [],
  setPageStatus: () => {},
});

export const HerosectionProvider = ({ children }) => {
  const [pageStatus, setPageStatus] = useState();

  const pageStatusHandler = (event) => {
    setPageStatus(event.target.getAttribute("value"));
  };

  const value = { pageStatus, setPageStatus, pageStatusHandler };
  return (
    <HerosectionContext.Provider value={value}>
      {children}
    </HerosectionContext.Provider>
  );
};
