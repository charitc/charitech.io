import React, { useEffect } from "react";
import AOS from "aos";

import Nav from "../components/Nav";
import Illustration from "../partials/Illustration";
import Footer from "../components/Footer";

export default function DataPrivacy() {
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
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto">
                <article>
                  <header className="mb-8">
                    {/* Title and excerpt */}
                    <div className="text-center md:text-left">
                      <h1 className="h1 mb-4" data-aos="fade-up">
                        Data Privacy
                      </h1>
                      <p className="text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                      </p>
                    </div>
                  </header>
                  {/* Article content */}
                  <div className="text-lg text-gray-500">
                    <p className="mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis
                      scelerisque fermentum. Neque sodales ut etiam sit amet. malesuada proin libero nunc consequat interdum varius. Quam pellentesque nec nam aliquam
                      sem <strong className="font-medium text-gray-600">et tortor consequat</strong>. Pellentesque adipiscing commodo elit at imperdiet. Semper auctor
                      neque vitae tempus quam pellentesque nec. Amet dictum sit amet justo donec enim diam.{" "}
                      <strong className="font-medium text-gray-600">Varius sit amet mattis vulputate enim</strong> nulla aliquet porttitor. Odio pellentesque diam
                      volutpat commodo sed. Elit sed vulputate mi sit amet mauris commodo quis imperdiet.
                    </p>
                    <blockquote className="italic pl-4 border-l-2 border-gray-200 mb-8">
                      Greg Korshak, a journalist for the New York Times, reported that e-commerce audience will reach 380 million worldwide this year, comprising 250
                      dedicated fans and 215 occasional viewers. New York Times projected that the e-commerce industry would generate $905 million in revenue in 2020.
                    </blockquote>
                    <p className="mb-8">
                      Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi
                      blandit cursus risus.
                    </p>
                    <h3 className="h3 mb-4 text-gray-600">Challenges of designing for masses</h3>
                    <p className="mb-8">
                      Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Auctor urna nunc id cursus metus aliquam eleifend. Arcu dictum varius
                      duis at consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl
                      condimentum id venenatis a condimentum vitae sapien.
                    </p>
                    <h4 className="font-medium text-gray-600 mb-8">Here’s what we discovered:</h4>
                    <ul className="list-disc list-inside mb-8">
                      <li>Aenean sed adipiscing diam donec adipiscing tristique.</li>
                      <li>Urna nunc id cursus metus aliquam eleifend.</li>
                      <li>Arcu dictum varius duis at consectetur lorem donec massa sapien.</li>
                      <li>Sed risus ultricies tristique nulla aliquet.</li>
                    </ul>
                    <p className="mb-8">
                      Non nisi est sit amet facilisis magna etiam, aliquet porttitor lacus luctus accumsan tortor posuere. Habitasse platea dictumst quisque sagittis
                      purus sit amet volutpat consequat. Id velit ut tortor pretium viverra.
                    </p>
                    <p className="mb-8">
                      Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
                    </p>
                    <h4 className="h4 text-gray-600 mb-4">1. The quick brown fox jumped over the lazy dog.</h4>
                    <p className="mb-8">
                      Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                    </p>
                    <h4 className="h4 text-gray-600 mb-4">2. The quick brown fox jumped over the lazy dog.</h4>
                    <p className="mb-8">
                      Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                    </p>
                    <p className="mb-8">
                      Bibendum enim facilisis gravida neque convallis. Convallis posuere morbi leo urna molestie turpis in eu mi bibendum neque egestas. Est ante in{" "}
                      aliquam purus sit amet luctus vulputate sapien nec sagittis aliquam enim nec dui nunc mattis enim, sit amet nulla facilisi morbi tempus iaculis
                      urna id. Blandit cursus risus at ultrices mi tempus imperdiet nulla.
                    </p>
                    <h3 className="h3 mb-4 text-gray-600">Conclusions</h3>
                    <p className="mb-8">
                      Sapien nec sagittis aliquam malesuada orci sagittis eu volutpat odio facilisis mauris sit amet massa, consectetur adipiscing elit duis tristique
                      sollicitudin nibh sit amet commodo, purus viverra accumsan in nisl nisi scelerisque. Vel pharetra vel turpis nunc eget lorem malesuada bibendum
                      arcu vitae elementum curabitur vitae nunc sed velit. Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
