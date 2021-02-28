import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/client";

import Link from "next/link";
import Image from "next/image";

import Dropdown from "../utils/Dropdown";
import Logo from "../partials/Logo";

export default function Nav() {
  const [session, loading] = useSession();

  // Navigation
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              {/* Logo */}
              <Link href="/">
                <a className="block" aria-label="Logo">
                  <Logo />
                </a>
              </Link>
            </div>
            {/* Desktop navigation */}
            <nav className="hidden md:flex md:flex-grow">
              {/* Desktop menu links */}
              <ul className="flex flex-grow justify-end flex-wrap items-center text-gray-800">
                <li>
                  <Link href="/process">
                    <a className="hover:text-zomp-700 px-4 py-2 flex items-center transition duration-150 ease-in-out">How it works</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <a className="hover:text-zomp-700 px-4 py-2 flex items-center transition duration-150 ease-in-out">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="hover:text-zomp-700 px-4 py-2 flex items-center transition duration-150 ease-in-out">FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-zomp-700 px-4 py-2 flex items-center transition duration-150 ease-in-out">Contact</a>
                  </Link>
                </li>
                {/* 1st level: hover */}
                {/* 
                <Dropdown title="Support">
                  <li>
                    <a className="font-medium text-sm text-gray-500 hover:text-gray-400 flex py-2 px-4 leading-tight" href="contact.html">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="font-medium text-sm text-gray-500 hover:text-gray-400 flex py-2 px-4 leading-tight" href="faq.html">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className="font-medium text-sm text-gray-500 hover:text-gray-400 flex py-2 px-4 leading-tight" href="404.html">
                      404
                    </a>
                  </li>
                </Dropdown>
                */}
              </ul>
              {/* Desktop sign in links */}
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                {!session && (
                  <>
                    <li>
                      <Link href="/signin ">
                        <a className="font-medium text-gray-800 hover:text-zomp-700 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/signup">
                        <a className="btn-sm text-white bg-plato-900 hover:bg-plato-800 ml-3">Sign up</a>
                      </Link>
                    </li>
                  </>
                )}
                {session && (
                  <>
                    <li>
                      <a className="font-medium text-gray-800 hover:text-zomp-700 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                        <button onClick={() => signOut()}>Sign out</button>
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </nav>
            {/* Mobile menu */}
            <div className="md:hidden">
              {/* Hamburger button */}
              <button
                className={`hamburger focus:outline-none ${mobileNavOpen && "active"}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6 fill-current text-gray-800 hover:text-gray-700 transition duration-150 ease-in-out"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </button>

              {/*Mobile navigation */}
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
              >
                <ul className="bg-plato-900 px-4 py-2 rounded-md shadow-2xl">
                  <li>
                    <Link href="/process">
                      <a className="flex font-medium text-white hover:text-linen-200 py-2">How it works</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="flex font-medium text-white hover:text-linen-200 py-2">Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a className="flex font-medium text-white hover:text-linen-200 py-2">FAQs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="flex font-medium text-white hover:text-linen-200 py-2">Contact</a>
                    </Link>
                  </li>
                  {/* 
                  <li className="py-2 my-2 border-t border-b border-gray-200">
                    <span className="flex text-gray-600 py-2 font-medium">Support</span>
                    <ul className="pl-4">
                      <li>
                        <Link href="/contact">
                          <a className="text-sm flex font-medium text-gray-500 hover:text-gray-200 py-2">Contact us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a className="text-sm flex font-medium text-gray-500 hover:text-gray-200 py-2">Help Center</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/404">
                          <a className="text-sm flex font-medium text-gray-500 hover:text-gray-200 py-2">404</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  */}
                  <li>
                    <Link href="/signin">
                      <a className="flex font-medium w-full text-coral-300 hover:text-coral-200 py-2 justify-center">Sign in</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup">
                      <a className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-plato-900 bg-coral-300 hover:bg-coral-200 transition duration-150 ease-in-out">
                        Sign up
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
