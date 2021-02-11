import Image from "next/image";

export default function Features() {
  return (
    <section className="bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative inline-flex flex-col">
                  <Image src="/images/git_flow_atom.png" alt="Features bg" width={500} height={381} className="md:max-w-none mx-auto rounded" />
                  <div className="md:max-w-none absolute w-full left-0 transform animate-float float-22">
                    <Image src="/images/features-home-element-01.png" alt="Element 01" width={500} height={147} />
                  </div>
                  <div className="md:max-w-none absolute w-full left-0 transform animate-float float-39">
                    <Image src="/images/features-home-element-02.png" alt="Element 01" width={500} height={158} />
                  </div>
                  <div className="md:max-w-none absolute w-full left-0 transform animate-float float-77">
                    <Image src="/images/features-home-element-03.png" alt="Element 01" width={500} height={167} />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right" data-aos-anchor="[data-aos-id-features-home]">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Learn modern workflows</div>
                  <h3 className="h3 mb-3">Work with modern tools</h3>
                  <p className="text-xl text-gray-500 mb-4">
                    Learn to work in a team using industry standard workflows in project management, code contribution, remote work or pair programming.
                  </p>
                  <ul className="flex flex-wrap text-lg text-gray-500 -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Atlassian Jira</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Atlassian Confluence</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Github</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Slack</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>All services are synchronised</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                    <img className="rounded-full flex-shrink-0 mr-4" src="../images/features-avatar.jpg" width="40" height="40" alt="Features avatar" />
                    <div>
                      <blockquote className="text-gray-500 italic mb-3">
                        "We believe this technology stack allows teams to work efficient and highly collaborative".
                      </blockquote>
                      <div className="text-gray-700 font-medium">
                        <cite className="text-gray-500 not-italic">Anastasia Dan</cite> -{" "}
                        <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">
                          UX Board
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
