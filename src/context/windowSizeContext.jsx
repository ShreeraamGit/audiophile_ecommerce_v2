import { tab } from "@testing-library/user-event/dist/tab";
import { createContext, useState, useLayoutEffect } from "react";

export const WindowSizeContext = createContext({
  useWindowSize: () => {},
  mobile: "",
  tablet: "",
  desktop: "",
});

export const WindowSizeProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const value = {
    useWindowSize,
  };

  return (
    <WindowSizeContext.Provider value={value}>
      {children}
    </WindowSizeContext.Provider>
  );
};
