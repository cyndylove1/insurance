import about from "../../assets/insurance3.png";
export default function AboutUs() {
  return (
    <>
      <section className="relative bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto md:px-6 px-4 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            {/* Small Section Label */}
            <p className="text-sm font-semibold tracking-widest text-(--primary) mb-4 uppercase">
              About Us
            </p>

            <h2 className="text-xl md:text-4xl font-[500] max-w-lg text-gray-900 leading-tight mb-8">
              Building Strong Foundations for Lasting Wealth
            </h2>

            <div className="space-y-8">
              {/* Who We Are Card */}
              <div className="group relative overflow-hidden bg-white p-4 rounded-2xl shadow-lg border-l-4 border-(--primary) transition-all duration-500 hover:scale-105">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-(--primary) w-0 group-hover:w-full transition-all duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-[600] mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    Who We Are
                  </h3>

                  <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white transition-colors duration-300">
                    Eagle Leadership Development Inc is a financial development
                    and empowerment firm focused on helping individuals and
                    businesses build strong financial foundations. We believe
                    financial success requires structure, strategy, and
                    leadership.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative overflow-hidden bg-white p-4 rounded-2xl shadow-lg border-l-4 border-(--secondary) transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-(--secondary) w-0 group-hover:w-full transition-all duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-[600] mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    Our Mission
                  </h3>

                  <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white transition-colors duration-300">
                    To help families and entrepreneurs achieve financial
                    independence through strategic planning, protection, and
                    wealth-building systems.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative overflow-hidden bg-white p-4 rounded-2xl shadow-lg border-l-4 border-(--primary) transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-(--primary) w-0 group-hover:w-full transition-all duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-[600] mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">
                    Our Vision
                  </h3>

                  <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white transition-colors duration-300">
                    To become a trusted leader in financial empowerment, helping
                    communities build sustainable wealth and lasting legacy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95] via-[#312e81] to-[#1e3a8a] rounded-3xl blur-2xl opacity-20"></div>

            <img
              src={about}
              alt="Eagle Leadership Development"
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
