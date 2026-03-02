import React from "react";
import type { SocialLinksProps } from "../types";

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  const socialPlatforms = ["LinkedIn", "Facebook", "Instagram", "Twitter"];

  return (
    <div className={`mt-8 md:mt-12 ${className}`}>
      <p className="text-gray-400 text-sm mb-3">Follow us on:</p>
      <div className="flex gap-6">
        {socialPlatforms.map((platform) => (
          <a
            key={platform}
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
