import Image from "next/image";

export default function Targets() {
  return (
    <section className="bg-linen-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">
              Created for developers, suited for every digital newcomer
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
                <Image src="/images/features-02-image.png" alt="Picture of the author" width={540} height={520} className="mx-auto md:max-w-none" />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-zomp-600 mb-2" data-aos="fade-left" data-aos-anchor="[data-aos-id-target]">
                    Be the change you want to see
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="200" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2">
                      <span className="text-zomp-400">.</span> For developers
                    </h4>
                    <p className="text-lg text-gray-500">
                      We created charitech.io for developers. Projects will always have a strong focus on creating a technical solution to a non-profit need.
                    </p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="400" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2">
                      <span className="text-zomp-400">.</span> For project managers
                    </h4>
                    <p className="text-lg text-gray-500">
                      As for every team, communication and coordination is a big productivity driver. Get your first experience with software projects in record time.
                    </p>
                  </div>
                  <div className="mt-6" data-aos="fade-left" data-aos-delay="600" data-aos-anchor="[data-aos-id-target]">
                    <h4 className="h4 mb-2">
                      <span className="text-zomp-400">.</span> For marketers
                    </h4>
                    <p className="text-lg text-gray-500">
                      You eat with your eyes, we're no expection here. As projects are mostly websites - jump in an take over the marketing for your team.
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
