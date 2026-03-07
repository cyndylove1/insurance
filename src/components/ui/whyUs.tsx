import { IoIosCheckmarkCircle } from "react-icons/io";
import whyUs from "../../assets/business-partners-shaking-hands-agreement.png";
import { benefits, core } from "../../components/constant";
export default function WhyUs() {
  return (
    <section className="w-full lg:py-20 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="relative mt-20 lg:mt-0">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-600 rounded-xl blur-3xl opacity-40 mt-[15rem]"></div>
            <img
              src={whyUs}
              alt="Financial Planning"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-sm font-semibold tracking-wider text-(--secondary) uppercase">
              Why Choose Us
            </span>

            <h2 className="mt-4 md:text-4xl text-xl font-[500] text-gray-900 leading-tight">
              Leadership. Structure. Financial Confidence.
            </h2>

            <p className="mt-6 text-gray-600 text-md leading-relaxed">
              Whether your goal is wealth building, credit restoration,
              retirement planning, or accessing business funding — we provide
              the leadership and structure needed to move forward with
              confidence.
            </p>

            {/* BENEFITS GRID */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 transition duration-300"
                >
                  <div className="text-(--secondary)">
                    <IoIosCheckmarkCircle />
                  </div>
                  <p className="text-gray-700 font-[400] text-[13px]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CORE SERVICES SECTION */}
        <div className="py-24">
          <div className="text-center mb-12">
            <h3 className="md:text-3xl text-xl font-[500] text-gray-900">
              Core Services Overview
            </h3>
            <div className="w-20 h-1 bg-(--secondary) mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {core.map((service, index) => (
              <div
                key={index}
                className="md:p-6 p-4 border border-(--secondary)/50 bg-gray-100 
                    rounded-2xl hover:shadow-xl 
                    hover:bg-(--secondary) hover:scale-105
                    transition-all duration-300 
                    cursor-pointer 
                    group"
              >
                <h4 className="font-[500] text-[15px] text-gray-800 group-hover:text-white transition-colors duration-300">
                  {service}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
