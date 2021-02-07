import React from "react";
import Link from "next/link";

import Nav from "../components/Nav";
import Illustration from "../partials/Illustration";

export default function SignUp() {
  return (
    <section className="antialiased">
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">Welcome. We exist to make entrepreneurship easier.</h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <form>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3">
                        <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-700 w-full relative flex items-center py-1">
                          <svg className="w-10 h-10 fill-current text-white opacity-75  mx-4" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                          </svg>

                          <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                          <span className="flex-auto pl-16 pr-8 -ml-16">Sign up with GitHub</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="flex items-center my-6">
                    <div className="border-t border-gray-300 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                    <div className="text-gray-400">Or, register with your email</div>
                    <div className="border-t border-gray-700 border-dotted flex-grow ml-3" aria-hidden="true"></div>
                  </div>
                  <form>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="full-name">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input id="full-name" type="text" className="form-input w-full text-gray-300 focus:outline-none" placeholder="First and last name" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="company-name">
                          Company Name <span className="text-red-600">*</span>
                        </label>
                        <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                          Work Email <span className="text-red-600">*</span>
                        </label>
                        <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
                          Password <span className="text-red-600">*</span>
                        </label>
                        <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center">
                      I agree to be contacted by Open PRO about this offer as per the Open PRO{" "}
                      <Link href="/">
                        <a className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"> Privacy Policy</a>
                      </Link>
                      .
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                      </div>
                    </div>
                  </form>
                  <div className="text-gray-500 text-center mt-6">
                    Already using Open PRO?{" "}
                    <Link href="/signin">
                      <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}
