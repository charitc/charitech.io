export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <a className="inline-block" href="index.html" aria-label="Cruip">
                  <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg>
                </a>
              </div>
              <div className="text-gray-500">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-700 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Web Studio
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      DynamicBox Flex
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Programming Forms
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-700 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Nostrud exercitation
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Visual mockups
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Nostrud exercitation
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Visual mockups
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Nostrud exercitation
                    </a>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-700 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Consectetur adipiscing
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Labore et dolore
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Consectetur adipiscing
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Labore et dolore
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-500 hover:text-gray-400 transition duration-150 ease-in-out" href="#0">
                      Consectetur adipiscing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-400 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-400 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Github"
                >
                  <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-gray-800 bg-white hover:text-gray-400 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="DEV.to"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg" width="2500" height="2321">
                    <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-500 text-sm mr-4">&copy; 2021 charitech.io - All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
