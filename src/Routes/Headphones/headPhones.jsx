import { useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";
import About from "../../components/About/About";

function Headphones() {
  const { setPageStatus } = useContext(HerosectionContext);
  const location = useLocation();

  useEffect(() => {
    setPageStatus(location.pathname.slice(1));
  }, [location]);

  return (
    <div className="h-fit mr-32 ml-32">
      <h1 className="text-5xl">I am the Headphones page</h1>
      <About></About>
    </div>
  );
}

export default Headphones;
