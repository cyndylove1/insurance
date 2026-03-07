import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <section className="w-full py-24">
        <div className="cta relative overflow-hidden text-white">
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0"></div>
          <div
            className="relative z-10 px-8 py-16 lg:px-16 
              flex flex-col lg:flex-row 
              items-center justify-between gap-12"
          >
            {/* Text */}
            <div className="max-w-xl text-center lg:text-start">
              <h2 className="md:text-4xl text-xl font-[500] leading-tight">
                Protect What Matters Most
              </h2>
              <p className="mt-6 text-white/90 md:text-md text-sm font-[400] leading-relaxed">
                Get personalized insurance coverage designed to safeguard your
                family, assets, and future. Speak with a licensed advisor today
                and gain lasting peace of mind.
              </p>
            </div>

            {/* Buttons */}
            <Link to="/contact">
              <button className="px-10 py-2 rounded-full font-bold text-sm transition-all duration-500 bg-white text-[#581c87] hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
