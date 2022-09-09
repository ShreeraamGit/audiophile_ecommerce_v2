import Home from "./Routes/Home/Home";
import Headphones from "./Routes/Headphones/headPhones.jsx";
import Earphones from "./Routes/Earphones/earPhones.jsx";
import Speakers from "./Routes/Speakers/speakers.jsx";
import Navigation from "./Routes/Navigation/navigation";
import ProductPage from "./Routes/ProductPage/productPage";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "./context/productContext";
import { useContext } from "react";

function App() {
  const { products } = useContext(ProductContext);
  ///console.log(products);
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home />} />
        <Route
          path="speakers"
          element={<Speakers products={products}></Speakers>}
        >
          <Route
            path=":productId"
            element={<ProductPage products={products}></ProductPage>}
          >
            <Route
              path=":productId"
              element={<ProductPage products={products}></ProductPage>}
            ></Route>
          </Route>
        </Route>
        <Route
          path="earphones"
          element={<Earphones products={products}></Earphones>}
        >
          <Route
            path=":productId"
            element={<ProductPage products={products}></ProductPage>}
          >
            <Route
              path=":productId"
              element={<ProductPage products={products}></ProductPage>}
            ></Route>
          </Route>
        </Route>
        <Route
          path="headphones"
          element={<Headphones products={products}></Headphones>}
        >
          <Route
            path=":productId"
            element={<ProductPage products={products}></ProductPage>}
          >
            <Route
              path=":productId"
              element={<ProductPage products={products}></ProductPage>}
            ></Route>
          </Route>
        </Route>
        <Route path="checkout" element={<h1>Check out page</h1>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
