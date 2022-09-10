import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/productContext";
import { HerosectionProvider } from "./context/heroSectionContext.jsx";
import { CartProvider } from "./context/cartContext";
import { SignInProvider } from "./context/signInContext";
import ScrollToTop from "./components/scrollToTop/scrollToTop.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ProductsProvider>
        <HerosectionProvider>
          <CartProvider>
            <SignInProvider>
              <App />
            </SignInProvider>
          </CartProvider>
        </HerosectionProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
