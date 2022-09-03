import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <h1 className="text-5xl">I am the Navigation page</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default Navigation;
