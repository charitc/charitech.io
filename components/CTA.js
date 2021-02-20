import CTAIllustration from "../partials/CTAIllustration";

export default function CTA() {
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
              <p className="text-linen-200 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none bg-coral-300 border border-linen-200 focus:border-linen-200 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-coral-300"
                  placeholder="Your email…"
                  aria-label="Your email…"
                />
                <a className="btn text-plato-900 bg-coral-300 hover:bg-coral-200 shadow" href="#0">
                  Subscribe
                </a>
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
