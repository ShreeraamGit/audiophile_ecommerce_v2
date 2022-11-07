import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Categories from "../../components/categories/Categories";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import { useLocation, Outlet } from "react-router-dom";

const MobileView = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      {pathname === "/" ? (
        <nav className="hero-section mb-20 h-fit bg-[#101010] pt-7">
          <NavBar></NavBar>
          <HeroSection></HeroSection>
        </nav>
      ) : (
        <nav className="hero-section h-fit bg-[#101010] pt-7">
          <NavBar></NavBar>
          <HeroSection></HeroSection>
        </nav>
      )}
      <main className="flex flex-col w-screen justify-center p-6 items-center gap-20">
        {pathname === "/" ? null : <Outlet></Outlet>}
        <section className="categories-section h-fit w-full flex flex-col">
          <Categories></Categories>
        </section>
        {pathname === "/" ? <Outlet></Outlet> : null}
        <section className="mt-0 h-fit w-full">
          <About></About>
        </section>
      </main>
      <footer className=" h-fit mt-24 w-full p-16 bg-[#000000] flex justify-center items-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MobileView;
