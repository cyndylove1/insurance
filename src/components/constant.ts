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
import { FaBolt, FaUniversity, FaUsers } from "react-icons/fa";
import { LuChartPie } from "react-icons/lu";


// hero floating cards
export const floatingCards = [
  {
    id: 1,
    label: "Wealth Building",
    icon: FaChartLine,
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400",
    pos: "lg:top-10 lg:left-0",
    delay: 0,
  },
  {
    id: 2,
    label: "Credit Restoration",
    icon: FaBolt,
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
    pos: "lg:top-40 lg:left-20",
    delay: 0.2,
  },
  {
    id: 3,
    label: "Retirement Planning",
    icon: FaShieldAlt,
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=400",
    pos: "lg:top-0 lg:left-72",
    delay: 0.4,
  },
  {
    id: 4,
    label: "Business Funding",
    icon: FaUniversity,
    img: "https://images.unsplash.com/photo-1674104151261-fdade9ab2466?w=600&auto=format&fit=crop&q=60",
    pos: "lg:top-24 lg:left-[24rem]",
    delay: 0.1,
  },
  {
    id: 5,
    label: "Strategic Planning",
    icon: LuChartPie,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
    pos: "lg:top-4 lg:left-[38rem]",
    delay: 0.3,
  },
  {
    id: 6,
    label: "Leadership",
    icon: FaUsers,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400",
    pos: "lg:top-32 lg:left-[45rem]",
    delay: 0.5,
  },
];


// navItems
export const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Why Us", href: "#why-us", id: "why-us" },
  { name: "Services", href: "#services", id: "services" },
  { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
];


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