import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import Categories from "../../components/categories/Categories";
import { useLocation } from "react-router-dom";

const Home = () => {
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
      <main className="flex flex-col justify-center items-center gap-20">
        {pathname === "/" ? null : <Outlet></Outlet>}
        <section className="categories-section h-fit w-full p-6 flex flex-col gap-24">
          <Categories></Categories>
        </section>
        {pathname === "/" ? <Outlet></Outlet> : null}
        <section className="mt-0 h-fit w-full p-6">
          <About></About>
        </section>
      </main>
      <footer className=" h-fit mt-24 w-full p-16 bg-[#000000] flex justify-center items-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
