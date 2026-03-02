import {
  FaGraduationCap,
  FaChartLine,
  FaShieldAlt,
  FaCreditCard,
  FaHome,
  FaPiggyBank,
  FaFileContract,
  FaBriefcase,
  FaTools,
  FaBuilding,
} from "react-icons/fa";


export type NavLinkType = {
  name: string;
  href: string;
  type: "scroll" | "route";
};

// Add `as const` or type assertion to preserve literal types
export const navLinks: NavLinkType[] = [
  { name: "Home", href: "#home", type: "scroll" },
  { name: "About Us", href: "#about", type: "scroll" },
  { name: "Why Us", href: "#why-us", type: "scroll" },
  { name: "Services", href: "#services", type: "scroll" },
  { name: "How It Works", href: "#how-it-works", type: "scroll" },
  { name: "Contact", href: "/contact", type: "route" },
] as const;

// why us section
export const benefits = [
  "Build sustainable wealth",
  "Protect your family’s future",
  "Improve your credit profile",
  "Access funding opportunities",
  "Reduce financial stress",
  "Create generational legacy plans",
];
 
export const core = [
  "College Education Funds",
  "Wealth Building Strategies",
  "Life Insurance Planning",
  "Debt Management",
  "Tax-Free Retirement Planning",
  "Estate & Legacy Planning",
  "Business Owner Strategies",
  "Credit Repair & Optimization",
  "Business Funding Solutions",
];

//  how it works section
export const ItWorks =[
  {
    title: "Free Consultation",
    description:
      "We assess your current financial position and long-term goals to understand where you stand.",
  },
  {
    title: "Strategic Plan",
    description:
      "We design a customized roadmap aligned with your financial needs and objectives.",
  },
  {
    title: "Implementation",
    description:
      "We guide you step-by-step through execution with structured professional support.",
  },
  {
    title: "Growth & Monitoring",
    description:
      "Continuous monitoring and adjustments ensure you remain on track toward success.",
  },
];
//  services section
  export const services = [
    {
      title: "College Education Funding",
      desc: "Structured savings and growth strategies designed to reduce financial pressure in the future.",
      icon: FaGraduationCap,
    },
    {
      title: "Wealth Building Strategies",
      desc: "Customized strategies focused on asset growth, financial stability, and long-term wealth creation.",
      icon: FaChartLine,
    },
    {
      title: "Life Insurance Solutions",
      desc: "Policies designed for protection, security, and financial growth.",
      icon: FaShieldAlt,
    },
    {
      title: "Debt Management",
      desc: "Strategic approaches to managing and reducing debt while rebuilding financial confidence.",
      icon: FaCreditCard,
    },
    {
      title: "Home-Based Income Opportunities",
      desc: "Programs designed to help individuals create additional income streams.",
      icon: FaHome,
    },
    {
      title: "Tax-Free Retirement Planning",
      desc: "Strategies that help reduce tax exposure while creating sustainable retirement income.",
      icon: FaPiggyBank,
    },
    {
      title: "Estate & Legacy Planning",
      desc: "Structured wealth transfer and protection strategies.",
      icon: FaFileContract,
    },
    {
      title: "Business Owner Strategies",
      desc: "Financial protection, succession planning, and growth strategies for entrepreneurs.",
      icon: FaBriefcase,
    },
    {
      title: "Credit Repair & Optimization",
      desc: "Improve creditworthiness, remove inaccurate negative items, and strengthen funding eligibility.",
      icon: FaTools,
    },
    {
      title: "Business Funding Solutions",
      desc: "Business credit development, funding readiness, and capital access planning.",
      icon: FaBuilding,
    },
  ];