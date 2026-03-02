import about from "../../assets/insurance3.png";
export default function About() {
  return (
    <section id="about" className="relative bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto md:px-6 px-4 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT SIDE CONTENT */}
        <div>
          {/* Small Section Label */}
          <p className="text-sm font-semibold tracking-widest text-purple-700 mb-4 uppercase">
            About Us
          </p>

          <h2 className="text-xl md:text-4xl font-[500] max-w-lg text-gray-900 leading-tight mb-8">
            Building Strong Foundations for Lasting Wealth
          </h2>

          <div className="space-y-8">
            {/* Who We Are Card */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border-l-4 border-purple-700">
              <h3 className="text-lg font-[600] mb-2 text-gray-900">
                Who We Are
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                Eagle Leadership Development Inc is a financial development and
                empowerment firm focused on helping individuals and businesses
                build strong financial foundations. We believe financial success
                requires structure, strategy, and leadership.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <h3 className="text-lg font-[600] mb-2 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                To help families and entrepreneurs achieve financial
                independence through strategic planning, protection, and
                wealth-building systems.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border-l-4 border-purple-700">
              <h3 className="text-lg font-[600] mb-2 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                To become a trusted leader in financial empowerment, helping
                communities build sustainable wealth and lasting legacy.
              </p>
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
  );
}
