import { motion } from "framer-motion";
import { floatingCards } from "../constant";
export default function FloatingImage() {
  return (
    <section className="relative w-full flex justify-center pb-12 md:pb-32 md:pt-10">
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
              <div className="absolute -top-3 -right-4 md:-right-10 bg-white text-(--secondary) shadow-2xl rounded-full px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2 border border-white/20 scale-90 group-hover:scale-100 transition-transform">
                <div className="text-(--primary)">
                  <card.icon size={16} />
                </div>
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-tighter whitespace-nowrap">
                  {card.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
