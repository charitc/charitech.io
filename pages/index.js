/* React */
import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
/* Next.js */
import Head from "next/head";
/* Utilities */
import AOS from "aos";

/* Components */
import Nav from "../components/Nav";
import Nav2 from "../components/Nav2";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Features from "../components/Features";
import TabFeatures from "../components/Tabs";
import Targets from "../components/Targets";
import CTA from "../components/CTA";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

/* Partials */
import Illustration from "../components/partials/Illustration";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <div className="font-inter antialiased bg-white text-gray-800">
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Nav2></Nav2>
        <main className="flex-grow">
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none">
            <Illustration></Illustration>
          </div>
          <Hero></Hero>
          <Process></Process>
          <Features></Features>
          <TabFeatures></TabFeatures>
          <Targets></Targets>
          <Projects></Projects>
          <CTA></CTA>
          <Footer></Footer>
        </main>
      </div>
    </div>
  );
}
