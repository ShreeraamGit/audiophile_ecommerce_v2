import { useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { HerosectionContext } from "../../context/heroSectionContext";

function Headphones() {
  const { setPageStatus } = useContext(HerosectionContext);
  const location = useLocation();

  useEffect(() => {
    setPageStatus(location.pathname.slice(1));
  }, [location]);
  return (
    <div>
      <h1 className="text-5xl">I am the Headphones page</h1>
    </div>
  );
}

export default Headphones;
