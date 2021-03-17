import Image from "next/image";

export default function Targets() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Created for developers who want to pursue a professional career
            </h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <Image src="/images/targets.png" alt="Picture of the author" width={540} height={520} className="mx-auto md:max-w-none" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-zomp-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">
                    The soft-skills that matter
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2">Collaborative working</h4>
                    <p className="text-lg text-gray-500">
                      Learn to work as a team, in a collaborative environment where your efforts to the team directly impact its sucess.
                    </p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2">Project management</h4>
                    <p className="text-lg text-gray-500">
                      Learn to plan a software project in a team. This means planning and constant communication to meet the deadline.
                    </p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2">Communication</h4>
                    <p className="text-lg text-gray-500">
                      Learn to communicate in a project envirmonts with providing feedback and communicate your ideas in a profession setting.
                    </p>
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
