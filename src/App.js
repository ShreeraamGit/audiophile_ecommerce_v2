import { Routes, Route } from "react-router-dom";
import Home from "./Routes/home/Home";
import Shop from "./components/Shop/Shop";
import Speakers from "./Routes/Speakers/Speakers";
import Headphones from "./Routes/Headphones/Headphones";
import Earphones from "./Routes/Earphones/Earphones";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}>
        <Route index element={<Shop></Shop>}></Route>
        <Route path="speakers" element={<Speakers></Speakers>}></Route>
        <Route path="headphones" element={<Headphones></Headphones>}></Route>
        <Route path="earphones" element={<Earphones></Earphones>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
