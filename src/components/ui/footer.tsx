import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-300 pt-20 pb-10 md:px-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div>
            <h2 className="md:text-2xl text-xl font-bold text-(--primary)">
              Eagle Leadership Development Inc
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-gray-900">
              Building Wealth. Securing Futures. Creating Legacy.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-900">
              We help individuals, families, and business owners achieve
              financial clarity, protection, and growth through strategic
              planning and customized financial solutions.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="md:text-lg text-md font-semibold text-(--primary) mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-900">
              <li>
                <a href="#hero" className="hover:text-[#581c87] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#581c87] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#581c87] transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#581c87] transition">
                  Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#581c87] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="md:text-lg text-md font-semibold text-(--primary) mb-6">
              Core Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-900">
              <li>College Education Funding</li>
              <li>Wealth Building Strategies</li>
              <li>Life Insurance Solutions</li>
              <li>Debt Management</li>
              <li>Tax-Free Retirement Planning</li>
              <li>Estate & Legacy Planning</li>
              <li>Business Funding Solutions</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="md:text-lg text-md font-semibold text-(--primary) mb-6">
              Contact Us
            </h3>

            <p className="text-sm text-gray-900 max-w-lg">
              Start Your Financial Leadership Journey Today
            </p>
            <div className="space-y-8 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-(--primary) text-white p-3 rounded-xl backdrop-blur-md">
                  <FaPhoneAlt />
                </div>
                <div className="mb-4">
                  <p className="text-sm uppercase text-(--primary) font-semibold mb-2">
                    Call Us
                  </p>
                  <p className="text-md text-gray-900">1-800-403-9357</p>
                  <p className="text-md text-gray-900">1-443-599-3748</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-16 pt-8 text-center text-[13px] text-gray-500">
          © 2026 Eagle Leadership Development Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
