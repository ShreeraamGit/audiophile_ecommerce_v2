import { Outlet, useParams } from "react-router-dom";

function Speaker() {
  const { speakers } = useParams();
  console.log(speakers);
  return (
    <div>
      <h1 className="text-5xl">I am the {speakers} page</h1>
    </div>
  );
}

export default Speaker;
