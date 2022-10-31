import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="">
      <main className="">
        <div className="hero-section h-fit bg-[#101010] pt-7">
          <NavBar></NavBar>
          <HeroSection></HeroSection>
        </div>
        <div className="flex flex-col gap-20">
          <Outlet></Outlet>
          <section className="mt-0 h-fit w-full p-6">
            <About></About>
          </section>
        </div>
      </main>
      <footer className=" h-fit mt-24 w-full p-16 bg-[#000000] flex justify-center items-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
