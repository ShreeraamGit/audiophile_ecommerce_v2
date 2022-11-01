import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/Home";
import Shop from "./components/Shop/Shop";
import Speakers from "./Routes/Speakers/Speakers";
import Headphones from "./Routes/Headphones/Headphones";
import Earphones from "./Routes/Earphones/Earphones";
import ProductBuyingPage from "./Routes/productBuyingPage/ProductBuyingPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWindowDimensions } from "./features/mediaQuery/MediaQuerySlice";

function App() {
  const dispatch = useDispatch();

  const { screenSize } = useSelector((state) => state.screenSize);
  useEffect(() => {
    function handleResize() {
      dispatch(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route index element={<Shop></Shop>}></Route>
        <Route path="speakers" element={<Speakers></Speakers>}>
          <Route
            path=":productName"
            element={<ProductBuyingPage></ProductBuyingPage>}
          >
            <Route
              path=":productName"
              element={<ProductBuyingPage></ProductBuyingPage>}
            ></Route>
          </Route>
        </Route>
        <Route path="headphones" element={<Headphones></Headphones>}>
          <Route
            path=":productName"
            element={<ProductBuyingPage></ProductBuyingPage>}
          >
            <Route
              path=":productName"
              element={<ProductBuyingPage></ProductBuyingPage>}
            ></Route>
          </Route>
        </Route>
        <Route path="earphones" element={<Earphones></Earphones>}>
          <Route
            path=":productName"
            element={<ProductBuyingPage></ProductBuyingPage>}
          >
            <Route
              path=":productName"
              element={<ProductBuyingPage></ProductBuyingPage>}
            ></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
