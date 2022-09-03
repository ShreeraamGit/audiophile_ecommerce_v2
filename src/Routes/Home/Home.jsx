import { Fragment } from "react";
import { Outlet, useParams } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      <h1 className="border m-auto">Home page</h1>
    </Fragment>
  );
}

export default Home;
