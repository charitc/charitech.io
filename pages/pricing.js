import React, { useEffect } from "react";
import AOS from "aos";

import Nav from "../components/Nav";
import Illustration from "../components/partials/Illustration";
import Footer from "../components/Footer";

import PricingTable from "../components/partials/PricingTable";
import PricingFaq from "../components/partials/PricingFaq";
import PricingTestimonials from "../components/partials/PricingTestimonials";
import PricingCTA from "../components/partials/PricingCTA";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Nav />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <Illustration />
        </div>

        {/*  Page sections */}
        <PricingTable />
        <PricingFaq />
        <PricingTestimonials />
        <PricingCTA />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
