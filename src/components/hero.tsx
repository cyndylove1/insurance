import {
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Landmark,
  PieChart,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const floatingCards = [
    {
      id: 1,
      label: "Wealth Building",
      icon: <TrendingUp size={16} />,
      img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400",
      pos: "lg:top-10 lg:left-0",
      delay: 0,
    },
    {
      id: 2,
      label: "Credit Restoration",
      icon: <Zap size={16} />,
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
      pos: "lg:top-40 lg:left-20",
      delay: 0.2,
    },
    {
      id: 3,
      label: "Retirement Planning",
      icon: <ShieldCheck size={16} />,
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400",
      pos: "lg:top-0 lg:left-72",
      delay: 0.4,
    },
    {
      id: 4,
      label: "Business Funding",
      icon: <Landmark size={16} />,
      img: "https://images.unsplash.com/photo-1674104151261-fdade9ab2466?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGZ1bmRpbmd8ZW58MHx8MHx8fDA%3D",
      pos: "lg:top-24 lg:left-[24rem]",
      delay: 0.1,
    },
    {
      id: 5,
      label: "Strategic Planning",
      icon: <PieChart size={16} />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
      pos: "lg:top-4 lg:left-[38rem]",
      delay: 0.3,
    },
    {
      id: 6,
      label: "Leadership",
      icon: <Users size={16} />,
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
      pos: "lg:top-32 lg:left-[45rem]",
      delay: 0.5,
    },
  ];

  return (
    <div
      id="hero"
      className="min-h-screen font-sans text-white overflow-hidden bg-gradient-to-br from-[#581c87] via-[#3a2d9b] to-[#1e40af]"
    >
      {/* Hero Content */}
      <section className="text-center pt-32 md:pt-40 pb-12 md:px-4 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl md:max-w-4xl mx-auto font-black mb-8 leading-[1.1] tracking-tight">
            BUILDING <span className="text-white/40">WEALTH.</span>
            
            SECURING <span className="text-white/40">FUTURES.</span>
            
            CREATING <span className="text-white/40">LEGACY.</span>
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
      <section className="relative w-full flex justify-center pb-12 md:pb-32 md:pt-10">
        {/* Changed h-[500px] to h-auto on mobile, and kept fixed height only for lg screens */}
        <div className="flex lg:block overflow-x-auto lg:overflow-visible gap-6 py-6 lg:pb-0 no-scrollbar relative w-full max-w-[900px] h-auto lg:h-[500px]">
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: [0, -15, 0],
                opacity: 1,
              }}
              transition={{
                opacity: { duration: 1, delay: card.delay },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
              className={`flex-shrink-0 lg:absolute ${card.pos} group`}
            >
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.label}
                  className="w-40 h-52 md:w-44 md:h-56 object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] filter contrast-125 brightness-90 group-hover:brightness-110 transition duration-500 border border-white/10"
                />
                <div className="absolute -top-3 -right-4 md:-right-10 bg-white text-[#1e40af] shadow-2xl rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 border border-white/20 scale-90 group-hover:scale-100 transition-transform">
                  <div className="text-[#581c87]">{card.icon}</div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter whitespace-nowrap">
                    {card.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
