import Image from "next/image";

export default function Projects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Great projects that are waiting to be developed
            </h2>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">
              {/* 1st article */}
              <article className="flex flex-col h-fulls shadow-lg rounded-b-xl" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image
                        src="/images/news-01.jpg"
                        alt="News 01"
                        width={352}
                        height={198}
                        className="absolute inset-0 w-full h-full rounded-tl-xl rounded-tr-xl  object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                    </figure>
                  </a>
                </header>
                <content>
                  <div className="mx-4 mb-6">
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Product
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Engineering
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="font-bold text-xl tracking-wide mb-2">
                      <a className="hover:text-gray-600 transition duration-150 ease-in-out" href="blog-post.html">
                        HTML5 Landingpage with Marketing
                      </a>
                    </h3>

                    <p className="text-base text-gray-500 flex-grow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <footer className="flex items-center mt-4">
                      <div className="font-medium">
                        <a className=" hover:text-gray-700 transition duration-150 ease-in-out" href="#0">
                          Anastasia Dan
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 17, 2020</span>
                      </div>
                    </footer>
                  </div>
                </content>
              </article>

              {/* 2nd article */}
              <article className="flex flex-col h-fulls shadow-lg rounded-b-xl" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image
                        src="/images/news-01.jpg"
                        alt="News 01"
                        width={352}
                        height={198}
                        className="absolute inset-0 w-full h-full rounded-tl-xl rounded-tr-xl  object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                    </figure>
                  </a>
                </header>
                <content>
                  <div className="mx-4 mb-6">
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Product
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Engineering
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="font-bold text-xl tracking-wide mb-2">
                      <a className="hover:text-gray-600 transition duration-150 ease-in-out" href="blog-post.html">
                        HTML5 Landingpage with Marketing
                      </a>
                    </h3>

                    <p className="text-base text-gray-500 flex-grow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <footer className="flex items-center mt-4">
                      <div className="font-medium">
                        <a className=" hover:text-gray-700 transition duration-150 ease-in-out" href="#0">
                          Anastasia Dan
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 17, 2020</span>
                      </div>
                    </footer>
                  </div>
                </content>
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-fulls shadow-lg rounded-b-xl" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image
                        src="/images/news-01.jpg"
                        alt="News 01"
                        width={352}
                        height={198}
                        className="absolute inset-0 w-full h-full rounded-tl-xl rounded-tr-xl  object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                    </figure>
                  </a>
                </header>
                <content>
                  <div className="mx-4 mb-6">
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Product
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Engineering
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="font-bold text-xl tracking-wide mb-2">
                      <a className="hover:text-gray-600 transition duration-150 ease-in-out" href="blog-post.html">
                        HTML5 Landingpage with Marketing
                      </a>
                    </h3>

                    <p className="text-base text-gray-500 flex-grow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <footer className="flex items-center mt-4">
                      <div className="font-medium">
                        <a className=" hover:text-gray-700 transition duration-150 ease-in-out" href="#0">
                          Anastasia Dan
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 17, 2020</span>
                      </div>
                    </footer>
                  </div>
                </content>
              </article>
            </div>
          </div>
          {/* Second Article Row*/}
          <div className="max-w-sm mx-auto md:max-w-none mt-14">
            <div className="grid gap-12 md:grid-cols-3 md:col-gap-6 md:row-gap-8 items-start">
              {/* 1st article */}
              <article className="flex flex-col h-fulls shadow-lg rounded-b-xl" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image
                        src="/images/news-01.jpg"
                        alt="News 01"
                        width={352}
                        height={198}
                        className="absolute inset-0 w-full h-full rounded-tl-xl rounded-tr-xl  object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                    </figure>
                  </a>
                </header>
                <content>
                  <div className="mx-4 mb-6">
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Product
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Engineering
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="font-bold text-xl tracking-wide mb-2">
                      <a className="hover:text-gray-600 transition duration-150 ease-in-out" href="blog-post.html">
                        HTML5 Landingpage with Marketing
                      </a>
                    </h3>

                    <p className="text-base text-gray-500 flex-grow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <footer className="flex items-center mt-4">
                      <div className="font-medium">
                        <a className=" hover:text-gray-700 transition duration-150 ease-in-out" href="#0">
                          Anastasia Dan
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 17, 2020</span>
                      </div>
                    </footer>
                  </div>
                </content>
              </article>

              {/* 2nd article */}
              <article className="flex flex-col h-fulls shadow-lg rounded-b-xl" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image
                        src="/images/news-01.jpg"
                        alt="News 01"
                        width={352}
                        height={198}
                        className="absolute inset-0 w-full h-full rounded-tl-xl rounded-tr-xl  object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                    </figure>
                  </a>
                </header>
                <content>
                  <div className="mx-4 mb-6">
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Product
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Engineering
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="font-bold text-xl tracking-wide mb-2">
                      <a className="hover:text-gray-600 transition duration-150 ease-in-out" href="blog-post.html">
                        HTML5 Landingpage with Marketing
                      </a>
                    </h3>

                    <p className="text-base text-gray-500 flex-grow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <footer className="flex items-center mt-4">
                      <div className="font-medium">
                        <a className=" hover:text-gray-700 transition duration-150 ease-in-out" href="#0">
                          Anastasia Dan
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 17, 2020</span>
                      </div>
                    </footer>
                  </div>
                </content>
              </article>

              {/* 3rd article */}
              <article className="flex flex-col h-fulls shadow-lg rounded-b-xl" data-aos="fade-up">
                <header>
                  <a className="block mb-6" href="blog-post.html">
                    <figure className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image
                        src="/images/news-01.jpg"
                        alt="News 01"
                        width={352}
                        height={198}
                        className="absolute inset-0 w-full h-full rounded-tl-xl rounded-tr-xl  object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                    </figure>
                  </a>
                </header>
                <content>
                  <div className="mx-4 mb-6">
                    <div className="mb-3">
                      <ul className="flex flex-wrap text-xs font-medium -m-1">
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Product
                          </a>
                        </li>
                        <li className="m-1">
                          <a
                            className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                            href="#0"
                          >
                            Engineering
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="font-bold text-xl tracking-wide mb-2">
                      <a className="hover:text-gray-600 transition duration-150 ease-in-out" href="blog-post.html">
                        HTML5 Landingpage with Marketing
                      </a>
                    </h3>

                    <p className="text-base text-gray-500 flex-grow">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <footer className="flex items-center mt-4">
                      <div className="font-medium">
                        <a className=" hover:text-gray-700 transition duration-150 ease-in-out" href="#0">
                          Anastasia Dan
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">Jan 17, 2020</span>
                      </div>
                    </footer>
                  </div>
                </content>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
