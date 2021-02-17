import React, { useEffect } from "react";
import AOS from "aos";

import Nav from "../components/Nav";
import Illustration from "../partials/Illustration";

import ProcessHero from "../partials/ProcessHero";
import Stats from "../partials/Stats";
import ProcessZigZaq from "../partials/ProcessZiqZaq";
import IconBlock from "../partials/IconBlock";
import ProcessCTA from "../partials/ProcessCTA";
import Footer from "../components/Footer";

export default function Process() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden antialiased">
      {/*  Site header */}
      <Nav />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <Illustration />
        </div>

        {/*  Page sections */}
        <ProcessHero />
        <Stats />
        <ProcessZigZaq />
        <IconBlock />
        {/* <CaseStudies /> */}
        <ProcessCTA />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
