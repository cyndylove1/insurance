import { Link } from "react-router-dom";
import Button from "../button";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-300 pt-20 pb-10 md:px-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Column */}
          <div>
            <h2 className="md:text-2xl text-xl font-bold text-purple-700">
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
            <h3 className="md:text-lg text-md font-semibold text-purple-700 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-900">
              <li>
                <a href="#home" className="hover:text-purple-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-700 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-purple-700 transition">
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-purple-700 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-700 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>

          
          </div>

          {/* Services Column */}
          <div>
            <h3 className="md:text-lg text-md font-semibold text-purple-700 mb-6">
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
            <h3 className="md:text-lg text-md font-semibold text-purple-700 mb-6">
              Contact Us
            </h3>

            <p className="text-sm text-gray-900">
              Start Your Financial Leadership Journey Today
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:18004039357"
                className="block text-sm text-gray-900 transition"
              >
                1-800-403-9357
              </a>

              <a
                href="tel:14435993748"
                className="block text-sm text-gray-900 transition"
              >
                1-443-599-3748
              </a>
            </div>

            <Link to="/contact">
              <Button
                type="button"
                text="Request Free Consultation"
                className="bg-purple-700 text-white mt-4 p-2"
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-16 pt-8 text-center text-sm text-gray-500">
          © 2026 Eagle Leadership Development Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
