import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
// Import Swiper styles

const Hero = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1573163231162-717dfc4e046a?auto=format&fit=crop&w=300",
      label: "Strategy",
    },
    {
      src: "https://images.unsplash.com/photo-1591696208162-a977affd1743?auto=format&fit=crop&w=300",
      label: "Wealth",
    },
    {
      src: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=300",
      label: "Growth",
    },
    {
      src: "https://images.unsplash.com/photo-1454165833767-027ffec95c1a?auto=format&fit=crop&w=300",
      label: "Legacy",
    },
    {
      src: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=300",
      label: "Funding",
    },
    {
      src: "https://images.unsplash.com/photo-1521791136364-798a7bc0d267?auto=format&fit=crop&w=300",
      label: "Futures",
    },
  ];

  return (
    <section className="relative w-full min-h-screen pt-[7rem] pb-16 overflow-hidden main">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Heading */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter">
            BUILDING{" "}
            <span className="text-purple-300/60 uppercase">WEALTH.</span>
            <br />
            SECURING{" "}
            <span className="text-blue-300/60 uppercase">FUTURES.</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mt-2 italic">
            CREATING LEGACY.
          </h2>
        </div>

        {/* Description Text */}
        <div className="max-w-2xl px-6 text-center space-y-4 mb-10">
          <p className="text-gray-200 text-lg leading-relaxed">
            At{" "}
            <strong className="text-white">
              Eagle Leadership Development Inc
            </strong>
            , we help individuals, families, and business owners achieve
            financial clarity, protection, and growth.
          </p>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 bg-white text-purple-900 pl-8 pr-2 py-2 rounded-full transition-all shadow-xl mb-20"
        >
          <span className="font-bold tracking-wide uppercase text-sm">
            Get Started Now
          </span>
          <div className="bg-purple-900 p-2 rounded-full text-white group-hover:rotate-45 transition-transform">
            <ArrowUpRight size={20} />
          </div>
        </motion.button>

        {/* --- Swiper Image Slider --- */}
        <div className="w-full  relative mt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            speed={3000}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            autoplay={{
              disableOnInteraction: false,
            }}
            className=""
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="pb-10">
                <div className="relative group mx-2">
                  <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/20 aspect-[4/5] bg-gray-900">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Floating Label */}
                  {/* <div className="absolute -top-[1px] -right-2 bg-white px-3 py-1 rounded-full flex items-center gap-2 shadow-xl border border-purple-100">
                    <div className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-[8px] text-white">
                      ★
                    </div>
                    <span className="text-[10px] font-black text-gray-800 uppercase tracking-widest">
                      {img.label}
                    </span>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS for Linear Autoplay */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `,
        }}
      />
    </section>
  );
};

export default Hero;
