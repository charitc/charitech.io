import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";

export default function TabFeatures() {
  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + "px";
    }
  };

  useEffect(() => {
    heightFix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-18 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">
              Ingridients for a successfull project with your team
            </h2>
            <p className="text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">
              In our projects you learn the skills you will need later in a professional environment
            </p>
          </div>

          {/* Section content */}
          <div>
            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-plato-900 rounded-full group transition duration-500 focus:outline-none focus:outline-none ${
                  tab !== 1 && "opacity-50"
                }`}
                onClick={() => setTab(1)}
              >
                <svg className="w-5 h-5 fill-current text-linen-300 mr-2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55.5 11C55.5 9.61929 54.3807 8.5 53 8.5C51.6193 8.5 50.5 9.61929 50.5 11V18.5C50.5 18.7761 50.2761 19 50 19L30 19C29.7239 19 29.5 18.7761 29.5 18.5V11C29.5 9.61929 28.3807 8.5 27 8.5C25.6193 8.5 24.5 9.61929 24.5 11V18.5C24.5 18.7761 24.2761 19 24 19H20C17.7909 19 16 20.7909 16 23L16 28.5L64 28.5V23C64 20.7909 62.2091 19 60 19H56C55.7239 19 55.5 18.7761 55.5 18.5V11ZM64 33.5L16 33.5L16 63C16 65.2091 17.7909 67 20 67H60C62.2091 67 64 65.2091 64 63V33.5Z"
                  />
                </svg>

                <span className="text-white group-hover:text-linen-200 transition-colors duration-150 ease-in-out">Planning</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-plato-900 rounded-full group transition duration-500 focus:outline-none ${
                  tab !== 2 && "opacity-50"
                }`}
                onClick={() => setTab(2)}
              >
                <svg className="w-5 h-5 fill-current text-linen-300 mr-2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25 12C17.8203 12 12 17.8203 12 25V43C12 49.8432 17.2876 55.4515 24 55.9621V68L40 56H55C62.1797 56 68 50.1797 68 43V25C68 17.8203 62.1797 12 55 12H25Z"
                  />
                  <path d="M24 55.9621H26C26 54.9164 25.1944 54.0472 24.1517 53.9679L24 55.9621ZM24 68H22C22 68.7575 22.428 69.4501 23.1056 69.7889C23.7831 70.1276 24.594 70.0545 25.2 69.6L24 68ZM40 56V54C39.5673 54 39.1462 54.1404 38.8 54.4L40 56ZM14 25C14 18.9249 18.9249 14 25 14V10C16.7157 10 10 16.7157 10 25H14ZM14 43V25H10V43H14ZM24.1517 53.9679C18.474 53.536 14 48.7895 14 43H10C10 50.897 16.1011 57.367 23.8483 57.9563L24.1517 53.9679ZM22 55.9621V68H26V55.9621H22ZM25.2 69.6L41.2 57.6L38.8 54.4L22.8 66.4L25.2 69.6ZM55 54H40V58H55V54ZM66 43C66 49.0751 61.0751 54 55 54V58C63.2843 58 70 51.2843 70 43H66ZM66 25V43H70V25H66ZM55 14C61.0751 14 66 18.9249 66 25H70C70 16.7157 63.2843 10 55 10V14ZM25 14H55V10H25V14Z" />
                </svg>
                <span className="text-white group-hover:text-linen-200 transition-colors duration-150 ease-in-out">Pair programming</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-plato-900 rounded-full group transition duration-500 focus:outline-none ${
                  tab !== 3 && "opacity-50"
                }`}
                onClick={() => setTab(3)}
              >
                <svg className="w-5 h-5 fill-current text-linen-300 mr-2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 20.7305C12 18.5213 13.7909 16.7305 16 16.7305H64C66.2091 16.7305 68 18.5213 68 20.7305V52.7305H47.874C46.0504 52.7305 44.4579 53.9638 44.0014 55.7289L44 55.7305H36L35.9986 55.729C35.5421 53.9638 33.9496 52.7305 32.126 52.7305H12V20.7305Z" />
                  <path d="M32.126 56.7305H4.15215C4.06812 56.7305 4 56.7986 4 56.8826C4 61.2169 7.51361 64.7305 11.8479 64.7305H68.1521C72.4864 64.7305 76 61.2169 76 56.8826C76 56.7986 75.9319 56.7305 75.8479 56.7305H47.874C47.4299 58.4557 45.8638 59.7305 44 59.7305H36C34.1362 59.7305 32.5701 58.4557 32.126 56.7305Z" />
                </svg>

                <span className="text-white group-hover:text-linen-200 transition-colors duration-150 ease-in-out">Weekly meetings</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-plato-900 rounded-full group transition duration-500 focus:outline-none ${
                  tab !== 4 && "opacity-50"
                }`}
                onClick={() => setTab(4)}
              >
                <svg className="w-5 h-5 fill-current text-linen-300 mr-2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M48.9423 48.1997C47.7707 47.0282 45.8712 47.0282 44.6996 48.1997C43.528 49.3713 43.528 51.2708 44.6996 52.4424L48.9423 48.1997ZM48.0323 51.5325L50.1537 49.4112L48.0323 51.5325ZM54.7499 67.75L51.7499 67.75L54.7499 67.75ZM51.7499 68.25C51.7499 69.9069 53.093 71.25 54.7499 71.25C56.4067 71.25 57.7499 69.9069 57.7499 68.25L51.7499 68.25ZM28.9081 21.8824C28.7051 20.2381 27.2075 19.0696 25.5631 19.2726C23.9187 19.4756 22.7503 20.9732 22.9533 22.6176L28.9081 21.8824ZM22.9566 22.6445C23.1613 24.2887 24.6601 25.4556 26.3043 25.2509C27.9484 25.0462 29.1153 23.5474 28.9106 21.9032L22.9566 22.6445ZM28.9121 21.9149C28.7065 20.2708 27.2071 19.1047 25.5631 19.3103C23.919 19.5159 22.7529 21.0153 22.9585 22.6593L28.9121 21.9149ZM30.5453 38.2874C31.7099 39.4659 33.6093 39.4771 34.7878 38.3125C35.9663 37.1478 35.9775 35.2484 34.8129 34.0699L30.5453 38.2874ZM44.6996 52.4424L45.911 53.6538L50.1537 49.4112L48.9423 48.1997L44.6996 52.4424ZM51.7499 67.75L51.7499 68.25L57.7499 68.25L57.7499 67.75L51.7499 67.75ZM45.911 53.6538C49.6496 57.3923 51.7499 62.4629 51.7499 67.75L57.7499 67.75C57.7499 60.8716 55.0174 54.2749 50.1537 49.4112L45.911 53.6538ZM22.9533 22.6176C22.9544 22.6265 22.9555 22.6355 22.9566 22.6445L28.9106 21.9032C28.9098 21.8964 28.9089 21.8894 28.9081 21.8824L22.9533 22.6176ZM22.9585 22.6593C23.6928 28.5326 26.3432 34.0354 30.5453 38.2874L34.8129 34.0699C31.5449 30.763 29.4833 26.4829 28.9121 21.9149L22.9585 22.6593Z" />
                  <path
                    d="M32.2145 22.25L19.2855 22.25C17.9808 22.25 17.3274 20.6726 18.25 19.75L23.6287 14.3713C24.8003 13.1997 26.6997 13.1997 27.8713 14.3713L33.25 19.75C34.1726 20.6726 33.5192 22.25 32.2145 22.25Z"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M47.2207 36.2794L45.0994 34.1581L47.2207 36.2794ZM31.9677 51.5325L29.8463 49.4112L31.9677 51.5325ZM25.2501 67.75L22.2501 67.75L25.2501 67.75ZM28.2501 68.25C28.2501 69.9069 26.907 71.25 25.2501 71.25C23.5933 71.25 22.2501 69.9069 22.2501 68.25L28.2501 68.25ZM51.0919 21.8825C51.2949 20.2381 52.7925 19.0696 54.4369 19.2726C56.0813 19.4756 57.2497 20.9732 57.0467 22.6175L51.0919 21.8825ZM57.0434 22.6445C56.8387 24.2887 55.3399 25.4556 53.6957 25.2509C52.0516 25.0462 50.8847 23.5474 51.0894 21.9032L57.0434 22.6445ZM51.0879 21.9149C51.2935 20.2708 52.7929 19.1047 54.4369 19.3103C56.081 19.5159 57.2471 21.0153 57.0415 22.6593L51.0879 21.9149ZM49.342 38.4008L34.089 53.6538L29.8463 49.4112L45.0994 34.1581L49.342 38.4008ZM28.2501 67.75L28.2501 68.25L22.2501 68.25L22.2501 67.75L28.2501 67.75ZM34.089 53.6538C30.3504 57.3924 28.2501 62.4629 28.2501 67.75L22.2501 67.75C22.2501 60.8716 24.9826 54.2749 29.8463 49.4112L34.089 53.6538ZM57.0467 22.6175C57.0456 22.6265 57.0445 22.6355 57.0434 22.6445L51.0894 21.9032C51.0902 21.8964 51.0911 21.8894 51.0919 21.8825L57.0467 22.6175ZM57.0415 22.6593C56.3006 28.5849 53.6093 34.1334 49.342 38.4008L45.0994 34.1581C48.4183 30.8392 50.5116 26.5237 51.0879 21.9149L57.0415 22.6593Z" />
                  <path
                    d="M47.7855 22.25L60.7145 22.25C62.0192 22.25 62.6726 20.6726 61.75 19.75L56.3713 14.3713C55.1997 13.1997 53.3003 13.1997 52.1287 14.3713L46.75 19.75C45.8274 20.6726 46.4808 22.25 47.7855 22.25Z"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white group-hover:text-linen-200 transition-colors duration-150 ease-in-out">Workflows</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-plato-900 rounded-full group transition duration-500 focus:outline-none ${
                  tab !== 5 && "opacity-50"
                }`}
                onClick={() => setTab(5)}
              >
                <svg className="w-5 h-5 fill-current text-linen-300 mr-2" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M39 16.0007C39 15.2824 39.1201 14.6137 39.3369 14.0043L24.0004 14.0026C21.7911 14.0024 20 15.7933 20 18.0026L20 62.0022C20 64.2113 21.7909 66.0022 24 66.0022H56C58.2091 66.0022 60 64.2113 60 62.0022V34.6625C59.3897 34.8801 58.7197 35.0007 58 35.0007H48C43.0294 35.0007 39 30.9713 39 26.0007V16.0007Z" />
                  <path d="M45.4142 15.4142L58.5858 28.5858C59.1077 29.1077 58.738 30 58 30H48C45.7909 30 44 28.2091 44 26V16C44 15.262 44.8923 14.8924 45.4142 15.4142Z" />
                </svg>

                <span className="text-white group-hover:text-linen-200 transition-colors duration-150 ease-in-out">Certficate</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <Image src="/images/tabs-image-1.jpg" alt="Tab1" layout="fill" className="w-full h-full object-cover" />
                  </figure>
                  <div className="relative bg-plato-900 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2 text-white">Learn to plan a software project</h4>
                    <p className="text-lg text-white">
                      Following agilge methology, in your planning you will meet to set your sprint goal together. You will seperate the tasks into packages and
                      prioritize together. Talk about technical dependencies and assign the work within your team.
                    </p>
                    <Link href="/process">
                      <a className="btn-sm text-white bg-coral-300 hover:bg-coral-400 mt-6">
                        <span className="text-sm text-plato-900">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-plato-900 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <Image src="/images/tabs-image-2.jpg" alt="Tab2" layout="fill" className="w-full h-full object-cover" />
                  </figure>
                  <div className="relative bg-plato-900 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2 text-white">Get help, provide help</h4>
                    <p className="text-lg text-white">
                      Pair programming essantially means two people writing code on one machine. This means you can not only discuss different ways to solve a problem,
                      but also share your knowledge, reflect the problems you face and have a code review "on the go".
                    </p>
                    <Link href="/process">
                      <a className="btn-sm text-white bg-coral-300 hover:bg-coral-400 mt-6">
                        <span className="text-sm text-plato-900">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-plato-900 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <Image src="/images/tabs-image-3.jpg" alt="Tabs01" layout="fill" className="w-full h-full object-cover" />
                  </figure>
                  <div className="relative bg-plato-900 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2 text-white">Get your team up to date</h4>
                    <p className="text-lg text-white">
                      In weekly team meetings you can get updates on the progress of the project. Take a look at what your team has done and present your work. To
                      complete the project on time, keep an eye on the timeline. But don't worry: if you get stuck, you'll find a solution together.
                    </p>
                    <Link href="/process">
                      <a className="btn-sm text-white bg-coral-300 hover:bg-coral-400 mt-6">
                        <span className="text-sm text-plato-900">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-plato-900 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <Image src="/images/tabs-image-4.jpg" alt="Tab2" layout="fill" className="w-full h-full object-cover" />
                  </figure>
                  <div className="relative bg-plato-900 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2 text-white">Learn to work with modern workflows</h4>
                    <p className="text-lg text-white">
                      It's important to have a good workflow when it comes to code collaboration. Learn to use git version control with your team to seemlesly work
                      together in one project. You will learn to work with "branches" and "pull requests" in order to work on a feature independently.
                    </p>
                    <Link href="/process">
                      <a className="btn-sm text-white bg-coral-300 hover:bg-coral-400 mt-6">
                        <span className="text-sm text-plato-900">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-plato-900 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <Image src="/images/tabs-image-5.jpg" alt="Tab1" layout="fill" className="w-full h-full object-cover" />
                  </figure>
                  <div className="relative bg-plato-900 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2 text-white">Earn your certificate</h4>
                    <p className="text-lg text-white">
                      After you completed your project, we will provide you with a professional certificate stating details of your project, your goal as well as the
                      organization you've worked for. As you will work on a real world project, you are of course allow to include the project into your personal
                      portfolio.
                    </p>
                    <Link href="/process">
                      <a className="btn-sm text-white bg-coral-300 hover:bg-coral-400 mt-6">
                        <span className="text-sm text-plato-900">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-plato-900 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
