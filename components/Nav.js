import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [showDropdown, setShowdropdown] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowdropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);

  return (
    <div>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              {/* Logo */}
              <a className="block" href="index.html" aria-label="Cruip">
                <svg className="w-8 h-8 fill-current text-green-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                </svg>
              </a>
            </div>
            {/* Desktop navigation */}
            <nav className="hidden md:flex md:flex-grow">
              {/* Desktop menu links */}
              <ul className="flex flex-grow justify-end flex-wrap items-center text-gray-700">
                <li>
                  <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out" href="features.html">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out" href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out" href="about.html">
                    About us
                  </a>
                </li>
                {/* 1st level: hover */}
                <li className="relative" x-data="{ open: false }">
                  <a
                    className="hover:text-gray-500 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                    href="#0"
                    onClick={() => setShowdropdown((a) => !a)}
                  >
                    Support
                    <svg className="w-3 h-3 fill-current text-gray-500 cursor-pointer ml-1 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                    </svg>
                  </a>
                  {showDropdown && (
                    <ul className="origin-top-right absolute top-full right-0 w-40 bg-white shadow py-2 ml-4 rounded-sm">
                      <li>
                        <a className="font-medium text-sm text-gray-500 hover:text-green-600 flex py-2 px-4 leading-tight" href="contact.html">
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a className="font-medium text-sm text-gray-500 hover:text-green-600 flex py-2 px-4 leading-tight" href="help.html">
                          Help center
                        </a>
                      </li>
                      <li>
                        <a className="font-medium text-sm text-gray-500 hover:text-green-600 flex py-2 px-4 leading-tight" href="404.html">
                          404
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              {/* Desktop sign in links */}
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <a className="font-medium text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out" href="signin.html">
                    Sign in
                  </a>
                </li>
                <li>
                  <a className="btn-sm text-white bg-green-900 hover:bg-green-700 ml-3" href="signup.html">
                    Sign up
                  </a>
                </li>
              </ul>
            </nav>
            {/* Mobile menu */}
            <div className="md:hidden" x-data="{ expanded: false }">
              {/* Hamburger button */}
              <button className="hamburger">
                <span className="sr-only">Menu</span>
                <svg
                  className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y={4} width={24} height={2} rx={1} />
                  <rect y={11} width={24} height={2} rx={1} />
                  <rect y={18} width={24} height={2} rx={1} />
                </svg>
              </button>
              {/* Mobile navigation */}
              <nav
                id="mobile-nav"
                className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
                x-ref="mobileNav"
              >
                <ul className="bg-gray-800 px-4 py-2">
                  <li>
                    <a className="flex text-gray-300 hover:text-gray-200 py-2" href="features.html">
                      Features
                    </a>
                  </li>
                  <li>
                    <a className="flex text-gray-300 hover:text-gray-200 py-2" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="flex text-gray-300 hover:text-gray-200 py-2" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="flex text-gray-300 hover:text-gray-200 py-2" href="about.html">
                      About us
                    </a>
                  </li>
                  <li className="py-2 my-2 border-t border-b border-gray-700">
                    <span className="flex text-gray-300 py-2">Support</span>
                    <ul className="pl-4">
                      <li>
                        <a className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2" href="contact.html">
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2" href="help.html">
                          Help center
                        </a>
                      </li>
                      <li>
                        <a className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2" href="404.html">
                          404
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="flex font-medium w-full text-green-600 hover:text-gray-500 py-2 justify-center" href="signin.html">
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-700 transition duration-150 ease-in-out"
                    >
                      Sign up
                    </a>
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
