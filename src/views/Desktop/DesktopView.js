import React from "react";
import DesktopNavBar from "../../components/NavBar/DesktopNavBar";
import DesktopHeroSection from "../../components/HeroSectionImage/DesktopHeroSection";
import TabletCategories from "../../components/categories/TabletCategories";
import DesktopAbout from "../../components/About/DesktopAbout";
import DesktopFooter from "../../components/Footer/DesktopFooter";
import { useLocation, Outlet } from "react-router-dom";
const DesktopView = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      {pathname === "/" ? (
        <nav className="hero-section mb-20 h-fit bg-[#101010] pt-7">
          <DesktopNavBar></DesktopNavBar>
          <DesktopHeroSection></DesktopHeroSection>
        </nav>
      ) : (
        <nav className="hero-section h-fit bg-[#101010] pt-7">
          <DesktopNavBar></DesktopNavBar>
          <DesktopHeroSection></DesktopHeroSection>
        </nav>
      )}
      <main className="flex flex-col w-screen justify-center items-center gap-32 pr-24 pl-24">
        {pathname === "/" ? null : <Outlet></Outlet>}
        <section className="categories-section h-fit w-full flex flex-col">
          <TabletCategories></TabletCategories>
        </section>
        {pathname === "/" ? <Outlet></Outlet> : null}
        <section className="mt-0 h-fit w-full">
          <DesktopAbout></DesktopAbout>
        </section>
      </main>
      <footer className=" h-fit mt-24 w-full p-16 bg-[#000000]">
        <DesktopFooter></DesktopFooter>
      </footer>
    </div>
  );
};

export default DesktopView;
