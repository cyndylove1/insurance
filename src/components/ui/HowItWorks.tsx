import { ItWorks } from "../constant";

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              How It Works
            </span>
            <h2 className="mt-4 md:text-4xl text-xl font[500] text-gray-900">
              A Clear Path to Financial Growth
            </h2>
            <p className="mt-4 text-gray-600 md:text-md text-sm max-w-2xl mx-auto">
              Our proven step-by-step process ensures clarity, strategy, and
              long-term financial success.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-blue-600/20"></div>

            <div className="grid lg:grid-cols-4 gap-6 relative">
              {ItWorks.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Number Circle */}
                  <div
                    className="mx-auto w-14 h-14 flex items-center justify-center 
                    rounded-full bg-white border-4 border-blue-600 
                    text-blue-600 font-bold text-xl shadow-md relative z-10"
                  >
                    {index + 1}
                  </div>

                  {/* Step Card */}
                  <div
                    className="h-[200px] bg-gray-100 transition-all duration-300 
                hover:shadow-2xl hover:scale-105  rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-lg md:py-4 pt-10 font-[500] text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-[13px] px-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
