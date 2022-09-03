import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { HerosectionContext } from "../../context/heroSectionContext";

function Speaker() {
  const { setPageStatus } = useContext(HerosectionContext);
  const location = useLocation();

  useEffect(() => {
    setPageStatus(location.pathname.slice(1));
  }, [location]);

  return (
    <div>
      <h1 className="text-5xl">I am the Speaker page</h1>
    </div>
  );
}

export default Speaker;
