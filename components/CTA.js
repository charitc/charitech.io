import React, { useState, useEffect } from "react";
import CTAIllustration from "../partials/CTAIllustration";

export default function CTA() {
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
    const res = await fetch("/api/newsletter", {
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
    <section>
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6">
        {/* CTA box */}
        <div className="relative bg-plato-900 py-10 px-8 md:py-16 md:px-12 rounded-md" data-aos="fade-up">
          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <CTAIllustration />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-white text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" acceptCharset="UTF-8" onSubmit={handleOnSubmit}>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  id="email"
                  type="email"
                  className="cta_mail w-full appearance-none bg-coral-300 border border-linen-200 focus:border-linen-200 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-coral-300"
                  placeholder="Your email…"
                  aria-label="Your email…"
                  onChange={handleOnChange}
                  value={inputs.email}
                  required
                />

                <button className="btn text-plato-900 bg-coral-300 hover:bg-coral-200 shadow" onSubmit={handleOnSubmit} disabled={status.submitting}>
                  {!status.submitting ? (!status.submitted ? "Subscribe" : "Subscribed") : "Subscribing..."}
                </button>
              </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
