/* React */
import React, { useEffect } from "react";
/* Utilities */
import AOS from "aos";

import { NextSeo } from "next-seo";

/* Components */
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Features from "@/components/Features";
import TabFeatures from "@/components/Tabs";
import Targets from "@/components/Targets";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

/* Partials */
import Illustration from "@/partials/Illustration";

const url = "https://charitech.io";
const title = "charitech.io";
const description = "Make a virtue out of necessity and gain experience by shipping a real world projcet in a team for a non-profit organization.";

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
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />

      <div className="font-inter antialiased text-gray-800">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Nav />
          <main className="flex-grow">
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none">
              <Illustration />
            </div>
            <Hero />
            <Process />
            <Features />
            <TabFeatures />
            <Targets />
            <CTA />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
