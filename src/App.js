import Home from "./Routes/Home/Home";
import Headphones from "./Routes/Headphones/headPhones.jsx";
import Earphones from "./Routes/Earphones/earPhones.jsx";
import Speakers from "./Routes/Speakers/speakers.jsx";
import Navigation from "./Routes/Navigation/navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigation></Navigation>}>
        <Route index element={<Home />} />
        <Route path="speakers" element={<Speakers></Speakers>}></Route>
        <Route path="earphones" element={<Earphones></Earphones>}></Route>
        <Route path="headphones" element={<Headphones></Headphones>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
