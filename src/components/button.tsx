import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  text?: string;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
  iconBg?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  textColor,
  iconBg,
  className,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`group flex items-center gap-3 pl-8 pr-2 py-2 rounded-full transition-all shadow-xl  ${bgColor} ${textColor} ${className}`}
    >
      <span className="font-bold tracking-wide uppercase text-sm">{text}</span>

      <div
        className={`${iconBg} p-2 rounded-full text-white group-hover:rotate-45 transition-transform`}
      >
        <ArrowUpRight size={20} />
      </div>
    </motion.button>
  );
};

export default Button;
