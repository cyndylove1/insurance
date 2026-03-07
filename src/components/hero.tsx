import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingImage from "./ui/floatingImage";


const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen font-sans text-white overflow-hidden bg-gradient-to-br from-[#581c87] via-[#3a2d9b] to-[#1e40af]"
    >
      {/* Hero Content Section */}
      <section className="text-center pt-32 md:pt-40 pb-12 md:px-4 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl md:max-w-4xl mx-auto font-black mb-8 leading-[1.1] tracking-tight">
            BUILDING <span className="text-white/40">WEALTH.</span> SECURING{" "}
            <span className="text-white/40">FUTURES.</span> CREATING{" "}
            <span className="text-white/40">LEGACY.</span>
          </h1>

          <p className="text-white/70 text-sm md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-light md:px-4">
            At Eagle Leadership Development Inc, we help individuals, families,
            and business owners achieve financial clarity, protection, and
            growth through strategic planning and customized financial
            solutions.
          </p>

          <Link to="/contact">
            <button className="group bg-white text-[#1e40af] pl-6 md:pl-8 pr-2 py-2 rounded-full inline-flex items-center gap-4 font-bold hover:scale-105 transition-transform shadow-2xl">
              <span className="text-sm md:text-base">
                Get A Strategy Session
              </span>
              <div className="bg-[#1e40af] text-white rounded-full p-2 md:p-3 group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Floating Image Grid Section */}
      <FloatingImage/>
    </div>
  );
};

export default Hero;
