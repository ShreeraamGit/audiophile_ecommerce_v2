import React from "react";
import TabletNavBar from "../../components/NavBar/TabletNavBar";
import TabletHeroSection from "../../components/HeroSection/TabletHeroSection";
import TabletCategories from "../../components/categories/TabletCategories";
import TabletAbout from "../../components/About/TabletAbout";
import Footer from "../../components/Footer/Footer";
import { useLocation, Outlet } from "react-router-dom";

const LaptopView = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      {pathname === "/" ? (
        <nav className="hero-section mb-20 h-fit bg-[#101010] pt-7">
          <TabletNavBar></TabletNavBar>
          <TabletHeroSection></TabletHeroSection>
        </nav>
      ) : (
        <nav className="hero-section h-fit bg-[#101010] pt-7">
          <TabletNavBar></TabletNavBar>
          <TabletHeroSection></TabletHeroSection>
        </nav>
      )}
      <main className="flex flex-col w-screen justify-center items-center gap-20">
        {pathname === "/" ? null : <Outlet></Outlet>}
        <section className="categories-section h-fit w-full p-7 flex flex-col">
          <TabletCategories></TabletCategories>
        </section>
        {pathname === "/" ? <Outlet></Outlet> : null}
        <section className="mt-0 h-fit w-full p-6">
          <TabletAbout></TabletAbout>
        </section>
      </main>
      <footer className=" h-fit mt-24 w-full p-16 bg-[#000000] flex justify-center items-center">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default LaptopView;
