import React from "react";
import type { StatCardProps } from "../types";

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
