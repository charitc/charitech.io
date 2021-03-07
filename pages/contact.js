import React, { useState, useEffect } from "react";
import AOS from "aos";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Illustration from "../partials/Illustration";
import ContactCTA from "../partials/ContactCTA";

export default function Contact() {
  {
    /* AOS */
  }
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <section className="bg-linen-200 antialiased">
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Nav />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page illustration */}
          <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
            <Illustration />
          </div>

          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <h1 className="h1 mb-4" data-aos="fade-up">
                    How can we help you?
                  </h1>
                  <p className="text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200">
                    We have custom plans to power your business. Tell us your needs, and we’ll contact you shortly.
                  </p>
                </div>

                {/* Contact form */}
                <form className="max-w-xl mx-auto" acceptCharset="UTF-8" onSubmit={handleOnSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                      <label className="block text-gray-900 text-sm font-medium mb-1" htmlFor="firstname">
                        First Name
                      </label>
                      <input
                        id="firstname"
                        type="text"
                        className="form-input w-full text-gray-300 border-red-500 focus:border-red-500"
                        placeholder="Enter your first name"
                        onChange={handleOnChange}
                        value={inputs.firstname}
                        required
                      />
                      {/*<p className="text-red-500 text-sm mt-2">This field is required</p>*/}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block text-gray-900 text-sm font-medium mb-1" htmlFor="lastname">
                        Last Name
                      </label>
                      <input
                        id="lastname"
                        type="text"
                        className="form-input w-full text-gray-300"
                        placeholder="Enter your last name"
                        onChange={handleOnChange}
                        value={inputs.lastname}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-900 text-sm font-medium mb-1" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-300"
                        placeholder="Enter your email address"
                        onChange={handleOnChange}
                        value={inputs.email}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-900 text-sm font-medium mb-1" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="form-input w-full text-gray-300"
                        placeholder="How can we help you?"
                        onChange={handleOnChange}
                        value={inputs.subject}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-900 text-sm font-medium mb-1" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="form-textarea w-full text-gray-800"
                        placeholder="Write your message"
                        onChange={handleOnChange}
                        value={inputs.message}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox" required />
                        <span className="text-gray-400 ml-2">I agree to the privacy policy</span>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-plato-900 hover:bg-platop-800 w-full" disabled={status.submitting}>
                        {!status.submitting ? (!status.submitted ? "Submit" : "Submitted") : "Submitting..."}
                      </button>
                    </div>
                  </div>
                </form>
                {status.info.error && (
                  <div className="max-w-xl mx-auto pt-12 relative">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3 mb-4 md:mb-0">
                        <div className="w-full bg-red-600 py-3 text-center rounded-md text-white" data-aos="fade-up" data-aos-delay="200">
                          Error: {status.info.msg}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {!status.info.error && status.info.msg && (
                  <div className="max-w-xl mx-auto pt-12 relative">
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3 mb-4 md:mb-0">
                        <div className="w-full bg-zomp-400 py-3 text-center rounded-md text-white success" data-aos="fade-up" data-aos-delay="200">
                          {status.info.msg}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/*  Bottom CTA */}
          <ContactCTA />
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </section>
  );
}
